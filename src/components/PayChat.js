import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarCheck,faMoneyCheck,faCommentDots, faMoneyBillTransfer,faCaretDown } from '@fortawesome/free-solid-svg-icons';

const PayChat = () => {
    return (
        <div className="flex flex-col justify-center p-6 rounded-3xl mx-auto w-[90%] h-auto sm:py-6 text-gray-800 hover:bg-slate-50 shadow-inner backdrop-saturate-200 bg-white/70 cursor-pointer" >
            <div className="text-[#028819] flex justify-center items-center font-bold text-lg pb-4">PayChat</div>
            <div className="feed-item">
                <div className="flex flex-row items-center">
                    <FontAwesomeIcon icon={faCalendarCheck} className="w-6 h-6 pr-3" />
                    <div className="mb-4">
                        <h2 className="font-bold text-gray-600">Book Appointment</h2>
                        <p>Do more of what you love</p>
                    </div>
                </div>
            </div>

            <div className="feed-item">
                <div className="flex flex-row items-center">
                    <FontAwesomeIcon icon={faMoneyCheck} className="w-6 h-6 pr-3"/>
                    <div className="mb-4">
                        <h2 className="font-bold text-gray-600">Set Payment Terms</h2>
                        <p>Do more of what you love</p>
                    </div>
                </div>
            </div>

            <div className="feed-item">
                <div className="flex flex-row items-center">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} className="w-6 h-6 pr-3"/>
                    <div className="mb-4">
                        <h2 className="font-bold text-gray-600">Send or request cash or coin</h2>
                        <p>Do more of what you love</p>
                    </div>
                </div>
            </div>

            <div className="feed-item">
                <div className="flex flex-row items-center">
                    <FontAwesomeIcon icon={faCommentDots} className="w-6 h-6 pr-3"/>
                        <div className="mb-4">
                            <h2 className="font-bold text-gray-600">Chat with friends</h2>
                            <p>Do more of what you love</p>
                        </div>
                </div>
            </div>
            <FontAwesomeIcon icon={faCaretDown} className="flex justify-center items-center text-[#028819] h-6 sm:mt-9" />;
        </div>
    );
}

export default PayChat;
