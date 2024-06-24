import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './formRegStyle.css'
import Swal from 'sweetalert2'
import axios from 'axios'


const FormRegistro = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Las contraseñas no coinciden",
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Registrado con éxito",
                text: "Bienvenido a BillsTV",
                showConfirmButton: false,
                timer: 1500,
            })
        }

        const userData = {
            username: username,
            email: email,
            password: password,
            isAdmin: false
        }

        try {
            const response = await axios.post('http://localhost:8000/users', userData)
            console.log('usuario guardado', response.data)

        } catch (error) {
            console.error('Error al guardar el usuario:', error);

        }
    }



    return (
        <>
            <h1 className='titulo-reg'>Registrate ahora!</h1>
            <Form className='formulario-registro' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required

                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={5}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicComfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        minLength={5}
                    />
                    <Form.Text className="text-white">
                        Nunca compartas tus datos con nadie.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarme
                </Button>
            </Form>

        </>
    )
}

export default FormRegistro
