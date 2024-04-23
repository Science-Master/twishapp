import React from "react";
import arrow from '../arrow.png';


const FlickHouse = () => {
    return (
        <div className="flex flex-col justify-center items-center rounded-3xl mx-auto w-[90%] h-auto sm:h-[27rem] shadow-inner hover:bg-slate-50 sm:py-4 p-6 text-gray-800 text-base cursor-pointer backdrop-saturate-200 bg-white/70 ">
            <div className="flex justify-center items-center text-lg">
                <div className="pr-3 text-[#3F60A0] font-bold">FlickHouse</div>
                <img src={arrow} alt="arrow" className="w-6"/>
                <div className="pl-3 font-bold text-[#3F60A0]">SelfOut</div>
            </div>
            <div className="my-4 mb-4">
                <div>
                    <span className="text-blue-600">FlickHouse:</span> Create personal events, conferences, movie shows, parties, dinners, 
                    business meetings, bed and breakfast, etc. Invite and host guests at your home or location. 
                    Generate and sell tickets. Watch short videos on FlickHouse Channels.
                </div>
            </div>
            <div className=" mb-4 ">
                <div>
                    <span className="text-blue-600">SelfOut: </span> Tourism and outing made safer. Visit exciting and interesting public venues,
                    hotels, restaurants, etc within or outside your locality. Attend public events.
                </div>
            </div>
            <div className="relative w-2 h-2 bg-purple-700 rounded-full flex justify-center items-center text-center p-3">
                2
            </div>
        </div>
    )
}

export default FlickHouse;
