import React, { useState } from 'react';

export default function CoinButton({ onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) onClick();
    setTimeout(() => setIsClicked(false), 200); // reset animation
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-yellow-400 text-white px-6 py-3 rounded-full shadow-xl transform transition ${
        isClicked ? 'scale-90' : 'scale-100'
      } active:scale-90`}
    >
      Tap to Earn Coins
    </button>
  );
}
