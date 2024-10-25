
import  { useState, useEffect } from "react";

export default function StopWatch() {
  const [seconds, setSeconds] = useState(0); 
  const [isActive, setIsActive] = useState(false); 

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval!);
    }

    return () => clearInterval(interval!);
  }, [isActive, seconds]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return { mins, secs };
  };

  const startTimer = () => {
    setIsActive(true); 
  };

  const stopTimer = () => {
    setIsActive(false); 
  };

  
  const resetTimer = () => {
    setIsActive(false); 
    setSeconds(0); 
  };

  const { mins, secs } = formatTime(seconds); 

  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{mins} mins </span>
      <span>{secs} secs</span>
      <div>
        <button onClick={startTimer}  style={{backgroundColor:"green"}}>
          Start
        </button>
        <button onClick={stopTimer}  style={{backgroundColor:'red'}}>
          Stop
        </button>
        <button onClick={resetTimer} style={{backgroundColor:'yellow'}}>Reset</button>
      </div>
    </div>
  );
}
