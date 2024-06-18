import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Rutas from './components/Rutas/Rutas'
import Navegador from './components/Navegador/Navegador'
import Footer from './components/Footer/Footer'

function App() {
 

  return (
    <>
    <Navegador/>
      <h1>Bills TV APP</h1>
      <Rutas/>
      <Footer/>
    </>
  )
}

export default App
