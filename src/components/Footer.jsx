import Logo from "../assets/images/pc.png";
import LocationOn from "../assets/icons/LocationOn.svg";
import {
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <footer className="footer">
      <article className="footer__article">
        <h3 className="footer__title">
          <img src={LocationOn} alt="LocationOn" style={{ width: "30px" }} />
          Dirección
        </h3>
        <p className="footer__text">
          Av. Pablo Esteban Yerovi Romo y calle N81C
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7979.628185580849!2d-78.5037583!3d-0.0834076!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1694549433002!5m2!1ses!2sec"
          width="250"
          height="250"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Parroquia San Judas Tadeo"
        />
      </article>
      <article className="footer__article">
        <h3 className="footer__title">
          Escríbenos tus requerimientos con gusto nos contactaremos contigo.
        </h3>
        <ContactForm />
        <small className="autor">
          Desarrollado por{" "}
          <a href="https://www.linkedin.com/in/francisco-borja-lobato/">
            Ing. Francisco Borja &copy;
          </a>
        </small>
      </article>
      <article className="footer__article contact">
        <img src={Logo} alt="logo" style={{ width: "300px" }} />
        <h3 className="footer__title">Contacto</h3>
        <p className="footer__text">
          <PhoneOutlined />
          Celular: +593 961-842-276
        </p>
        <p className="footer__text">
          <MailOutlined />
          Email: francisco.borja@webmindsstudio.com
        </p>
        <p className="footer__text">
          <ClockCircleOutlined />
          Horario de atención: 08:00 - 18:00 de Lunes a Sábado
        </p>
      </article>
    </footer>
  );
}

export default Footer;
