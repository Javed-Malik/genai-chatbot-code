import React, { useEffect, useState } from "react";
// import ".App.css";

function App() {
  const [time, setTime] = useState(60);
  const [countDown, setCountDown] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && countDown > 0) {
      timer = setInterval(() => {
        setCountDown((prevCountDown) => prevCountDown - 1);
      }, 1000);
    } else if (countDown == 0) {
      alert("Time is Up");
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, countDown]);
  const startTimer = () => {
    if (time > 0) {
      setCountDown(time);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };
  const resetTimer = () => {
    setIsRunning(false);
    setCountDown(time);
  };
  return (
    <div>
      <h1> Count-Down Timer </h1>
      <div>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          disabled={isRunning}
        />
      </div>
      <h2> {countDown} Seconds </h2>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Rest</button>
    </div>
  );
}

export default App;
