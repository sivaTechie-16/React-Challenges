import { useEffect, useState } from "react";

/* Instruction
 Create a custom hook to track the dimensions of users window while resizing.*/

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleDimension = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleDimension);
    handleDimension();
    return () => {
      window.removeEventListener("resize", handleDimension);
    };
  }, []);
  return windowDimensions;
}

const Dimensions = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div className="App">
      <h2>width: {width + "px"}</h2>
      <h2>height: {height + "px"}</h2>
      <p>Resize the window to see dynamic width and height</p>
    </div>
  );
};
export default Dimensions;
