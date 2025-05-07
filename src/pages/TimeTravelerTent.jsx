// TimeTravelerTent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TimeTravelerTent.css';

export default function TimeTravelerTent() {
  const navigate = useNavigate();

  return (
    <div className="time-tent-container">
      <img
        src="/images/time-tent-bg.png"
        alt="Time Traveler Background"
        className="time-tent-bg"
      />

      <img
        src="/images/exit-button.png"
        alt="Exit"
        className="exit-button"
        onClick={() => navigate('/')}
      />
    </div>
  );
}
