import React from 'react';
import mfmSet1 from '../assets/mfm-set1.png';
import mfmSet2 from '../assets/mfm-set2.png';
import mfmSet3 from '../assets/mfm-set3.png';
import mfmSet4 from '../assets/mfm-set4.png';

function Section8() {
    return (
        <div className='container-fluid overflow-hidden'>
            <div className='row bg-black text-white'>
                <div className='mt-5 mx-md-5'>
                    <h1>What sets MFM apart?</h1>
                </div>
                <div className='row mb-5 justify-content-center d-none d-md-flex mt-2'>
                    <div className="section8-card p-4 mx-2">
                        <img src={mfmSet1} alt="Macro Calculator" className="w-full rounded-xl w-100" />
                        <p className="fs-6">
                            A community that supports you every step of the way
                        </p>
                    </div>
                    <div className="section8-card p-4 mx-2">
                        <img src={mfmSet2} alt="Macro Calculator" className="w-full rounded-xl w-100" />
                        <p className="fs-6">
                            Coaching plans for every lifestyle & body type

                        </p>
                    </div>
                    <div className="section8-card p-4 mx-2">
                        <img src={mfmSet3} alt="Macro Calculator" className="w-full rounded-xl w-100" />
                        <p className="fs-6">
                            500+ expert coaches who have transformed 300,000+ lives
                        </p>
                    </div>
                    <div className="section8-card p-4 mx-2">
                        <img src={mfmSet4} alt="Macro Calculator" className="w-full rounded-xl w-100" />
                        <p className="fs-6">
                            Methods that are scientific, result driven and sustainable
                        </p>
                    </div>
                </div>

                <div className="d-md-none"> {/* Show on small screens */}
                    <div id="cardCarousel1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <div className="section8-card p-4 mx-2 ">
                                    <img src={mfmSet1} alt="Macro Calculator" className="w-full rounded-xl w-100" />
                                    <p className="fs-6">
                                        A community that supports you every step of the way
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="section8-card p-4 mx-2 ">
                                    <img src={mfmSet2} alt="Macro Calculator" className="w-full rounded-xl w-100" />
                                    <p className="fs-6">
                                        Coaching plans for every lifestyle & body type
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="section8-card p-4 mx-2 ">
                                    <img src={mfmSet3} alt="Macro Calculator" className="w-full rounded-xl w-100" />
                                    <p className="fs-6">
                                        500+ expert coaches who have transformed 300,000+ lives
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="section8-card p-4 mx-2">
                                    <img src={mfmSet4} alt="Macro Calculator" className="w-full rounded-xl w-100" />
                                    <p className="fs-6">
                                        Methods that are scientific, result driven and sustainable
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Section8;
