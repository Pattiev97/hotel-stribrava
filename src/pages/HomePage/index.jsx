import './style.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { CardList } from '../CardList';
import { useState } from 'react';
import { useEffect } from 'react';

export const HomePage = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      setRooms(data.data);
    };

    fetchRooms();
  }, []);

  return (
    <div className="container">
      <Header />
      <main>
        <div className="cards-header">
          <h2>Naše pokoje</h2>
          <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        </div>
        <CardList rooms={rooms} />
      </main>
      <Footer />
    </div>
  );
};
