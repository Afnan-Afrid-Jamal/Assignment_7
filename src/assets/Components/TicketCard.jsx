import React from 'react';
import CalendarIcon from '../calendarIcon.svg'
import CorrectPng from '../correct.png';
import { toast } from 'react-toastify';

const TicketCard = ({ eachTicketData, setInProgressCount, setShowTaskStatus, setGetData }) => {

  function handleCardClick() {
    setInProgressCount(prev => prev + 1);
    setShowTaskStatus(true);
    setGetData(prev => [...prev, eachTicketData]);

    toast(
      <span className="flex items-center gap-2 font-medium">
        <img src={CorrectPng} alt="icon" className="w-5 h-5" />In Progress
      </span>
    );
  }

  return (
    <div
      className='flex flex-col w-full mb-5 shadow-md p-5 bg-white rounded-lg hover:cursor-pointer hover:scale-102 transition duration-300 ease-in-out hover:-translate-y-1'
      onClick={handleCardClick}
    >
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-medium'>{eachTicketData.title}</h2>
        <p className={`${eachTicketData.status === 'Open' ? 'text-green-700 bg-green-300' : 'text-blue-700 bg-blue-300'} px-2 py-1 rounded-2xl`}>
          {eachTicketData.status}
        </p>
      </div>
      <p className='text-[#627382] py-4'>{eachTicketData.description}</p>
      <div className='flex justify-between items-center'>
        <h3 className='text-[#627382] text-[14px]'>#{eachTicketData.id}</h3>
        <p className={`${eachTicketData.priority === 'High'
          ? 'text-red-400'
          : eachTicketData.priority === 'Medium'
            ? 'text-orange-400'
            : eachTicketData.priority === 'Low'
              ? 'text-green-400'
              : 'text-gray-400'
          }`}>
          {eachTicketData.priority} Priority
        </p>
        <p className='text-[#627382] text-[14px]'>{eachTicketData.customer}</p>
        <p className='text-[#627382] text-[14px] flex items-center'><img src={CalendarIcon} alt="" className='w-5' /> {eachTicketData.createdAt}</p>
      </div>
    </div>
  );
};

export default TicketCard;
