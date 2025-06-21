import React from 'react';
import Wallet from '../components/Wallet';

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">My Wallet</h1>
      <Wallet />
      <div className="mt-6 w-full max-w-sm text-center text-gray-500">
        <p>Your current balance is displayed above.</p>
        <p>Withdraw coins once you reach 50M coins (~ $1,000).</p>
      </div>
    </div>
  );
}
