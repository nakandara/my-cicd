import './App.css';
import { Row, Col, Container } from "react-bootstrap"
import Theme from './components/Theme'
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />

                <Route path='/' element={<Theme />} />
                <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;

