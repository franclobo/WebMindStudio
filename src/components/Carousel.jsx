import Carousel from "react-bootstrap/Carousel";
import Security from "../assets/images/security.jpg";
import Internet from "../assets/images/internet.jpg";
import Mobile from "../assets/images/mobile.jpg";
import WebMobile from "../assets/images/webmobil.jpeg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Security} alt="First slide" />
        <Carousel.Caption>
          <h3>Quienes somos</h3>
          <p>
            Somos un equipo apasionado de diseñadores, desarrolladores y
            expertos en tecnología comprometidos con la excelencia y la
            innovación. Nuestro talentoso equipo colabora estrechamente contigo
            para transformar tus ideas en realidades digitales poderosas y
            efectivas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Internet} alt="Second slide" />
        <Carousel.Caption>
          <h3>Lo que hacemos</h3>
          <p>
            Entregamos soluciones digitales de alta calidad a clientes
            satisfechos. Siempre estamos listos para abrazar nuevos desafíos y
            oportunidades, trabajando con rapidez y precisión para cumplir con
            tus plazos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Mobile} alt="Third slide" />
        <Carousel.Caption>
          <h3>Por qué lo hacemos</h3>
          <p>
            Creemos que la tecnología es la clave para desbloquear el potencial
            de las empresas en el mundo digital. Queremos empoderarte para que
            alcances nuevos horizontes, conquistes mercados y destaquen entre la
            competencia. Tu éxito es nuestro éxito, y trabajamos incansablemente
            para ayudarte a alcanzar tus objetivos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={WebMobile} alt="Third slide" />
        <Carousel.Caption>
          <h3>Como lo hacemos</h3>
          <p>
            Nuestro enfoque se basa en la creatividad, la calidad y la
            colaboración. Utilizamos tecnología de vanguardia y metodologías
            probadas para crear soluciones personalizadas que se adaptan a tus
            necesidades únicas. Desde el primer borrador hasta la implementación
            final, te mantenemos en el centro de todo el proceso, asegurándonos
            de que cada detalle se alinee con tu visión y objetivos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
