import { Col, Container, Row } from 'react-bootstrap'
import './footerStyle.css'
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';




const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className='footer-border'>
            <Container className='footer-container'>
                <Row>
                    <Col className='help-column'>
                        <h2>Ayuda</h2>
                        <a onClick={() => navigate("/about")}>About</a>
                        <p className='mt-3'>Preguntas frecuentes</p>
                        <p>Términos y condiciones</p>
                        <a href="">Contacto</a>
                    </Col>
                </Row>
                <Row>
                    <h2 className='text-center'>Social</h2>
                    <Col className='social-icons'>
                        <a href=''><FaFacebookF />
                        </a>
                        <a href=''><FaXTwitter />
                        </a>
                        <a href=''><IoLogoInstagram />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
