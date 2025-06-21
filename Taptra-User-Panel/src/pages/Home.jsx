import React from 'react';

export default function Home() {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to Taptra</h1>
      <p className="text-center text-gray-600">
        This is the home page of your User Panel.
      </p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl shadow">
        Get Started
      </button>
    </div>
  );
}
