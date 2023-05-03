import React from 'react';
import bannerImage from '../assets/images/coming.jpeg';

function Banner() {
  return (
    <div className="banner mb-3" style={{ textAlign: "center" }}>
      <img src={bannerImage} alt="Banner" style={{ width: "80%", marginTop: "20px", marginBottom: "20px" }} />
    </div>
  );
}

export default Banner;
