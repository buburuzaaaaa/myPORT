import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Column({ image, text }) {
     useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);
  return (
  <>
    <div className="column" data-aos="flip-right">
      <img src={image} alt="Column Image" className="column-image" />
      <div className="column-text">{text}</div>
    </div>
    <div className="column" data-aos="flip-left">
        <div className="column-text">{text}</div>
      <img src={image} alt="Column Image" className="column-image" />
    </div>
     <div className="column" data-aos="fade-up-right">
      <img src={image} alt="Column Image" className="column-image" />
      <div className="column-text">{text}</div>
    </div>
    <div className="column" data-aos="fade-up-left">
        <div className="column-text">{text}</div>
      <img src={image} alt="Column Image" className="column-image" />
    </div>
    </>
  );
}

export default Column;
