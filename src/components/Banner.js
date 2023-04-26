import React from 'react';
import bannerImage from '../assets/images/welldone.png';

function Banner() {
  return (
    <div className="banner mb-3">
      <img src={bannerImage} alt="Banner" />
    </div>
  );
}

export default Banner;
