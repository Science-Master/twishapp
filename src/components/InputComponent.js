import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import file from '../file.png';
import send from '../send.png';
import plus from '../plus.png';
import typing from '../typing.png';

const InputComponent = () => {
  const navigate = useNavigate();

  const handlePlusClick = () => {
    // Navigate to the new page
    navigate('/popup');
  };

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center pb-4">
      <div className="relative w-2/4 flex items-center">
        <input
          type="text"
          placeholder="Send or request for service or support"
          className="w-full py-2 pl-10 pr-16 border rounded-3xl focus:outline-none focus:border-blue-500"
        />

        <img src={typing} alt="typing" className="absolute top-3 left-3 cursor-pointer text-gray-900 w-6 font-bold" />
        <img src={file} alt="file" className="absolute top-2 right-14 cursor-pointer text-gray-900 w-6" />
        <img src={send} alt="send" className="absolute top-3 right-4 cursor-pointer text-gray-900 w-8" />
      </div>
      <div className="ml-5">
        <Link className="text-gray-500 cursor-pointer">
          <img src={plus} alt="plus" className="w-14" onClick={handlePlusClick} />
        </Link>
      </div>
    </div>
  );
};

export default InputComponent;
