import { Route, Routes } from "react-router-dom"
import Home from '../../views/Home/Home'
import About from '../../views/About/About'
import Contacto from '../../views/Contact/Contacto'
import Sub from '../../views/Suscripcion/Sub'
import Error404 from '../../views/404/Error404'

const Rutas = () => {
  return (
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contacto />} />
    <Route path="/suscripcion" element={<Sub />} />
    <Route path="*" element={<Error404 />} />
</Routes>
  )
}

export default Rutas
