import React, { useState } from "react";
import { AiOutlineLogout } from 'react-icons/ai'
import diet from "../assets/001.png"
import free from "../assets/002.png"
import friendly from "../assets/003.png"

const Section5 = () => {
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
                    <h1 className="mx-md-5 px-md-5 mt-md-5">
                        My Fit Mantra: The Best Training Software for Trainers
                    </h1>
                    <p className="mx-md-5 px-md-5">
                        MFM has everything to help you achieve your fitness goals
                    </p>
                </div>

                <div className="col-md-6 order-md-1 order-2">
                    <div className={`section3-card ${selectedCard === 0 ? 'text-white' : ''}`} onClick={() => handleCardClick(0)}>
                        <span className="d-flex align-items-center my-2 section5-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section5-heading">Customised diet & workout plans</p>
                        </span>
                        <p className="section3-text">
                            The Customized Diet & Workout Plans feature is a comprehensive solution for individuals looking to improve their health and fitness, users can create personalized diet and workout plans based on their specific goals, preferences, and lifestyles.
                        </p>
                    </div>
                    <div className={`section3-card ${selectedCard === 1 ? 'text-white' : ''}`} onClick={() => handleCardClick(1)}>
                        <span className="d-flex align-items-center my-2 section5-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section5-heading">FREE tools to track your progress</p>
                        </span>
                        <p className="section3-text">
                            Tools like BMR, macro nutrients calculators would be a great source to track progress for anyone looking to monitor and measure their progress towards their goals.
                        </p>
                    </div>
                    <div className={`section3-card ${selectedCard === 2 ? 'text-white' : ''}`} onClick={() => handleCardClick(2)}>
                        <span className="d-flex align-items-center my-2 section5-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section5-heading">Friendly & strong community</p>
                        </span>
                        <p className="section3-text">
                            An innovative platform that connects individuals with like-minded people and fosters a sense of community, where there are engaging activities, discussions, and events, the Friendly & Strong Community feature encourages members to share their thoughts, ideas, and experiences, and to help build a strong, supportive community.
                        </p>
                    </div>
                    <div className={`section3-card ${selectedCard === 3 ? 'text-white' : ''}`} onClick={() => handleCardClick(3)}>
                        <span className="d-flex align-items-center my-2 section5-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section5-heading">500+ exercise videos made by experts</p>
                        </span>
                        <p className="section3-text">
                        With videos covering a wide range of workouts and fitness styles, from strength training and cardio to yoga and Pilates, there's something for everyone.
                        </p>
                    </div>
                    <div className={`section3-card ${selectedCard === 4 ? 'text-white' : ''}`} onClick={() => handleCardClick(4)}>
                        <span className="d-flex align-items-center my-2 section5-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section5-heading">500+ delicious quantified recipes</p>
                        </span>
                        <p className="section3-text">
                        Whether you're looking to lose weight, build muscle, or simply eat healthier, the 500+ Delicious Quantified Recipes feature provides a variety of options to suit your tastes and preferences.
                        </p>
                    </div>
                    <div className={`section3-card ${selectedCard === 5 ? 'text-white' : ''}`} onClick={() => handleCardClick(5)}>
                        <span className="d-flex align-items-center my-2 section5-heading">
                            <AiOutlineLogout className="fs-3 me-2" />
                            <p className="m-0 section5-heading">Nutrition facts for 1 million+ food items</p>
                        </span>
                        <p className="section3-text">
                          Users have access to nutrition information for over 1 million food items, covering a wide range of products, dishes, and ingredients.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 order-md-2 order-1">
                    {selectedCard !== null && (
                        <>
                            {selectedCard === 0 && <img className="section5-img" src={diet} alt="" />}
                            {selectedCard === 1 && <img className="section5-img" src={free} alt="" />}
                            {selectedCard === 2 && <img className="section5-img" src={friendly} alt="" />}
                            {selectedCard === 3 && <img className="section5-img" src={diet} alt="" />}
                            {selectedCard === 4 && <img className="section5-img" src={free} alt="" />}
                            {selectedCard === 5 && <img className="section5-img" src={friendly} alt="" />}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Section5;
