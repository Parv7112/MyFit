import React from 'react';

const Section1 = () => {
    return (
        <div className="container-fluid">
        <div className="row bg-black text-white">
            <div className="col-md-6 my-5 py-5">
                <h1 className='fs-1 fw-bold text-left my-5 mx-5 px-5'>
                    The #1 coaching app to <br />
                    better engage your clients.
                </h1>
                <p className='mx-5 px-5 my-5'>
                    Take your coaching online and deliver an experience like nothing <br />
                    your clients have ever seen before. With fitness, nutrition, and habit- <br />
                    coaching features, plus in-app messaging, progress tracking, and <br />
                    more — it's everything you need to motivate and inspire. <br />
                </p>

                <button className="btn btn-outline-light text-white fw-bold section1-button1">
                    <span className="mx-3">
                        Login
                    </span>
                </button>
                <button className="btn btn-outline-light text-white fw-bold section1-button2">
                    <span className="mx-3">
                        Get Started
                    </span>
                </button> 

            </div>


            <div className="col-md-6" style={{overflow: 'hidden'}}>
                <div className="position-relative mx-0" style={{ overflow: 'hidden'}}>
                    <video autoPlay muted loop preload className='section1-video'>
                        <source src={require('../assets/mfm1.mp4')} type="video/mp4" />
                    </video>
                </div>
            </div>

        </div >
        </div>
    );
};

export default Section1;
