import { useEffect, useState } from "react";
import "./Counter.css";

const Counter = ({ count, crementValue }) => {
  // hooks
  const [myCount, setMyCount] = useState(null);
  const [myCrementValue, setMyCrementValue] = useState(null);

  useEffect(() => {
    setMyCount(count || 0);
    setMyCrementValue(crementValue || 0);
  }, [count, crementValue]);

  // custom functions
  const increment = () => {
    setMyCount((prev) => prev + myCrementValue);
  };

  const decrement = () => {
    setMyCount((prev) => prev - myCrementValue);
  };

  return (
    <section className="counter">
      <p className="counter__value">Count: {myCount}</p>

      <div className="counter__inputs">
        <button onClick={increment}> Increment </button>
        <button onClick={decrement}> Decrement </button>
      </div>
    </section>
  );
};

export default Counter;
