import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/pc.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import whatsapp from "../assets/icons/ic_whatsapp.svg";

export const WebNavbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setNavbarVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <Navbar
        expand="xl"
        bg="dark"
        variant="dark"
        className={`bg-body-tertiary ${isNavbarVisible ? "visible" : "hidden"}`}
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="logo" className="logo__img" />
              <div className="logo__txt">
                <h1 className="title">WebMinds Studio</h1>
                <p className="subtitle">Haz tu sueño digital</p>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">Nosotros</Nav.Link>
              <Nav.Link href="#services">Servicios</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
              <Nav.Link href="https://wa.me/593961842276?text=Hello">
                <img className="whatsapp" src={whatsapp} alt="whatsapp" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
