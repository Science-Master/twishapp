import React from 'react';

const IncomingSection = () => {
  return (
    <div>
      <h2>Incoming</h2>
      <div>
        {/* Display incoming comments with voice message, picture, and text */}
        <div>
          <p>Incoming comment with voice message</p>
          <audio controls>
            <source src="voice-message.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div>
          <p>Incoming comment with picture</p>
          <img src="picture.jpg" alt="Incoming comment picture" />
        </div>
        <div>Incoming comment with text</div>
      </div>
    </div>
  );
};

export default IncomingSection;
