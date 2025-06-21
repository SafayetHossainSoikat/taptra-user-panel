import React, { useState } from 'react';
import ReferralPopup from '../components/ReferralPopup';

export default function ReferralPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Referral Program</h1>
      <p className="text-center text-gray-600 mb-4">
        Share your referral link and earn extra coins!
      </p>
      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow"
      >
        Show My Referral Link
      </button>

      {isPopupOpen && <ReferralPopup onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
}
