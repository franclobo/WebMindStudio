// Import Swiper React components
import Marquee from "react-fast-marquee";
import ReactLogo from "../assets/icons/react_logo.png";
import PSQL from "../assets/icons/psql.png";
import Ruby from "../assets/icons/Ruby.png";
import Rails from "../assets/icons/rails.png";
import Vite from "../assets/icons/Vite.svg";

export const IconCarousel = () => {
  return (
    <>
      <Marquee
        className="marquee"
        gradient={false}
        speed={100}
        pauseOnHover={false}
      >
        <div className="icons">
          <img className="icon" src={ReactLogo} alt="React" />
        </div>
        <div className="icons">
          <img className="icon" src={PSQL} alt="PostgreSQL" />
        </div>
        <div className="icons">
          <img className="icon" src={Ruby} alt="Ruby" />
        </div>
        <div className="icons">
          <img className="icon" src={Rails} alt="Rails" />
        </div>
        <div className="icons">
          <img className="icon" src={Vite} alt="Vite" />
        </div>
      </Marquee>
    </>
  );
}
