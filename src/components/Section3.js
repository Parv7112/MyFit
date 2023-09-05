import React, { useState } from "react";
import { AiOutlineLogout } from 'react-icons/ai';
import workout from "../assets/workout.png";
import clients from "../assets/clients.png";
import programs from "../assets/program.png";
import packages from "../assets/package.png";
import resultTracking from "../assets/result-tracker.png";
import instantChat from "../assets/trainer-schedule.png";
// import './S.css'; // Import your CSS file

const Section3 = () => {
    const [selectedCard, setSelectedCard] = useState(0);

    const handleCardClick = (index) => {
        if (selectedCard === index) {
            setSelectedCard(0);
        } else {
            setSelectedCard(index);
        }
    };

    return (
        <div className="container-fluid overflow-hidden">
            <div className="row bg-black">
                <div className="my-5 text-white">
                    <h1 className="mx-md-5 px-md-5">
                        My Fit Mantra: The Best Training Software for Trainers
                    </h1>
                    <p className="mx-md-5 px-md-5">
                        MFM has everything to help you achieve your fitness goals
                    </p>
                </div>

                <div className="col-md-6 order-md-1 order-2">
                    <div className={`section3-card ${selectedCard === 0 ? 'text-white' : ''}`} onClick={() => handleCardClick(0)}>
                        <span className="d-flex align-items-center my-2 section3-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section3-heading">Unlimited Workouts/ Nutritions</p>
                        </span>
                        <p className="section3-text">
                            With a vast collection of workout plans and nutritious meal suggestions, we also 
                            provide you with an option to create your own workout and nutrition libraries for 
                            your clients.
                        </p>
                    </div>
                    <div className={`section3-card ${selectedCard === 1 ? 'text-white' : ''}`} onClick={() => handleCardClick(1)}>
                        <span className="d-flex align-items-center my-2 section3-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section3-heading">Unlimited Clients</p>
                        </span>
                        <p className="section3-text">
                            Manage and track the progress of an unlimited number of clients, making it
                            easier and more efficient for you to grow your business.
                        </p>
                    </div>
                    <div className={`section3-card ${selectedCard === 2 ? 'text-white' : ''}`} onClick={() => handleCardClick(2)}>
                        <span className="d-flex align-items-center my-2 section3-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section3-heading">Create Programs</p>
                        </span>
                        <p className="section3-text">
                            The Create Programs feature is a cutting-edge tool that allows users to easily 
                            create and customize their own programs for specific purposes, it's the perfect 
                            tool for businesses, organizations, and individuals who want to increase 
                            efficiency and productivity.
                        </p>
                    </div>
                    <div className={`section3-card ${selectedCard === 3 ? 'text-white' : ''}`} onClick={() => handleCardClick(3)}>
                        <span className="d-flex align-items-center my-2 section3-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section3-heading">Sell Packages</p>
                        </span>
                        <p className="section3-text">
                            An innovative tool that enables businesses and organizations to sell pre- 
                            packaged products or services directly to their customers.
                        </p>
                    </div>
                    <div className={`section3-card ${selectedCard === 4 ? 'text-white' : ''}`} onClick={() => handleCardClick(4)}>
                        <span className="d-flex align-items-center my-2 section3-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section3-heading">Result Tracking</p>
                        </span>
                        <p className="section3-text">
                            Provides real-time insights into key performance metrics, allowing you to see 
                            exactly how your client is progressing and make data-driven decisions to 
                            improve their results.
                        </p>
                    </div>
                    <div className={`section3-card ${selectedCard === 5 ? 'text-white' : ''}`} onClick={() => handleCardClick(5)}>
                        <span className="d-flex align-items-center my-2 section3-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section3-heading">Instant Chat</p>
                        </span>
                        <p className="section3-text">
                            Instant Chat provides a seamless and convenient communication experience for 
                            products, dishes, and ingredients.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 order-md-2 order-1">
                    {selectedCard !== null && (
                        <>
                            {selectedCard === 0 && <img className="section3-img" src={workout} alt="" />}
                            {selectedCard === 1 && <img className="section3-img" src={clients} alt="" />}
                            {selectedCard === 2 && <img className="section3-img" src={programs} alt="" />}
                            {selectedCard === 3 && <img className="section3-img" src={packages} alt="" />}
                            {selectedCard === 4 && <img className="section3-img" src={resultTracking} alt="" />}
                            {selectedCard === 5 && <img className="section3-img" src={instantChat} alt="" />}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Section3;
