import React from 'react';

export default function EnergyBar({ current = 50, max = 100 }) {
  const percentage = (current / max) * 100;

  return (
    <div className="w-full max-w-md bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
      <div
        className="bg-green-500 h-4 transition-all"
        style={{ width: `${percentage}%` }}
      ></div>
      <p className="text-center mt-2 text-sm text-gray-600">
        Energy: {current}/{max}
      </p>
    </div>
  );
}
