import './style.css';
import { CardDetail } from '../CardDetail';
import { useState } from 'react';

export const CardList = ({ rooms }) => {
  const [selected, setSelected] = useState(null);

  return (
    <>
    <div className='cards-row'>
      {rooms.map((room) => (
        <div
          className={'card'}
          key={room.id}
          onClick={() => setSelected(room.id)}
        >
          <div className="cards">
            <img
              className="card__image"
              src={`http://localhost:4000/assets/${room.image.src}`}
              alt={room.image.title}
            ></img>
            <h3 className="card">{room.name}</h3>
            <p>{room.price} Kč na osobu</p>
          </div>
        </div>
      ))}
      {selected !== null && (
        <CardDetail room={rooms.find((room) => room.id === selected)} />
      )}
      </div>
    </>
  );
};

// <div>{opened ? <CardDetail opened={true} /> : 'ahoj'}</div>
