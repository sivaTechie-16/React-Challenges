import React, { useEffect, useState } from 'react';

const ClickCounterTimer: React.FC = () => {
    const [count, setCount] = useState<number>(0); 
    const [timeLeft, setTimeLeft] = useState<number>(10); 
    const [isTimerActive, setIsTimerActive] = useState<boolean>(true); 

    useEffect(() => {
        if (isTimerActive && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            setIsTimerActive(false); 
        }
    }, [isTimerActive, timeLeft]);

    const handleClick = () => {
        if (isTimerActive) {
            setCount((prevCount) => prevCount + 1); 
        } 
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>No of Clicks until timer expires</h1>
            <div style={{ 
                border: '2px solid orange', 
                padding: '20px', 
                backgroundColor: 'lightcoral', 
                display: 'inline-block' 
            }}>
                <h2>{count}</h2>
                <p>Time left: {timeLeft} seconds</p>
                <button onClick={handleClick} disabled={!isTimerActive}>
                    +
                </button>
            </div>
        </div>
    );
};

export default ClickCounterTimer;
