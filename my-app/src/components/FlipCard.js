import React from 'react';

function FlipCard({ frontContent, backContent }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h4>{frontContent}</h4>
        </div>
        <div className="flip-card-back">
          <h4>{backContent}</h4>
        </div>
        <div className="tooltip-container">
          </div>
      </div>
    </div>
  );
}

export default FlipCard;
