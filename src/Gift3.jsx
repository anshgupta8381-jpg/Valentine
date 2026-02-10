import React, { useEffect, useState } from "react";
import music from "./assets/music.mp3";
import "./gift3.css";

const lyrics = [
  "Every moment feels softer with you 💖",
  "My heart chose you without a doubt 🌹",
  "This gift… is just a small piece of us ✨",
  "Forever starts right here 🎶",

  "In your smile, I find my calm 🌸",
  "Every heartbeat whispers your name 💞",
  "You turned ordinary days into magic ✨",
  "With you, even silence feels warm 🤍",
  "Some souls meet and just… know 💫",
  "If love had a sound, it would be us 🎵",
  "I didn’t search for you — you found me 🌹",
  "This moment, this feeling… it’s you 💖",
  "No matter where life goes, I choose you ✨",
  "And suddenly, the future feels beautiful 🌈"
];

const Gift3 = () => {
  const [lineIndex, setLineIndex] = useState(0);

  // 🎵 music (starts after first click)
  useEffect(() => {
    const audio = new Audio(music);
    audio.loop = true;
    audio.volume = 0.6;

    const startMusic = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener("click", startMusic);
    };
  }, []);

  // 📝 lyrics timing
  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % lyrics.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gift3-container">
      {/* 💬 lyrics */}
      <div className="lyrics" key={lineIndex}>
        {lyrics[lineIndex]}
      </div>

      {/* 🌹 rose shower */}
      <div className="rose-shower">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="rose"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              fontSize: `${14 + Math.random() * 10}px`
            }}
          >
            🌹
          </span>
        ))}
      </div>

      {/* 🎶 hint */}
      <div className="tap-hint">Tap anywhere 🎶</div>
    </div>
  );
};

export default Gift3;
