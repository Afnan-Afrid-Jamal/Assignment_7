import React from 'react';
import CorrectPng from '../correct.png';

const TaskStatus = ({ getData }) => {
    if (!getData || getData.length === 0) return null;

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-8'>Task Status</h1>

            {getData.map((data) => (
                <div className='bg-white shadow-md rounded-lg px-6 py-4 mb-8'>
                    <h2 className='text-lg font-medium mb-4'>{data.title}</h2>
                    <button className='btn w-full bg-[#02A53B] py-2 text-white text-base rounded-lg hover:bg-[#027e2e]'>
                        Complete
                    </button>
                </div>
            ))}

            <div className='mt-16'>
                <h1 className='text-2xl font-semibold mb-4'>Resolved Tasks</h1>
                {getData.map((data) => (
                    <div className='bg-white shadow-md rounded-lg px-6 py-4 mb-8'>
                        <h2 className='text-lg font-medium mb-4'>{data.title}</h2>
                        <p className='flex items-center text-lg font-semibold gap-1 text-green-500'>
                            <img src={CorrectPng} alt="" className='w-5 h-5' />Completed
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskStatus;
