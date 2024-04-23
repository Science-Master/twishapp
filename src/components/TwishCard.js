import React from 'react';
import arrowpink from '../arrowpink.png';

const TwishCard = () =>{
    return(
        <div className='flex flex-col justify-center rounded-3xl p-6 text-gray-800 w-[90%] mx-auto h-auto sm:h-[31rem] sm:py-6 hover:bg-slate-50 shadow-inner backdrop-saturate-200 bg-white/70 cursor-pointer'>
            <div className='flex justify-center items-center text-[#FF66C4] font-bold text-lg'>TwishCard</div>
            <div className='flex flex-row gap-5 justify-center items-center my-6'>
                <img src={arrowpink} alt="arrow" className="w-5 text-[#FF66C4]"/>
                <p>Send or receive warm wishes with e-cash or coins through this virtual card</p>
            </div>

            <div className='grid grid-cols-2 gap-4 place-items-center my-6 uppercase text-sm'>
                <div className='border-2 text-xs sm:text-sm p-1 border-[#FF66C4] flex items-center justify-center rounded-2xl w-3/4 sm:w-full'>
                    <span>Birthdays</span>
                </div>
                <div className='border-2 text-xs sm:text-sm p-1 border-[#FF66C4] flex items-center justify-center rounded-2xl w-3/4 sm:w-full'>
                    <span>Occasions</span>
                </div>
                <div className='border-2 text-xs sm:text-sm p-1 border-[#FF66C4] flex items-center justify-center rounded-2xl w-3/4 sm:w-full'>
                    <span>Weddings</span>
                </div>
                <div className='border-2 text-xs sm:text-sm p-1 border-[#FF66C4] flex items-center justify-center rounded-2xl w-3/4 sm:w-full'>
                    <span>Events</span>
                </div>
                <div className='border-2 text-xs sm:text-sm p-1 border-[#FF66C4] flex items-center justify-center rounded-2xl w-3/4 sm:w-full'>
                    <span>Gifts</span>
                </div>
                <div className='border-2 text-xs sm:text-sm p-1 border-[#FF66C4] flex items-center justify-center rounded-2xl w-3/4 sm:w-full'>
                    <span>Celebrations</span>
                </div>
                <div className='border-2 text-xs sm:text-sm p-1 border-[#FF66C4] flex items-center justify-center rounded-2xl w-3/4 sm:w-full'>
                    <span>Scholarships</span>
                </div>
                <div className='border-2 text-xs sm:text-sm p-1 border-[#FF66C4] flex items-center justify-center rounded-2xl w-3/4 sm:w-full'>
                    <span>Loans</span>
                </div>
                <div className='border-2 text-xs sm:text-sm p-1 border-[#FF66C4] flex items-center justify-center rounded-2xl w-3/4 sm:w-full'>
                    <span>Tips/Rewards</span>
                </div>
                <div className='border-2 text-xs sm:text-sm p-1 border-[#FF66C4] flex items-center justify-center rounded-2xl w-3/4 sm:w-full'>
                    <span>Others</span>
                </div>
            </div>

        </div>
    )
}

export default TwishCard;