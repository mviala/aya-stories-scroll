
import React from 'react';

interface LikeAnimationProps {
  show: boolean;
}

const LikeAnimation: React.FC<LikeAnimationProps> = ({ show }) => {
  if (!show) return null;
  
  return (
    <div className="like-animation">
      <div className={`heart ${show ? 'animate' : ''}`}>🤍</div>
    </div>
  );
};

export default LikeAnimation;
