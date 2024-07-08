import React, { useState, useRef } from 'react';

const CountdownTimer = () => {
  const [timer, setTimer] = useState(10); // Initial countdown value
  const [isActive, setIsActive] = useState(false); // State for timer activation
  const intervalRef = useRef(null); // Reference to the interval timer

  const startCountdown = () => {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(intervalRef.current);
          setIsActive(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000); // Update countdown every second
  };

  const pauseResumeCountdown = () => {
    if (isActive) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    } else {
      startCountdown();
    }
  };

  const resetCountdown = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTimer(10); // Reset timer to initial value
  };

  return (
    <div className="countdown-timer">
      <h2>Countdown Timer: {timer}</h2>
      <div className="buttons">
        <button onClick={startCountdown} disabled={isActive}>
          Start Countdown
        </button>
        <button onClick={pauseResumeCountdown}>
          {isActive ? 'Pause' : 'Resume'}
        </button>
        <button onClick={resetCountdown}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
