import React, { useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  
  useEffect(() => {
    let interval;
    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => {
          if(prev==0){
            setRunning(false);
            return 0;
          }
          return prev - 1
        }
      );


      }, 1000);
    }
    if (time === 0) {
      setRunning(false);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const start = () => {

    if (input <= 0) return;

    setTime(Number(input));
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
    setInput("");
  };

  return (
    <div>
      <h2>Simple Timer</h2>

      <input
        type="number"
        placeholder="Enter seconds"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <h1>{time} sec</h1>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
