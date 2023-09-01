import React, { useState } from "react";
import { AiOutlineLogout } from 'react-icons/ai'
import diet from "../assets/001.png"
import free from "../assets/002.png"
import friendly from "../assets/003.png"


const Section5 = () => {

    const [selectedCard, setSelectedCard] = useState(0);

    const handleCard1Click = (index) => {
        if (selectedCard === index) {
            setSelectedCard(0);
        } else {
            setSelectedCard(index);
        }
    };

    return (
        <div className="container-fluid">

        <div className="row bg-black text-white">
            <div className="my-5">
                <h1 className="mx-5 px-5">
                The only fitness app you'll ever need
                </h1>
                <p className="mx-5 px-5">
                MFM has everything to help you achieve your fitness goal
                </p>
            </div>

            <div className="col-md-7">
            <div className="bg-black bg-dark-hover text-secondary my-4 section5-card px-2 py-2" onClick={() => handleCard1Click(0)}>
                    <span className="d-flex align-items-center">
                        <AiOutlineLogout className="fs-3 me-2" />
                        <p className="m-0 fs-4">Customised diet & workout plans</p>
                    </span>
                    <p className="fs-6">
                    The Customized Diet & Workout Plans feature is a comprehensive solution for individuals looking <br />
                    to improve their health and fitness, users can create personalized diet and workout plans based <br />
                    on their specific goals, preferences, and lifestyles.
                                        </p>
                </div>
                <div className="bg-black text-secondary my-4 section5-card px-2 py-2" onClick={() => handleCard1Click(1)}>
                    <span className="d-flex align-items-center">
                        <AiOutlineLogout className="fs-3 me-2" />
                        <p className="m-0 fs-4">FREE tools to track your progress</p>
                    </span>
                    <p className="fs-6">
                    Tools like BMR, macro nutrients calculators would be a great source to track progress for <br />
                    anyone looking to monitor and measure their progress towards their goals.
                                        </p>
                </div>
                <div className="bg-black text-secondary my-4 section5-card px-2 py-2" onClick={() => handleCard1Click(2)}>
                    <span className="d-flex align-items-center">
                        <AiOutlineLogout className="fs-3 me-2" />
                        <p className="m-0 fs-4">Friendly & strong community</p>
                    </span>
                    <p className="fs-6">
                    An innovative platform that connects individuals with like-minded people and fosters a sense of <br />
                    community, where there are engaging activities, discussions, and events, the Friendly & Strong <br />
                    Community feature encourages members to share their thoughts, ideas, and experiences, and<br />
                    to help build a strong, supportive community.
                    </p>
                </div>
                <div className="bg-black text-secondary my-4 section5-card px-2 py-2" onClick={() => handleCard1Click(3)}>
                    <span className="d-flex align-items-center">
                        <AiOutlineLogout className="fs-3 me-2" />
                        <p className="m-0 fs-4">500+ exercise videos made by experts</p>
                    </span>
                    <p className="fs-6">
                    With videos covering a wide range of workouts and fitness styles, from strength training and <br />
                    cardio to yoga and Pilates, there's something for everyone.
                    </p>
                </div>
                <div className="bg-black text-secondary my-4 section5-card px-2 py-2" onClick={() => handleCard1Click(4)}>
                    <span className="d-flex align-items-center">
                        <AiOutlineLogout className="fs-3 me-2" />
                        <p className="m-0 fs-4">500+ delicious quantified recipes</p>
                    </span>
                    <p className="fs-6">
                    Whether you're looking to lose weight, build muscle, or simply eat healthier, the 500+ Delicious<br />
                    Quantified Recipes feature provides a variety of options to suit your tastes and preferences.
                    </p>
                </div>
                <div className="bg-black text-secondary my-4 section5-card px-2 py-2" onClick={() => handleCard1Click(5)}>
                    <span className="d-flex align-items-center">
                        <AiOutlineLogout className="fs-3 me-2" />
                        <p className="m-0 fs-4">Nutrition facts for 1 million+ food items</p>
                    </span>
                    <p className="fs-6">
                    Users have access to nutrition information for over 1 million food items, covering a wide range of <br />
                    products, dishes, and ingredients.
                    </p>
                </div>
            </div>

            <div className="col-md-5" style={{overflow: 'hidden'}}>
                {selectedCard !== null && (
                    <>
                        {selectedCard === 0 && <img className="section5-img" src={diet}/>}
                        {selectedCard === 1 && <img className="section5-img" src={free}/>}
                        {selectedCard === 2 && <img className="section5-img" src={friendly}/>}
                        {selectedCard === 3 && <img className="section5-img" src={diet}/>}
                        {selectedCard === 4 && <img className="section5-img" src={free}/>}
                        {selectedCard === 5 && <img className="section5-img" src={friendly}/>}
                    </>
                )}
            </div>
            </div>


        </div>
    )
}

export default Section5;