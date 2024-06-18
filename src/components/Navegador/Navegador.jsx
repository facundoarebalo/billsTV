import { Navbar, Container, Nav, Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci";

import logo from '../../assets/img/fondoCompleto.png'
import './navStyle.css'


const Navegador = () => {

    const navigate = useNavigate()


    return (
        <>
            <Navbar expand="lg" className="navBar">
                <Navbar.Brand className="logo text-white" onClick={() => navigate("/")}>
                    <img className="logo" src={logo} alt="logo-bills-tv" /> Bills TV
                </Navbar.Brand>
                <Navbar.Toggle className="menuHamb" aria-controls="basic-navbar-nav" />
                <Container className="containerNav">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Container className="container-links mb-2 mt-2">
                                <Nav.Link className="links" onClick={() => navigate("/")}>Comedia</Nav.Link>
                                <Nav.Link className="links" onClick={() => navigate("/")}>Ciencia Ficción</Nav.Link>
                                <Nav.Link className="links" onClick={() => navigate("/")}>Acción</Nav.Link>
                                <Nav.Link className="links" onClick={() => navigate("/")}>Terror</Nav.Link>
                            </Container>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="success">
                                <CiSearch className="icon-search mb-1" />
                            </Button>
                        </Form>
                        <Button className="btn-login mt-3 mt-md-0" variant="grey">
                            Login
                        </Button>
                        <Nav.Link className="links text-center mx-md-3" onClick={() => navigate("/")}>Suscripciones</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navegador
