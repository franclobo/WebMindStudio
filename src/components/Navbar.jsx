import "boxicons";
import { Link } from 'react-router-dom'
import Logo from "../assets/images/pc.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import whatsapp from "../assets/icons/ic_whatsapp.svg";


export const WebNavbar = () => {
  return (
    <>
      <Navbar expand="xl" className="bg-body-tertiary">
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
              <Nav.Link href="#home">
                <a href="#home">
                  <box-icon
                    name="home"
                    type="solid"
                    color="rgba(255,255,255,1)"
                  ></box-icon>
                </a>
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="https://wa.me/56927583663?text=Hello">
                <img className="whatsapp" src={whatsapp} alt="whatsapp" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

