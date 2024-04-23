import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const FeedSection = () => {
  // State to track whether each action is open or closed
  const [isOpenAction1, setIsOpenAction1] = useState(false);
  const [isOpenAction2, setIsOpenAction2] = useState(false);

  // Function to handle opening and closing of Action 1
  const handleAction1Toggle = () => {
    setIsOpenAction1(!isOpenAction1);
  };

  // Function to handle opening and closing of Action 2
  const handleAction2Toggle = () => {
    setIsOpenAction2(!isOpenAction2);
  };

  return (
    <div className="feed-section text-gray-800">
      {/* Action 1 */}
      <div className="feed-action">
        <div className="action-header my-5 cursor-pointer" onClick={handleAction1Toggle}>
          <div>2. <FontAwesomeIcon icon={faPlay} className='pl-2 text-[#FF66C4] hover:text-[#d457a4]'/></div>
        </div>
        {isOpenAction1 && (
          <div className="action-content">
            <p>For other options like posting ideas, crowdfunding and job searc:
                <p className='text-red-400 py-4'>Tap on + and select OpenProject or Jobs & More</p>
            </p>
          </div>
        )}
      </div>

      {/* Action 2 */}
      <div className="feed-action">
        <div className="action-header my-5 cursor-pointer" onClick={handleAction2Toggle}>
          <div> 3. <FontAwesomeIcon icon={faPlay} className='pl-2 text-[#FF66C4] hover:text-[#d457a4]'/></div>
        </div>
        {isOpenAction2 && (
          <div className="action-content">
            <p>Swipe to Choose page to chat and do more...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedSection;
