import { Button } from 'react-bootstrap'
import logo404 from '../../assets/img/404error.gif'
import './404style.css'
import { useNavigate } from 'react-router-dom'
const Error404 = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='container-img'>
                <img className='logo404 img-fluid' src={logo404} alt="" />
                <p className='parrafo-img mx-4 '>Lo sentimos, el contenido que estás buscando no está disponible en estos momentos.</p>
                <Button className='btn-back' onClick={() => navigate("/")}>Volver al inicio</Button>
            </div>

        </>
    )
}

export default Error404
