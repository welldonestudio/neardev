import React from 'react';
import bannerImage from '../assets/images/comingsoon.png';

function Banner() {
  return (
    <div className="banner mb-3" style={{ textAlign: "center" }}>
      <img src={bannerImage} alt="Banner" />
    </div>
  );
}

export default Banner;
