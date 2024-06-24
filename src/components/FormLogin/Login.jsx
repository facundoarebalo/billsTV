import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './loginStyle.css'
import Swal from "sweetalert2";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8000/users');
            const users = response.data;
            const userFound = users.find((user) => user.email === email && user.password === password);
            if (userFound) {
                Swal.fire({
                    title: "Bienvenido",
                    text: "Has iniciado sesión correctamente",
                    icon: "success",
                });
            }
            else {
                Swal.fire({
                    title: "Error",
                    text: "Email o contraseña incorrectos",
                    icon: "error",
                });

            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <Form onSubmit={handleLogin} className="formularioLogin">
                <Form.Group className="mb-3 formGroupEmail" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresá tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        minLength={5}
                        maxLength={25}
                        className="inputEmail"
                    />
                </Form.Group>
                <Form.Group className="mb-3 formGroupPassword" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingresá tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={5}
                        maxLength={25}
                        className="inputEmail"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                <p>Aún no tenés cuenta? <a className="link-registro" onClick={() => navigate("/registro")}>Registrate</a> aquí!</p>
                <Button variant="primary" type="submit">
                    Iniciar sesión
                </Button>
            </Form>
        </>
    );
};

export default Login;