/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./styles.css"; 

const ProgressBar: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(0);

  const setValuer = (e: any) => {
    const value = e.target.value; 
    const numericValue = parseInt(value); 
    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
      setPercentage(numericValue);
    } else if (value === "") {
      setPercentage(0); 
    }
  };
  return (
    <div className="App">
      <h1>Progress Bar</h1>

      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
         
          style={{ width: `${percentage}%` }} 

        >      <span className="percentageText">{percentage}%</span>
        </div>
      </div>
      <div style={{marginTop:'20px'}}>
        <label htmlFor="percentage">Input Percentage:</label>
        <input 
          type="number" 
          id="percentage" 
          value={percentage === 0 ? "":percentage} 
          onChange={setValuer} 
          max={100} 
          min={0} 
        />
        </div>
    </div>
  );
};

export default ProgressBar;

