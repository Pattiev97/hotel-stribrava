import './style.css';
import mapaImg from './mapa.png';

export const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="text__container">
          <h2>Kontakt</h2>
          <div>
            <p>Hotel stříbrava</p>
            <p>Ke kamenné lávce 12</p>
            <p>317 24 Libnice nad Stříbravou</p>
          </div>
          <a href="mailto:recepce@hotelstribrava.cz">
            recepce@hotelstribarva.cz
          </a>
        </div>
        <img src={mapaImg}></img>
      </div>
    </footer>
  );
};
