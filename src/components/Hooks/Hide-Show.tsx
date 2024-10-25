import React, { useState } from "react";

const HideShow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true); 
  const HideAndShow = () => {
    setIsVisible((prevState) => !prevState); 
  };

  return (
    <div>
      <button onClick={HideAndShow} style={{backgroundColor:"blue"}}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

      {isVisible && <h3>Welcome to our React Challenges</h3>}
    </div>
  );
};

export default HideShow;
