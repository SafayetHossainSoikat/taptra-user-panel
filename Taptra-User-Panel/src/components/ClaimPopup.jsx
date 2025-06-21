import React, { useState } from 'react';

export default function ClaimPopup({ amount = 0, onClaim, onClose }) {
  const [isClaiming, setIsClaiming] = useState(false);

  const handleClaim = () => {
    setIsClaiming(true);
    if (onClaim) onClaim();
    setTimeout(() => {
      setIsClaiming(false);
      if (onClose) onClose();
    }, 1000); // simulating claim delay
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center">
        <h2 className="text-xl font-bold mb-2">Claim Coins</h2>
        <p className="text-gray-600 mb-4">You earned {amount} coins</p>
        <button
          onClick={handleClaim}
          disabled={isClaiming}
          className={`w-full bg-green-500 text-white px-4 py-2 rounded-xl ${
            isClaiming ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
          }`}
        >
          {isClaiming ? 'Claiming...' : 'Claim'}
        </button>
        <button
          onClick={onClose}
          className="mt-4 text-red-500 underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
