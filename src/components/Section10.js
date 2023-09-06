import React from 'react';
import AppStore from '../assets/app-store.png';
import GooglePlay from '../assets/google-play.png';

function Section10() {
  return (
    <div className="container-fluid">
      <div className="row bg-black text-white">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mb-5">
          <h1 className="text-white mb-3 mb-md-0 mr-md-5">Available at</h1>
          <div className="d-flex">
            <a href="#" className="me-3">
              <img src={AppStore} className="cursor-pointer" alt="App Store" />
            </a>
            <a href="#">
              <img src={GooglePlay} className="cursor-pointer" alt="Google Play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section10;
