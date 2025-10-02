import React from 'react';

const ProgressResolvedCard = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around max-w-[1440px] mx-auto p-4 md:p-0'>
            <div className='w-full md:w-[690px] h-[230px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-xl mt-6 md:mt-24'>
                <div className='text-center flex justify-center items-center flex-col text-white bgVector'>
                    <h2 className='text-2xl'>In-Progress</h2>
                    <p className='font-semibold text-6xl'>0</p>
                </div>
            </div>
            <div className='w-full md:w-[690px] h-[230px] bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-xl mt-6 md:mt-24'>
                <div className='text-center flex justify-center items-center flex-col text-white bgVector'>
                    <h2 className='text-2xl'>Resolved</h2>
                    <p className='font-semibold text-6xl'>0</p>
                </div>
            </div>
            
        </div>
    );
};

export default ProgressResolvedCard;