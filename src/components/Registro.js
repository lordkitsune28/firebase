import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { registroEmailPasswordNombre } from "../redux/actions/actionRegister";

export const Registro = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: "",
        email: "",
        pass1: "",
        pass2: ""
    })

    const { nombre, email, pass1, pass2 } = formValues;

    const handleRegistro = (e) =>{
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email, pass1, nombre))
    }

    return (
        <div className="my-5 w-100">
            <div className='mx-auto w-75'>
                <div className="mx-auto w-75">
                    <Form className="my-5 form py-2 my-3 w-50 mx-auto" onSubmit={handleRegistro}>
                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                name="nombre"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="pass1"
                                value={pass1}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicRepitPassword">
                            <Form.Label>Repita contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="pass2"
                                value={pass2}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <div className="mb-3 mx-auto w-75">
                            <Button className="google w-50 me-3" type="submit">
                                Registrarse
                            </Button>

                            <Link className="ms-3 link-warning" to="/">Login</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div >
    )
}