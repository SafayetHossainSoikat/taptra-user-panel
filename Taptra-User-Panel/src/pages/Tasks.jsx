import React from 'react';
import TasksList from '../components/TasksList';

export default function Tasks() {
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Available Tasks</h1>
      <TasksList />
    </div>
  );
}
