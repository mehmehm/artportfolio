import React, { useState, useEffect } from "react";
import './Pretext.css';

const phrases = [
    "Trust the process.",
    "Art is a journey, not a destination.",
    "Consistency is key.",
    "References are your friends.",
    "Don't be afraid to bring life to your art with colors."
];

const Pretext = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                setFade(true);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="design">
                <h1>kjbfkafakjsbfajfjfnafnfnaffiafnkafnbfaefnanwifjfkowefjeifasa</h1>
            </div>
            <div className={`slogan ${fade ? 'fade-in' : 'fade-out'}`}>
                {phrases[index]}
            </div>
            <div className="design">
                <h1>kjbfkafakjsbfajfjfnafnfnaffiafnkafnbfaefnanwifjfkowefjeifasa</h1>
            </div>
        </div>
    );
};

export default Pretext;
