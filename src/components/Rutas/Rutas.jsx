import { Route, Routes } from "react-router-dom"
import Home from '../../views/Home/Home'
import About from '../../views/About/About'
import Sub from '../../views/Suscripcion/Sub'
import Error404 from '../../views/404/Error404'
import Registro from "../../views/Registro/Registro"

const Rutas = () => {
  return (
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/suscripcion" element={<Sub />} />
    <Route path="*" element={<Error404 />} />
    <Route path="/registro" element={<Registro/>} />
</Routes>
  )
}

export default Rutas
