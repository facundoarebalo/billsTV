import { Button } from 'react-bootstrap'
import { useState } from 'react'
import './subStyle.css'

const Sub = () => {

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    console.log(nombre, "nombre")
    console.log(apellido, "apellido")
    console.log(email, "email")
    console.log(password, "password")
    e.preventDefault()
  }



  return (
    <>
      <div className="pricing-wrapper clearfix">
        {/* Titulo */}
        <div className="pricing-table">
          <h3 className="pricing-title">Basico</h3>
          <div className="price">
            4000ARS<sup>/ mes</sup>
          </div>
          {/* Lista de Caracteristicas / Propiedades */}
          <ul className="table-list">
            <li>
              1 <span>Dispositivo compatible</span>
            </li>
            <li>
              <span>Puedes ver en HD</span>
            </li>
            <li>
              <span>Contenidos descargables</span>
            </li>
          </ul>
          {/* Contratar / Comprar */}
          <div className="table-buy">
            <p>
              4000ARS<sup>/ mes</sup>
            </p>
            <a href="./404.html" className="pricing-action">
              Comprar
            </a>
          </div>
        </div>
        <div className="pricing-table recommended">
          <h3 className="pricing-title">Premium</h3>
          <div className="price">
            7000ARS<sup>/ mes</sup>
          </div>
          {/* Lista de Caracteristicas / Propiedades */}
          <ul className="table-list">
            <li>
              2 <span>Dispositivos compatibles</span>
            </li>
            <li>
              <span>Puedes ver en FULL HD</span>
            </li>
            <li>
              <span>Contenidos descargables en 2 dispositivos</span>
            </li>
            <li>
              <span>Control parental para moderar lo que mira tu familia</span>
            </li>
          </ul>
          {/* Contratar / Comprar */}
          <div className="table-buy">
            <p>
              7000ARS<sup>/ mes</sup>
            </p>
            <a href="./404.html" className="pricing-action">
              Comprar
            </a>
          </div>
        </div>
        <div className="pricing-table">
          <h3 className="pricing-title ">Ultimate</h3>
          <div className="price">
            10000ARS<sup>/ mes</sup>
          </div>
          {/* Lista de Caracteristicas / Propiedades */}
          <ul className="table-list ">
            <li>
              4 <span>Dispositivos compatibles</span>
            </li>
            <li>
              <span>Puedes ver en 4k</span>
            </li>
            <li>
              <span>Contenidos descargables en 6 dispositivos</span>
            </li>
            <li>
              <span>Control parental para moderar lo que mira tu familia</span>
            </li>
            <li>
              <span>Eventos desportivos</span>
            </li>
            <li>
              <span>Audio espacial</span>
            </li>
          </ul>
          {/* Contratar / Comprar */}
          <div className="table-buy">
            <p>
              10000ARS<sup>/ mes</sup>
            </p>
            <a href="./404.html" className="pricing-action">
              Comprar
            </a>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="container" id="formulario">
        <div id="containerContact">
          <div className="mb-3">
            <div>
              <h1 className="text-center my-3"> ¡Suscríbete!</h1>
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Nombre"
                pattern="^[a-zA-Z]+$"
                minLength={5}
                maxLength={30}
                required
                value={nombre}
                onChange={
                  (e) => setNombre(e.target.value)
                }
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Apellido"
                pattern="^[a-zA-Z]+$"
                required
                value={
                  apellido
                }
                onChange={
                  (e) => setApellido(e.target.value)
                }
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="nombre@ejemplo.com"
                pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                minLength={3}
                maxLength={30}
                required
                value={email}
                onChange={
                  (e) => setEmail(e.target.value)
                }
              />
            </div>
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              minLength={5}
              maxLength={30}
              placeholder="***********"
              required
              value={password}
              onChange={
                (e) => setPassword(e.target.value)
              }
            />
            <div className="invalid-feedback">
              Por favor introduce tu contraseña.
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              id="submit"
              value="Enviar"
            >Enviar</Button>
          </div>
        </div>
      </form>
    </>

  )
}

export default Sub
