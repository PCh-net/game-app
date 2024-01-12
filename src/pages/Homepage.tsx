import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Game {
  id: number;
  name: string;
  // Inne pola zależne od struktury danych z IGDB
}

interface Category {
  id: number;
  name: string;
  // Inne pola zależne od struktury danych z IGDB
}

const HomePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getGames');
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  console.log(games)
    fetchGameData();
  }, []);
  

  return (
    <div className='bg-gradient-to-tr from-slate-600 via-slate-700 to-slate-800'>
      {loading ? <p>Loading...</p> : (
        <ul>
          {games.map(game => (
            <li className='bg-gradient-to-tr from-slate-600 via-slate-700 to-slate-800' key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
