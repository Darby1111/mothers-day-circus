// HomePage.jsx
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const tents = [
    { image: '/images/tent1.png', x: '26%', y: '-4%' },
    { image: '/images/tent2.png', x: '83%', y: '-27%' },
    { image: '/images/tent3.png', x: '37%', y: '17%' },
    { image: '/images/tent4.png', x: '72%', y: '5%' },
    { image: '/images/tent5.png', x: '15%', y: '25%' },
    { image: '/images/tent6.png', x: '85%', y: '28%' },
    { image: '/images/tent7.png', x: '55%', y: '26%' },
    { image: '/images/tent8.png', x: '13%', y: '-25%' }
  ];

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Autoplay blocked:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="homepage">
      <div className="background" />
      <img src="/images/Sign.png" alt="Mother's Day Circus Map" className="circus-sign-img" />

      {/* Audio Player */}
      <audio ref={audioRef} src="/audio/circus-music.mp3" loop />

      {/* Play/Pause Button */}
      <img
        src="/images/playpause.png"
        alt="Play/Pause"
        className="music-toggle"
        onClick={toggleAudio}
      />

      <div className="tent-map">
        {tents.map((tent, i) => (
          <div
            key={i}
            className={`tent-icon small tent${i + 1}`}
            style={{ left: tent.x, top: tent.y }}
            onClick={() => navigate('/memories')}
          >
            <img src={tent.image} alt={`Tent ${i + 1}`} />
          </div>
        ))}

        {/* Start Here Arrow */}
        <img 
          src="/images/StartHereArrow.png" 
          alt="Start Here Arrow" 
          className="start-arrow" 
        />
      </div>

      {/* Desktop Path */}
      <svg className="tent-path desktop-path" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path
          d="M 260 -800 C -100 -100, 800 -400, 260 -400 S 360 350, 370 400 S 220 470, 150 500 S 500 600, 550 520 S 720 420, 720 370 S 880 600, 850 560 S 860 -220, 830 -300"
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeDasharray="6 8"
        />
      </svg>

      {/* Mobile Path */}
      <svg className="tent-path mobile-path" viewBox="0 0 200 800" preserveAspectRatio="none">
        <path
          d="M -19 249 C 0 260, 28 280, 56 293 S 10 330, -5 343 S -20 470, -15 497 S 30 500, 54 504 S 110 510, 119 517 S 113 380, 113 383 S 110 260, 115 249"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray="2 6"
        />
      </svg>
    </div>
  );
}
