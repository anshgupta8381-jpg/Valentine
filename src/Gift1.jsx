import React from 'react'
import bggift from './assets/bggift.jpg'
import './gift1.css'
import boqgift from './assets/boqgift.jpeg'
import heartdod from './assets/heartdod.png'
import lettersprink from './assets/lettersprink.png'
import me from './assets/me.png'

const Gift1 = () => {
  return (
    <div>
        <h1 className='head1'>Your Rose Bouquet</h1>
      {/* <img id="bg" src={bggift} alt="box"  /> */}
      <img id="boq" src={boqgift} alt="boqu"  />

      <div className='card1'>
        <pre className="p1">{`I will always love you
    no matter what
`}</pre>
      </div>

      <img id="dod" src={heartdod} alt="dod"  />
      <img id="dod2" src={heartdod} alt="dod"  />

      <div className='card2'>
        <pre className="p1">{`    You are the best
    part of my life
`}</pre>
      </div>

      
      <div className='card3'>
        <pre className="p1">{`You will forever be my
      only option
`}</pre>
      </div>
      <img id="letter" src={lettersprink} alt="letter"  />

       <div className='card4'>
        <pre className="p1">{`I can't imagine my
   life without you
`}</pre>
      </div>
    
   <a href='/diary'><img id="mee" src={me} alt="click"  /></a> 
    </div>
  )
}

export default Gift1
