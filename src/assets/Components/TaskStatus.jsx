import React from 'react';
import CorrectPng from '../correct.png';
import { toast } from 'react-toastify';

const TaskStatus = ({ getData, setGetData, setInProgressCount, setResolveCount, resolvedTickets, setResolvedTickets }) => {

  const handleComplete = (task) => {
    setGetData(prev => prev.filter(t => t.id !== task.id));


    setResolvedTickets(prev => [...prev, task]);


    setInProgressCount(prev => prev - 1);
    setResolveCount(prev => prev + 1);
    toast(
      <span className="flex items-center gap-2 font-medium">
        <img src={CorrectPng} alt="icon" className="w-5 h-5" />Completed
      </span>
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Task Status</h1>
      {getData.length > 0 ? getData.map(task => (
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
      {resolvedTickets.length > 0 ? resolvedTickets.map(task => (
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