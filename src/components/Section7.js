import React from 'react';
import Track1 from '../assets/track1.png';
import Track2 from '../assets/track2.png';
import Track3 from '../assets/track3.png';
import Track4 from '../assets/track4.png';

function Section7() {
    return (
        <div className='container-fluid overflow-hidden'>
            <div className='row bg-black text-white'>
                <div className='mt-5 my-4 mx-md-5'>
                    <h1>Track Your Progress</h1>
                    <p className='fs-5'>
                        Use our free fitness tools and trackers to take your journey to the next level
                    </p>
                </div>
                <div className='row mb-5 justify-content-center d-none d-md-flex'>
                    <div className="section7-card p-4 mx-2">
                        <img src={Track1} alt="Macro Calculator" className="w-full rounded-xl w-100" />
                        <h2 className="text-white fs-5 my-1">Macro Calculator</h2>
                        <p className="fs-6">
                            Macronutrients are the nutrients that your body needs in large quantities—including fats, proteins, carbs, water, and fiber.
                        </p>
                        <a href="/macro-calculator" className="link text-white relative top-1 Gilroy-Bold text-sm md:text-base">
                            Calculate now
                        </a>
                    </div>
                    <div className="section7-card p-4 mx-2">
                        <img src={Track2} alt="BMR Calculator" className="w-full rounded-xl w-100" />
                        <h2 className="text-white fs-5 my-1">BMR Calculator</h2>
                        <p className="fs-6">
                            Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.
                        </p>
                        <a href="/bmr-calculator" className="link text-white relative top-1 Gilroy-Bold text-sm md:text-base">
                            Calculate now
                        </a>
                    </div>
                    <div className="section7-card p-4 mx-2">
                        <img src={Track3} alt="1 Rep Max Calculator" className="w-full rounded-xl w-100" />
                        <h2 className="text-white fs-5 my-1">1 Rep Max Calculator</h2>
                        <p className="fs-6">
                            1 Rep Max (1RM) is the maximum weight that can be lifted in a specific exercise in 1 repetition. This determines your strength level for that exercise.
                        </p>
                        <a href="/1rm-calculator" className="link text-white relative top-1 Gilroy-Bold text-sm md:text-base">
                            Calculate now
                        </a>
                    </div>
                    <div className="section7-card p-4 mx-2">
                        <img src={Track4} alt="Body Fat % Calculator" className="w-full rounded-xl w-100" />
                        <h2 className="text-white fs-5 my-1">Body Fat % Calculator</h2>
                        <p className="fs-6">
                            Body fat percentage is a key indicator of good health. A high body fat % might put you at a greater risk of lifestyle diseases.
                        </p>
                        <a href="/body-fat-calculator" className="link text-white relative top-1 Gilroy-Bold text-sm md:text-base">
                            Calculate now
                        </a>
                    </div>
                </div>

                <div className="d-md-none d-flex justify-content-center align-items-center">
                <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="section7-card p-4 mx-2">
                                    <img src={Track1} alt="Macro Calculator" className="w-full rounded-xl w-100" />
                                    <h2 className="text-white fs-5 my-1">Macro Calculator</h2>
                                    <p className="fs-6">
                                        Macronutrients are the nutrients that your body needs in large quantities—including fats, proteins, carbs, water, and fiber.
                                    </p>
                                    <a href="/macro-calculator" className="link text-white relative top-1 Gilroy-Bold text-sm md:text-base">
                                        Calculate now
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="section7-card p-4 mx-2">
                                    <img src={Track2} alt="BMR Calculator" className="w-full rounded-xl w-100" />
                                    <h2 className="text-white fs-5 my-1">BMR Calculator</h2>
                                    <p className="fs-6">
                                        Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.
                                    </p>
                                    <a href="/bmr-calculator" className="link text-white relative top-1 Gilroy-Bold text-sm md:text-base">
                                        Calculate now
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="section7-card p-4 mx-2">
                                    <img src={Track3} alt="1 Rep Max Calculator" className="w-full rounded-xl w-100" />
                                    <h2 className="text-white fs-5 my-1">1 Rep Max Calculator</h2>
                                    <p className="fs-6">
                                        1 Rep Max (1RM) is the maximum weight that can be lifted in a specific exercise in 1 repetition. This determines your strength level for that exercise.
                                    </p>
                                    <a href="/1rm-calculator" className="link text-white relative top-1 Gilroy-Bold text-sm md:text-base">
                                        Calculate now
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="section7-card p-4 mx-2">
                                    <img src={Track4} alt="Body Fat % Calculator" className="w-full rounded-xl w-100" />
                                    <h2 className="text-white fs-5 my-1">Body Fat % Calculator</h2>
                                    <p className="fs-6">
                                        Body fat percentage is a key indicator of good health. A high body fat % might put you at a greater risk of lifestyle diseases.
                                    </p>
                                    <a href="/body-fat-calculator" className="link text-white relative top-1 Gilroy-Bold text-sm md:text-base">
                                        Calculate now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section7;
