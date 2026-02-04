import React, { useState } from 'react';
import { items as initialItems } from './data/items';
import ItemCard from './components/ItemCard/ItemCard';
import './App.css';


const USER_ID = 1;

const App = () => {
  const [items, setItems] = useState(initialItems);

  const calculateRating = (votes) => {
    const values = Object.values(votes);
    if (values.length === 0) return 0;
    const sum = values.reduce((acc, v) => acc + v.rating, 0);
    return (sum / values.length).toFixed(1);
  };

  const handleVote = (itemId, rating, review = '') => {
    const randomUserId = Math.floor(Math.random() * 1000);

    setItems(prev =>
      prev.map(item =>
        item.id !== itemId
          ? item
          : {
            ...item,
            votes: {
              ...item.votes,
              [randomUserId]: { rating, review }
            }
          }
      )
    );
  };

  return (
    <div className='app'>
      <h1 className='title'>Rating System</h1>
      <div className='cards'>
        {items.map(item => (
          <ItemCard
            key={item.id}
            item={item}
            userId={USER_ID}
            averageRating={calculateRating(item.votes)}
            onVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
