import './style.css';
import { CardDetail } from '../CardDetail';
import { useState } from 'react';

export const CardList = ({ rooms }) => {
  const [opened, setOpened] = useState(false);
  
  const toggleOpened = () => {
    setOpened(!opened);
  };


  return rooms.map((room) => (
    <div className="card" key={room.id} onClick={toggleOpened}>
      <div className="cards-row">
        <img className="card__image" src={room.image.src} alt={room.image.title}>
        </img>
        <h3 className="card">{room.name}</h3>
        <p>{room.price} Kč na osobu</p>
      </div>
    </div>
  ));
  
};
