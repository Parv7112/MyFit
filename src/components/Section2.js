import React from 'react';

const Section2 = () => {
    return (
        <div className='container-fluid overflow-hidden'>
            <div className="row bg-black text-white text-center">
                <div className='col-md-6 my-md-0 my-5 py-md-4'>
                    <div className="mx-md-5">
                        <img src={require('../assets/online-training.png')} className="w-100 mx-md-5" alt="" />
                    </div>
                </div>

                <div className="col-md-6 d-flex my-md-0 my-5">
                    <div>
                        <p className='fw-bold fs-5 mt-md-5 mt-0 mx-3 text-start'>
                            ONLINE TRAINING
                        </p>
                        <h1 className='fw-bold fs-1 mx-3 text-start'>
                            Sell More Coaching And <br />
                            Boost Your PT Profits.
                        </h1>
                        <p className='fs-5 mx-3 text-start'>
                            Digitize and centralize your personal training systems easily and <br />
                            introduce a new revenue stream by selling online, in-person or hybrid <br />
                            memberships.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
