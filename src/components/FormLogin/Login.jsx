import { Button, Form } from "react-bootstrap"
import { useState } from "react"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        console.log(email)
        console.log(password)
        e.preventDefault()

    }

    return (


        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                <p>Aún no tenés cuenta? <a href="">Registrate</a> aquí!</p>
                <Button variant="primary" type="submit">
                    Iniciar sesión
                </Button>
            </Form>
        </>
    )
}

export default Login
