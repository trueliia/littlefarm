import React, { useReducer, useEffect } from 'react';
import './App.css';

const calculateTimeRemaining = () => {
  const currentDate = new Date();
  const endOfSaleDate = new Date(currentDate.getFullYear(), 1, 25); // endOfSale is on February 25th

  if (currentDate > endOfSaleDate) {
    endOfSaleDate.setFullYear(currentDate.getFullYear() + 1);
  }

  const timeRemaining = endOfSaleDate.getTime() - currentDate.getTime();
  const seconds = Math.floor(timeRemaining / 1000);

  return seconds;
};

const initialState = {
  time: calculateTimeRemaining(),
  running: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TICK':
      return { ...state, time: state.time - 1 };
    default:
      return state;
  }
};

const EndOfSaleCountdown = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timer;

    if (state.running && state.time > 0) {
      timer = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [state.running, state.time]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return ` ${days}d : ${hours}h : ${minutes}m : ${remainingSeconds}s`;
  };

  return (
    <div>
      <h2> { formatTime(state.time)}</h2>
    </div>
  );
};

export default EndOfSaleCountdown;