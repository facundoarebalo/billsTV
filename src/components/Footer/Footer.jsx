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
                        <a className='about-link' onClick={() => navigate("/about")}>About</a>
                        <p className='mt-3'>Preguntas frecuentes</p>
                        <p>Términos y condiciones</p>
                    </Col>
                </Row>
                <Row>
                    <h2 className='text-center titulo-socials'></h2>
                    <Col className='social-icons'>
                        <a href='https://www.facebook.com' target='_blank' className='mx-3'><FaFacebookF />
                        </a>
                        <a href='https://www.x.com' target='_blank' className='mx-3'><FaXTwitter />
                        </a>
                        <a href='https://www.instagram.com' target='_blank' className='mx-3'><IoLogoInstagram />
                        </a>
                    </Col>
                </Row>
            </Container>
            <p className='text-center copy-parrafo'>Copyright 2024 - Todos los derechos reservados <i class="fas fa-copy">Bills TV</i></p>
        </footer>
    )
}

export default Footer