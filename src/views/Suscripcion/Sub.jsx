import './subStyle.css'
import { useNavigate } from 'react-router-dom'

const Sub = () => {


  const navigate = useNavigate()

  return (
    <>
      <main className='main-sub'>
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
              <a onClick={() => navigate("/registro")} className="pricing-action">
                Suscríbete!
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
              <a onClick={() => navigate("/registro")} className="pricing-action">
                Suscríbete!
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
              <a onClick={() => navigate("/registro")} className="pricing-action">
                Suscríbete!
              </a>
            </div>
          </div>
        </div>
      </main>


    </>

  )
}

export default Sub
