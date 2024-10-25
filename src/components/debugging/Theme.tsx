import React, { useState, useContext, useEffect } from "react";

const ThemeContext = React.createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({
  theme: "light",
  setTheme: () => {},
});

function Comp1() {
  const { theme } = useContext(ThemeContext); 

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

function Comp2() {
  const { setTheme } = useContext(ThemeContext); 
  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default function Theme() {
  const [theme, setTheme] = useState("light"); 
  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    } else if (theme === "dark") {
      document.body.style.backgroundColor = "#000000";
      document.body.style.color = "#ffffff";
    }
  }, [theme]); 

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Comp1 />
        <Comp2 />
      </div>
    </ThemeContext.Provider>
  );
}
