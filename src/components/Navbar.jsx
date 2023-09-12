import "boxicons";
import { Link } from 'react-router-dom'
import Logo from "../assets/images/pc.png";


export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" className="logo__img" />
          <div className="logo__txt">
            <h1 className="title">WebMinds Studio</h1>
            <p className="subtitle">Haz tu sueño digital</p>
          </div>
        </Link>
      </div>
      <div className="links">
        <a href="#home">
          <box-icon name="home" type="solid" color="rgba(255,255,255,1)"></box-icon>
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

