import React from 'react';
import MyFit from '../assets/myfit-logo.png';

function Footer() {
    return (
        <div className='container-fluid overflow-hidden'>
            <div className='row bg-black'>
                <div className='card text-white mx-auto mb-5 mt-5 bg-black footer-card'>
                    <div className='row align-items-start px-md-5'>
                        <div className='col-md-3 col-sm-12 mx-md-5'>
                            <img src={MyFit} alt="" className="w-full rounded-xl w-75 mb-3" />
                            <p>
                                At MFM, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free. #BeBetterEveryDay
                            </p>
                        </div>
                        <div className='col-md-auto mx-md-5 col-6 ps-md-5'>
                            <h5 className='mb-4 ps-md-5'>Company</h5>
                            <ul className='list-unstyled footer-text ps-md-5'>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Features</li>
                                <li>Blogs</li>
                                <li>Contact Us</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div className='col-md-auto mx-md-5 col-6 mt-0fw-bold'>
                            <h5 className='mb-4'>Tools</h5>
                            <ul className='list-unstyled footer-text '>

                                <li>BMR Calculator</li>
                                <li>Macro Calculator</li>
                                <li>Body Fat Calculator</li>
                                <li>1RM Calculator</li>
                            </ul>
                        </div>
                        <div className='col-md-auto mx-md-5'>
                            <h6>Privacy Policy</h6>
                            <h6>Terms & Condition</h6>
                            <h6>Help & Support</h6>
                        </div>
                    </div>
                    <div className='align-self-center footer-bottom-line'>
                        <hr className='' />
                        <p className='text-center py-3'>
                        Copyright © 2015 - 2023 All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
