import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm"
import { useDispatch } from 'react-redux';
// import { LoginSincrono } from '../redux/actions/actionsLogin';
import { loginEmailPassword, loginGoogle } from '../redux/actions/actionLogin';


const Login = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: "",
        password: ""
    })

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
        reset()
    }


    return (
        <div className="my-5 w-100">
            <Form className="my-5 form py-2 w-50 mx-auto" onSubmit={handleLogin}>

                <Container className="auth__social-networks">
                    <Container className="google-btn" onClick={handleGoogle}>
                        <Container className="google-icon-wrapper py-2 google">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" /> Iniciar con Google

                        </Container>
                    </Container>
                </Container>
                <div className='mx-auto w-75'>
                    <div className="mx-auto w-75">
                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={email}
                                onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3 mx-auto w-75">
                            <Button className="google w-100" type="submit">
                                Enviar
                            </Button>
                        </Form.Group>
                        <p className="text-center">¿no tienes cuenta? <Link className="link-warning" to="/registro">Registrate</Link></p>
                    </div>
                </div>

            </Form>
        </div>

    );
}

export default Login;
