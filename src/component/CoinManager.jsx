import React, { useState, useEffect } from 'react';
import Coin from './Coin';

const CoinManager = ({ onCollectCoin, playerPosition }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newX = Math.floor(Math.random() * window.innerWidth);
      const newY = Math.floor(Math.random() * window.innerHeight);

      setCoins((prevCoins) => [...prevCoins, { x: newX, y: newY }]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCollect = (index) => {
    const collectedCoin = coins[index];
    const spriteRadius = 25; // Assuming the sprite's radius is 25 pixels
    const coinRadius = 10; // Assuming the coin's radius is 10 pixels

    // Check for collision between the sprite and the coin
    const distance = Math.sqrt(
      Math.pow(collectedCoin.x - playerPosition.x, 2) +
        Math.pow(collectedCoin.y - playerPosition.y, 2)
    );

    if (distance < spriteRadius + coinRadius) {
      setCoins((prevCoins) => {
        const newCoins = [...prevCoins];
        newCoins.splice(index, 1);
        return newCoins;
      });

      onCollectCoin();
    }
  };

  return (
    <div>
      {coins.map((coin, index) => (
        <Coin
          key={index}
          x={coin.x}
          y={coin.y}
          onCollect={() => handleCollect(index)}
        />
      ))}
    </div>
  );
};

export default CoinManager;