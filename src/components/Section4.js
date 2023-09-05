import React from 'react';

const Section4 = () => {
    return (
        <div className='container-fluid'>
            <div className="row bg-black text-white pt-5 align-items-stretch">
                <div className="col-md-6 d-flex h-100 order-md-1 order-2 my-3">
                    <div className="mx-md-5 px-md-5">
                        <p className='fw-bold fs-5 my-4 text-left'>
                            BUSINESS GROWTH
                        </p>
                        <h1 className='fw-bold fs-1 text-left'>
                            Get and keep more clients.
                        </h1>
                        <p className='fs-6'>
                            Keep clients, trainers, and programming in one place and streamline your <br />
                            business operations. With integrated payments, appointments, and one- <br />
                            click automation you can sell and market our services and PT packages <br />
                            easier, always providing the best experience to your clients.
                        </p>
                    </div>
                </div>

                <div className='col-md-6 order-md-2 order-1 my-3'>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <img src={require('../assets/linkedin-sales.png')} className="section4-img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
