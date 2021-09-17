import { useEffect, useState } from "react";
import "./TimerFunc.css";

const TimerFunc = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const clockId = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => {
      clearInterval(clockId);
    };
  }, []);

  return (
    <div className="timerfunc">
      <h6 className="timerfunc__title">Realtime Clock (functional-based)</h6>

      <hr className="separator" />

      <p className="timerfunc__clock">{clock.toLocaleTimeString()}</p>
    </div>
  );
};

export default TimerFunc;
