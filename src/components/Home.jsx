import Logo from "../assets/images/webmind.svg";
import UncontrolledExample from "./Carousel";
import Footer from "./Footer";

export const Home = () => {
  return (
    <main>
      <section className="wmash" id="home">
        <div className="wmash__img">
          <img src={Logo} alt="internet" />
        </div>
        <div className="wmash__txt">
          <h1 className="wmash__title">
            Especialistas en creación de páginas web y desarrollo de software
          </h1>
          <p className="elevator">
            En Webminds Studio creamos oportunidades. Tu éxito es nuestra
            prioridad, y estamos emocionados de trabajar contigo para llevar tus
            ideas a la vida digital. ¡Bienvenidos a una colaboración que
            transformará tu presencia en línea y hará que tu marca brille en el
            mundo digital!
          </p>
        </div>
      </section>
      <section className="services" id="services">
        <div className="servicio basico">
          <h2 className="basico__title">Presencia Digital Inicial</h2>
          <p className="basico__txt">
            Este paquete es ideal para quienes están dando sus primeros pasos en
            línea. Creamos una página web atractiva que introduce tu marca en el
            mundo digital.
          </p>
          <strong className="basico__description">Características:</strong>
          <ul className="basico__list">
            <li className="basico__item">
              Diseño de página web de hasta 5 secciones.
            </li>
            <li className="basico__item">
              Diseño responsivo para una experiencia perfecta en dispositivos
              móviles.
            </li>
            <li className="basico__item">
              Integración de redes sociales básica.
            </li>
            <li className="basico__item">
              Formulario de contacto para facilitar la comunicación.
            </li>
          </ul>
          <strong className="basico__description">Beneficios:</strong>
          <ul className="basico__list">
            <li className="basico__item">Inicio rápido en línea.</li>
            <li className="basico__item">Presencia digital profesional.</li>
          </ul>
          <strong className="basico__description">Desde: US $499</strong>
        </div>
        <div className="servicio avanzado">
          <h2 className="avanzado__title">Experiencia Digital Completa</h2>
          <p className="avanzado__txt">
            Este paquete es para aquellos que desean más que una simple
            presencia. Creamos una página web dinámica junto con una solución de
            software personalizada para satisfacer tus necesidades específicas.
          </p>
          <strong className="avanzado__description">Características:</strong>
          <ul className="avanzado__list">
            <li className="avanzado__item">
              Diseño de página web de hasta 10 secciones.
            </li>
            <li className="avanzado__item">
              Integración de un blog para compartir contenido relevante.
            </li>
            <li className="avanzado__item">
              Desarrollo de software personalizado para una función específica.
            </li>
            <li className="avanzado__item">
              Integración con bases de datos para una gestión eficiente de
              datos.
            </li>
            <li className="avanzado__item">
              SEO básico para mejorar la visibilidad en línea.
            </li>
          </ul>
          <strong className="avanzado__description">Beneficios:</strong>
          <ul className="avanzado__list">
            <li className="avanzado__item">Experiencia de usuario mejorada.</li>
            <li className="avanzado__item">
              Solución de software que se adapta a tus requerimientos.
            </li>
          </ul>
          <strong className="avanzado__description">Desde: US $1499</strong>
        </div>
        <div className="servicio premium">
          <h2 className="premium__title">Transformación Digital Total</h2>
          <p className="premium__txt">
            Este paquete es para quienes buscan una transformación digital
            completa. Obtendrás no solo una presencia en línea sólida, sino
            también herramientas avanzadas para optimizar procesos y mejorar la
            interacción con tus clientes.
          </p>
          <strong className="premium__description">Características:</strong>
          <ul className="premium__list">
            <li className="premium__item">
              Diseño de página web personalizado con un número ilimitado de
              secciones.
            </li>
            <li className="premium__item">
              Funcionalidades avanzadas de bases de datos y análisis.
            </li>
            <li className="premium__item">
              Estrategia completa de SEO y marketing digital.
            </li>
          </ul>
          <strong className="premium__description">Beneficios:</strong>
          <ul className="premium__list">
            <li className="premium__item">
              Ventaja competitiva con tecnología avanzada.
            </li>
            <li className="premium__item">
              Transformación digital para un crecimiento sostenible.
            </li>
          </ul>
          <strong className="premium__description">Desde: US $2999</strong>
        </div>
      </section>

      <section className="about" id="about">
        <UncontrolledExample />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </main>
  );
}

