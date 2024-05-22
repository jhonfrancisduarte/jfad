import React from 'react';

const Coin = ({ x, y, onCollect }) => {
  const handleCollect = () => {
    onCollect();
  };

  return (
    <div
      className="coin"
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={handleCollect}
    ></div>
  );
};

export default Coin;
