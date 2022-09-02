import React from 'react';
import Heart from '@/assets/images/Heart.svg';
import './index.css';

const Loading = () => {
  return (
    <div className="loading-logo">
      <img className="logo" src={Heart} alt="loading logo" />
    </div>
  );
};

export default React.memo(Loading);
