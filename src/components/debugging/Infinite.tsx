/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useEffect, useState } from "react";

export default function CountInputChanges() {
  const [value, setValue] = useState<string>("");
  const [count, setCount] = useState<number>(-1);

  useEffect(() => {
    setCount(count + 1)
},[value]
);

  const onChange = ({ target }:any) => setValue(target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
}
