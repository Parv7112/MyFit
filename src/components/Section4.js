import React from 'react';

const Section4 = () => {
    return (
        <div className='container-fluid'>
        <div className="row bg-black text-white pt-5">
            <div className="col-md-7 d-flex">
                <div>
                    <p className='fw-bold fs-5 text-left mx-5 px-5'>
                        BUSINESS GROWTH
                    </p>
                    <h1 className='fw-bold fs-1 text-left mx-5 px-5'>
                        Get and keep more clients.
                    </h1>
                    <p className='fs-5 mx-5 px-5'>
                        Keep clients, trainers and programming in one place and streamline your <br />
                        business operations. With integrated payments, appointments, and one- <br />
                        click automation you can sell and market our services and PT packages <br />
                        easier, always providing the best experience to your clients.
                    </p>
                </div>
            </div>

            <div className='col-md-5'>
                <div className="">
                    <img src={require('../assets/linkedin-sales.png')} className="section4-img" alt="Image" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Section4;
