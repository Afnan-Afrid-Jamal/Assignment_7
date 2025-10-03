import React, { useState } from 'react';
import CorrectPng from '../correct.png';

const TaskStatus = ({ getData, setGetData, setInProgressCount, setResolveCount }) => {
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const activeTasks = getData.filter(task => !resolvedTasks.some(t => t.id === task.id));

  const handleComplete = (task) => {
    setResolvedTasks(prev => [...prev, task]);
    setGetData(prev => prev.filter(t => t.id !== task.id));
    setInProgressCount(prev => prev - 1);
    setResolveCount(prev => prev + 1);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Task Status</h1>
      {activeTasks.length > 0 ? activeTasks.map(task => (
        <div key={task.id} className="bg-white shadow-md rounded-lg px-6 py-4 mb-4">
          <h2 className="text-lg font-medium mb-2">{task.title}</h2>
          <button
            className="btn w-full bg-[#02A53B] py-2 text-white rounded-lg hover:bg-[#027e2e]"
            onClick={() => handleComplete(task)}
          >
            Complete
          </button>
        </div>
      )) : <p className="text-gray-500">Select a ticket to add to Task Status</p>}

      <h1 className="text-2xl font-semibold mb-4 mt-8">Resolved Tasks</h1>
      {resolvedTasks.length > 0 ? resolvedTasks.map(task => (
        <div key={task.id} className="bg-white shadow-md rounded-lg px-6 py-4 mb-4">
          <h2 className="text-lg font-medium mb-2">{task.title}</h2>
          <p className="flex items-center gap-1 text-green-500 font-semibold">
            <img src={CorrectPng} alt="completed" className="w-5 h-5" /> Completed
          </p>
        </div>
      )) : <p className="text-gray-500">No resolved tasks yet.</p>}
    </div>
  );
};

export default TaskStatus;
