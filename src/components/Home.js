import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

function Home() {
    const { user, logOut } = useUserAuth();

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
        </div>
    )
}

export default Home