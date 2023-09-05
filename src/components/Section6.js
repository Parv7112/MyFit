import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import BannerImg1 from '../assets/bannerImg1.png';
import BannerImg2 from '../assets/bannerImg2.png';
import BannerImg4 from '../assets/bannerImg4.png';
import BannerImg5 from '../assets/bannerImg5.png'

function Section6() {
    useEffect(() => {
        AOS.init(); 
    }, []);

    return (
        <div className='container-fluid overflow-hidden'>
            <div className='row bg-black text-center'>
                <div
                    data-aos="zoom-in-up"
                    data-aos-offset="200"
                    data-aos-delay="300"
                    className="w-100 d-flex justify-content-center align-items-center aos-init aos-animate mt-5"
                >
                    <img
                        src={BannerImg1}
                        alt=""
                        className="rounded-xl img-fluid mx-3 mx-sm-5"
                        style={{ maxWidth: '30%', height: 'auto' }} 
                    />
                    <img
                        src={BannerImg2}
                        alt=""
                        className="rounded-xl img-fluid mx-3 mx-sm-5"
                        style={{ maxWidth: '30%', height: 'auto' }} 
                    />
                </div>
                <div className='text-white'>
                    <h1 className='mt-5 fw-bold'>
                        One app for your all fitness need
                    </h1>
                    <h4 className='fs-6 section6-text'>
                    Whether you're looking to lose weight, build muscle, or simply get in shape, the One App for All Your Fitness Needs feature provides everything you need, all in one convenient place. With features like customised diet and workout plans, 500+ exercise videos made by experts, 500+ delicious quantified recipes, nutrition facts for 1 million+ food items, free tools to track your progress, a friendly and strong community, and much more, you'll have everything you need to succeed.
                    </h4>
                    <button className="btn btn-outline-light text-white fw-bold section1-button2 mt-2">
                        <span className="text-center">
                            Get Started
                        </span>
                    </button> 
                </div>
                <div
                    data-aos="zoom-in-up"
                    data-aos-offset="200"
                    data-aos-delay="300"
                    className="w-100 d-flex justify-content-center align-items-center aos-init aos-animate mt-5"
                >
                    <img
                        src={BannerImg4}
                        alt=""
                        className="rounded-xl img-fluid mx-3 mx-sm-5"
                        style={{ maxWidth: '30%', height: 'auto' }} 
                    />
                    <img
                        src={BannerImg5}
                        alt=""
                        className="rounded-xl img-fluid mx-3 mx-sm-5"
                        style={{ maxWidth: '30%', height: 'auto' }} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Section6;
