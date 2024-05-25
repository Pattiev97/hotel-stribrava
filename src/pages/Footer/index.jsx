import './style.css';
import mapaImg from './mapa.png';

export const Footer = () => {
  return (
    <div className="container">
      <h2>Kontakt</h2>
      <p>Hotel stříbrava</p>
      <p>Ke kamenné lávce 12</p>
      <p>317 24 Libnice nad Stříbravou</p>
      <br></br>
      <a href="mailto:recepce@hotelstribrava.cz">recepce@hotelstribarva.cz</a>
      <img src={mapaImg}></img>
    </div>
  );
};
