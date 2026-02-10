import React, { useState } from 'react'
import './Yes.css'

import panda from '../assets/panda.png'
import mail from '../assets/mail.png'
import spark from '../assets/spark.png'
import scanner from '../assets/scanner.jpeg'

const Yes = () => {
  const [showScanner, setShowScanner] = useState(false)

  return (
    <div>
      <div className="container">

        {/* 🌹 Falling Roses */}
        <div className="roses">
          <span>🌹</span><span>🌹</span><span>🌹</span><span>🌹</span>
          <span>🌹</span><span>🌹</span><span>🌹</span><span>🌹</span>
        </div>

        {/* 🐼 Panda */}
        <img id="panda" src={panda} alt="panda" />

        {/* 💌 Text */}
        <h1 className="text3">Yay! You said yes</h1>
        <h4 className="text4">I made all these for you hehe..</h4>

        {/* 📩 Mail */}
        <img id="mail" src={mail} alt="mail" />

        {/* ✨ Spark */}
        <img
          id="spk"
          src={spark}
          alt="spark"
          onClick={() => setShowScanner(true)}
        />

        {/* 🔍 Scanner Popup */}
        {showScanner && (
          <div
            className="scanner-overlay"
            onClick={() => setShowScanner(false)}
          >
            <div
              className="scanner-box"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={scanner}
                alt="scanner"
                className="scanner-img"
              />
            </div>
          </div>
        )}
      </div>

      {/* 🎁 Gifts */}
      <div id="gifts">
        <a href="/gift1"><button className="gift1">GIFT 1</button></a>
        <a href="/gift2"><button className="gift2">GIFT 2</button></a>
        <a href="/gift3"><button className="gift3">GIFT 3</button></a>
      </div>
    </div>
  )
}

export default Yes
