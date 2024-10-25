import {  useState } from "react";

const usePageBottom = () => {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    const windowHeight = window.innerHeight;
    
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollY + windowHeight >= documentHeight) {
      setIsAtBottom(true);
    }else{
      setIsAtBottom(false)
    }
  };

    window.addEventListener("scroll", handleScroll);
    
 
  return isAtBottom;
};

 const PageBottom =   ()=> {
  const reachedBottom = usePageBottom();
  console.log("reachedBottom", reachedBottom);

  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
  ];
  
  return (
    <div className="App">
      <h1>Welcome to React Challenges</h1>
      {arr.map((num, index) => (
        <h2 key={index + " " + num}>{num}</h2>
      ))}
      <footer>&copy; 2022 React challenges.live</footer>
    </div>
  );
}

export default PageBottom;