import { useState, useEffect } from "react";

export default function Factorial() {
  const [number, setNumber] = useState(0);
  const [inc, setInc] = useState(0);
  const [factorial, setFactorial] = useState(1); // State for storing the factorial

  // Calculate the factorial when the number changes
  useEffect(() => {
    const calculateFactorial = (n: number): number => {
      console.log(`factorialOf ${n} called!`);
      return n <= 0 ? 1 : n * calculateFactorial(n - 1);
    };

    setFactorial(calculateFactorial(number));
  }, [number]); // Only re-calculate when number changes

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number == 0 ? "" : number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
      <p>Re-render count: {inc}</p>
    </div>
  );
}
