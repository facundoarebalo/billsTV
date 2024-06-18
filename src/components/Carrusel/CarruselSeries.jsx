import React from 'react'
import { Carousel, Container, Row } from 'react-bootstrap'
import image1 from '../../assets/img/series/casaPapel.png'
import image2 from '../../assets/img/series/breakingBad.png'
import image3 from '../../assets/img/series/archivo81.png'
import image4 from '../../assets/img/series/dahmer.png'
import image5 from '../../assets/img/series/theWalkingDead.png'
import image6 from '../../assets/img/series/ragna.png'
import './carruselStyle.css'


const images = [
    { src: image1, alt: 'Imagen 1' },
    { src: image2, alt: 'Imagen 2' },
    { src: image3, alt: 'Imagen 3' },
    { src: image4, alt: 'Imagen 4' },
    { src: image5, alt: 'Imagen 5' },
    { src: image6, alt: 'Imagen 6' },

];

const CarruselSeries = () => {
    return (
        <Container>
            <h2 className='tituloSeries'>Series destacadas</h2>
            <Row>
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

export default CarruselSeries
