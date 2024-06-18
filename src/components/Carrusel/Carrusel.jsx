import React from 'react'
import { Carousel, Container, Row } from 'react-bootstrap'
import image1 from '../../assets/img/peliculas/badBoy.png'
import image2 from '../../assets/img/peliculas/2012.png'
import image3 from '../../assets/img/peliculas/caraCor.png'
import image4 from '../../assets/img/peliculas/clubPelea.png'
import image5 from '../../assets/img/peliculas/juegosHambre.png'
import image6 from '../../assets/img/peliculas/islaSini.png'
import './carruselStyle.css'


const images = [
  { src: image1, alt: 'Imagen 1' },
  { src: image2, alt: 'Imagen 2' },
  { src: image3, alt: 'Imagen 3' },
  { src: image4, alt: 'Imagen 4' },
  { src: image5, alt: 'Imagen 5' },
  { src: image6, alt: 'Imagen 6' },

];

const Carrusel = () => {
  return (
    <Container>
      <Row>
        <h2 className='tituloPeliculas'>Películas destacadas</h2>
        <Carousel>
          {images.map(({ src, alt }) => (
            <Carousel.Item key={alt}>
              <img
                className="w-100"
                src={src}
                alt={alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};

export default Carrusel
