import React from 'react';

export default function ReferralPopup({ onClose }) {
  const referralLink = "https://taptra-app.com/referral?code=YOURCODE123";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center">
        <h2 className="text-xl font-bold mb-2">Your Referral Link</h2>
        <input
          className="w-full p-2 border border-gray-300 rounded mb-4 text-center"
          readOnly
          value={referralLink}
        />
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}
