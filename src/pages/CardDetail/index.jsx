import { useState } from 'react';
import './style.css';

export const CardDetail = ({ room }) => {
  const [finalPrice, setFinalPrice] = useState(0);

  return (
    <>
      <div className={'container'} room="">
        <h2>Pokoj Kč na osobu za noc</h2>
        <img
          src={`http://localhost:4000/assets/${room.image.src}`}
          alt={room.image.title}
        ></img>
        <p>{room.description}</p>
      </div>
      <form>
        Od: <input type="date" value="date" />
        Do: <input type="date" value="date" />
        Počet osob: <input type="text" />
        Stravování:
        <select>
          <option value="Žádné">Žádné</option>
          <option value="Vege">Vege</option>
          <option value="Maso">Maso</option>
        </select>
        Domácí mazlíček: <input type="checkbox" />
        Přistýlka pro dítě: <input type="checkbox" />
        Bezbariérový přístup: <input type="checkbox" />
        E-mail: <input type="text" />
        Telefon: <input type="text" />
        Celková cena za pobyt: {finalPrice} Kč.
        <button>Odeslat poptávku</button>
      </form>
    </>
  );
};
