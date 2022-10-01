import React, { useState, useEffect } from "react";
import { useUserAuth } from '../context/UserAuthContext'
import axios from "axios";
function Home() {
    const { user, logOut } = useUserAuth();
    console.log(user.displayName)
    console.log(user.email)
    console.log()
    const [email, setEmail] = useState("");
    const [payload, setPayload] = useState("");
    const [password, setPassword] = useState("");
    const [getname, setGetname] = useState([]);
    //  const [getemail, setGetemail] = useState("");
    // const [getpayload, setGetpayload] = useState("");
    // const newLOguser1 = {
    //     email,
    //     password,
    //     payload
    // }

    // axios.post("http://localhost:8090/loguser/add", newLOguser1).then(() => {
    //     alert("user add")
    //     console.log("addd")

    // }).catch((err) => {
    //     alert(err)
    // })


    useEffect(() => {
        const getlogdata = async () => {
            axios.get("http://localhost:8090/loguser/").then((res) => {

                console.log(res.data[0])
                setGetname(res.data)
                // setGetemail(res.data.email)
                // setGetpayload(res.data.payload)

            }).catch((err) => {
                alert(err)
            })
        }
        const googlelogin = async () => {

            setEmail(user.email)
            setPassword(user.photoURL)
            setPayload(user.displayName)
            try {
                const newLOguser1 = {
                    email,
                    password,
                    payload
                }
                axios.post("http://localhost:8090/loguser/add", newLOguser1).then(() => {

                    console.log("addd")

                }).catch((err) => {
                    alert(err)
                })
            } catch (error) {
                console.log(error.message)
            }
        }
        getlogdata()
        googlelogin()
    }, [email, password, payload, user.email, user.photoURL, user.displayName]);


    // const getlogdata = async () => {
    //     try {
    //         axios.get("http://ec2-54-91-203-24.compute-1.amazonaws.com:8090/loguser/").then((res) => {

    //             console.log(res)

    //             // setGetemail(res.data.email)
    //             // setGetpayload(res.data.payload)

    //         }).catch((err) => {
    //             alert(err)
    //         })
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }



    const loguthandler = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            {user && user.email}
            <button onClick={loguthandler}>Logout</button>
            <div> {getname.map((val, key) => {
                return <div key={key} className="food">
                    <h1>{val.name}</h1><h1>{val.payload}</h1>


                </div>
            })}</div>


        </div>
    )
}

export default Home