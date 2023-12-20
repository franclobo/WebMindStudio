import Logo from "../assets/images/pc.png";
import LocationOn from "../assets/icons/LocationOn.svg";
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
          Oe7B N86-67 y Francisco de Rumihurco, El Condado.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.814090789583!2d-78.5063822259608!3d-0.08342733549234653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d585c4a3e7029d%3A0xb5afedad806898b0!2sWebMinds%20Studio!5e0!3m2!1ses-419!2snl!4v1702908612646!5m2!1ses-419!2snl"
          width="250"
          height="250"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="WebMinds Studio, Quito, Ecuador"
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
          Celular: <br />
          Quito: +593 96 184 2276
          <br />
          Santiago de Chile: +56 9 3065 8893
        </p>
        <p className="footer__text">
          Email:
          <br />
          francisco.borja@webmindsstudio.com
          <br />
          carlos.chiluisa@webmindsstudio.com
        </p>
        <p className="footer__text">
          Horario de atención: 08:00 - 18:00 UTC -5 de Lunes a Sábado
        </p>
      </article>
    </footer>
  );
}

export default Footer;
