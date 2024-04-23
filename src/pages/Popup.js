import React from 'react';
import Navbar from '../components/Navbar';
import circle from '../circle.png';
import greenCircle from '../greenCircle.png';
import InputComponent from '../components/InputComponent';

function Popup () {
  return (
    <div className='bg-gray-100'>
      <Navbar/> {/* Importing navbar component */}
      <div>
        <div className='flex flex-col justify-center items-center mt-28 ' > {/* outer Container for holding comments section */}
          <div className=' flex items-center p-4 cursor-pointer'>
            <img src={circle} alt="circle" className="w-10 h-10 mr-4 " />
            <h2 className="text-3xl text-gray-950">My Requests</h2>
          </div>

          <div className="flex bg-white rounded-lg mx-4 md:mx-auto my-6 w-[80%] md:w-[50%]">
          {/* First comment */}
            <div className="flex items-start px-4 py-6 w-full">
              <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>
              <div className="flex-grow"> {/* Use flex-grow to make the div grow and take remaining space */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1">My Requests </h2>
                  <small className="text-sm text-gray-700">3m ago</small>
                </div>
                <p className="mt-3 text-gray-700 text-sm">
                  Maths teacher urgently needed....
                </p>
              </div>
            </div>
        </div>


          {/* Header for the incoming section */}
          <div className='flex items-center p-4 ml-10 cursor-pointer'>
            <img src={greenCircle} alt="greenCircle" className="w-10 h-10 mr-4 " />
            <h2 className="text-3xl text-gray-950">In-Coming <span className='text-gray-400 text-lg'>(Reply)</span></h2>
          </div>
          {/* In-coming comments */}
          <div className="flex bg-white rounded-lg mx-4 md:mx-auto my-6 w-[80%] md:w-[50%]">
            <div className="flex items-start px-4 py-6 w-full">
              <img src={'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} alt="avatar" className="w-12 h-12 rounded-full object-cover mr-4 shadow"/>
              <div className="flex-grow"> {/* Use flex-grow to make the div grow and take remaining space */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1">Kofi Addai </h2>
                  <small className="text-sm text-gray-700">Yesterday </small>
                </div>
                <p className="mt-3 text-gray-700 text-sm">
                    Home teacher needed at AU....
                </p>
              </div>
            </div>
          </div>

          <div className="flex bg-white rounded-lg mx-4 md:mx-auto my-6 w-[80%] md:w-[50%]">
            <div className="flex items-start px-4 py-6 w-full">
              <img src={'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} alt="avatar" className="w-12 h-12 rounded-full object-cover mr-4 shadow"/>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1">Anthony Ahenkora </h2>
                  <small className="text-sm text-gray-700">Yesterday</small>
                </div>
                <p className="mt-3 text-gray-700 text-sm">
                  <img src={'https://cdn.iconscout.com/icon/premium/png-256-thumb/voice-note-3746471-3124506.png'} alt="voice note" className='w-8 h-8'/>
                </p>
              </div>
            </div>
          </div>

          <div className="flex bg-white rounded-lg mx-4 md:mx-auto my-6 w-[80%] md:w-[50%]">
            <div className="flex items-start px-4 py-6 w-full">
              <img src={'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} alt="avatar" className="w-12 h-12 rounded-full object-cover mr-4 shadow"/>
              <div className="flex-grow"> {/* Use flex-grow to make the div grow and take remaining space */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1">Education Watch </h2>
                  <small className="text-sm text-gray-700">Yesterday </small>
                </div>
                <p className="mt-3 text-gray-700 text-sm">
                  What's Teacher's role.....
                </p>
              </div>
            </div>
          </div>

          <div className="flex bg-white rounded-lg mx-4 md:mx-auto my-6 w-[80%] md:w-[50%]">
            <div className="flex items-start px-4 py-6 w-full">
              <img src={'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} alt="avatar" className="w-12 h-12 rounded-full object-cover mr-4 shadow"/>
              <div className="flex-grow"> {/* Use flex-grow to make the div grow and take remaining space */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1">Teacher Start-Up </h2>
                  <small className="text-sm text-gray-700">3m ago</small> {/* Adjust the content of small tag */}
                </div>
                <p className="mt-3 text-gray-700 text-sm">
                  <img src={'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/image-not-found-icon.png'} alt="avatar" className='h-8 w-8'/>
                </p>
              </div>
            </div>
          </div>
          <div className="my-6"><InputComponent /></div>
        </div>
      </div>
      
    </div>
  );
};

export default Popup;
