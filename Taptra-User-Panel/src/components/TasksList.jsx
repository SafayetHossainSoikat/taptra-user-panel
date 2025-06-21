import React from 'react';

export default function TasksList() {
  // Dummy data for now
  const tasks = [
    { id: 1, title: 'Visit our partner site', coins: 5000 },
    { id: 2, title: 'Watch a short video', coins: 1000 },
    { id: 3, title: 'Follow on Twitter', coins: 2000 },
  ];

  return (
    <div className="w-full max-w-md space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="font-medium text-lg">{task.title}</h2>
          <p className="text-blue-600 mt-1">{task.coins} coins</p>
          <button className="mt-2 w-full bg-green-500 text-white px-4 py-2 rounded-xl">
            Start Task
          </button>
        </div>
      ))}
    </div>
  );
}
