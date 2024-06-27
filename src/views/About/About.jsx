import './aboutStyle.css';

const sections = [
    {
        title: "Catálogo Extenso y Diversificado",
        content: "Bills TV te ofrece una biblioteca en constante expansión con miles de títulos disponibles. Disfruta de una variada selección que incluye: Películas de Estreno, Series Originales, Documentales, y Contenido Infantil."
    },
    {
        title: "Alta Calidad de Transmisión",
        content: "Experimenta el mejor entretenimiento con calidad de imagen y sonido excepcionales. Bills TV ofrece transmisiones en 4K Ultra HD y HDR para una visualización nítida y vívida, junto con audio envolvente Dolby Atmos."
    },
    {
        title: "Plataforma Intuitiva y Personalizable",
        content: "Nuestra interfaz amigable y fácil de usar permite una navegación sin esfuerzo. Además, Bills TV aprende de tus hábitos de visualización para ofrecerte recomendaciones personalizadas."
    },
    {
        title: "Multidispositivo y Sin Conexión",
        content: "Disfruta de Bills TV en cualquier momento y lugar. Compatible con televisores inteligentes, tabletas, móviles, consolas de videojuegos y computadoras personales. Descarga tus series y películas favoritas para verlas sin conexión."
    },
    {
        title: "Planes Flexibles",
        content: "Bills TV ofrece distintos planes de suscripción para adaptarse a tus necesidades: Plan Básico, Plan Premium y Plan Ultimate."
    },
    {
        title: "Contenido Sin Anuncios",
        content: "Disfruta de una experiencia de visualización ininterrumpida con nuestra política de cero anuncios. En Bills TV, tu entretenimiento es lo primero."
    },
    {
        title: "Contenido Internacional",
        content: "Sumérgete en una amplia selección de contenido internacional, con series y películas de todo el mundo. Explora diferentes culturas y estilos narrativos sin salir de casa."
    }
];

function About() {




    return (
        <div className="about-container">
            <h1 >Bills TV: Tu Destino de Streaming de Series y Películas</h1>
            {sections.map((section, index) => (
                <div key={index} className="section">
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                </div>
            ))}
        </div>
    );
}

export default About;

