import React, { useState } from 'react';
import ClaimPopup from './ClaimPopup';

export default function Wallet() {
  const [isClaimPopupOpen, setIsClaimPopupOpen] = useState(false);
  const coinsBalance = 0; // Dummy coins balance
  const claimAmount = 500; // Dummy earned coins to claim

  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-md w-full max-w-sm text-center">
      <h2 className="text-xl font-semibold mb-2">Coins Balance</h2>
      <p className="text-3xl font-bold text-blue-600 mb-4">{coinsBalance}</p>

      <button
        onClick={() => setIsClaimPopupOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600"
      >
        Claim {claimAmount} Coins
      </button>

      {isClaimPopupOpen && (
        <ClaimPopup
          amount={claimAmount}
          onClaim={() => {
            // Here you can add logic to add coins to balance
            console.log(`Claiming ${claimAmount} coins`);
          }}
          onClose={() => setIsClaimPopupOpen(false)}
        />
      )}
    </div>
  );
}
