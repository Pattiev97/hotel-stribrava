import './style.css';
import { CardDetail } from '../CardDetail';
import { useState } from 'react';

export const CardList = ({ room, price, image }) => {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  return (
    <div className="cards-row" onClick={toggleOpened}>
      <CardDetail opened={opened} />
    </div>
  );
};
