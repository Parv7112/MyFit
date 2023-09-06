import React from 'react';
import BannerImg from '../assets/bannerImg.png';

function Section9() {
  return (
    <div className='container-fluid overflow-hidden'>
      <div className='row bg-black'>
        <div className='card text-white section9-card mx-auto mb-5 mt-5'>
          <div className='row align-items-center'>
            <div className='col-md-7 mt-3 px-md-5'>
              <h1>
                No matter what you need, we've got you covered.
              </h1>
              <p>
                Take your coaching online and deliver an experience like nothing your clients have ever seen before. With fitness, nutrition, and habit-coaching features, plus in-app messaging, progress tracking, and more - it's everything you need to motivate and inspire.
              </p>
              <button className="btn btn-outline-light text-white fw-bold section1-button2">
                <span className="">
                  Get Started
                </span>
              </button>
            </div>
            <div className='col-md-5 mt-5'>
              <img src={BannerImg} alt="Macro Calculator" className="w-full rounded-xl w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section9;
