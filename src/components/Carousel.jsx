import Carousel from "react-bootstrap/Carousel";
import Webapp from "../assets/images/webmobil.jpeg";
import Amigos from "../assets/images/amigos.jpg";
import Plan from "../assets/images/plan.jpg";
import Trato from "../assets/images/trato.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Webapp} alt="First slide" />
        <Carousel.Caption>
          <h3 className="dp-1__title">
            Transforma tus ideas en realidades digitales poderosas y efectivas.
          </h3>
          <p className="dp-1__phrase">
            Somos un equipo apasionado de diseñadores, desarrolladores y
            expertos en tecnología comprometidos con la excelencia y la
            innovación.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Amigos} alt="Second slide" />
        <Carousel.Caption>
          <h3 className="dp-2__title">
            Prepárate para abrazar nuevos desafíos y oportunidades, trabajando
            con rapidez y precisión
          </h3>
          <p className="dp-2__phrase">
            Entregamos soluciones digitales de alta calidad a clientes
            satisfechos. Siempre estamos listos para cumplir con tus plazos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Plan} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="dp-3__title">
            La tecnología es la clave para desbloquear el potencial de las
            empresas en el mundo digital.
          </h3>
          <p className="dp-3__phrase">
            Alcanza nuevos horizontes, conquista mercados y destaca entre la
            competencia. Tu éxito es nuestro éxito, y trabajamos incansablemente
            para ayudarte a alcanzar tus objetivos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Trato} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="dp-4__title">
            Te mantenemos en el centro de todo el proceso, asegurándonos de que
            cada detalle se alinie con tu visión y objetivos.
          </h3>
          <p className="dp-4__phrase">
            Creatividad, calidad y colaboración con tecnología de vanguardia y
            metodologías probadas para crear soluciones personalizadas que se
            adaptan a tus necesidades únicas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
