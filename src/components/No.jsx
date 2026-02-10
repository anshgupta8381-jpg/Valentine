import React from 'react'
import crying from '../assets/crying.png'
import './No.css'

const No = () => {
  return (
    <div className='content'>
     <img id="cry" src={crying} alt="heart" />
     <a href='/'><button class="Try">Try Again.. {" :("}</button></a>
    </div>
  )
}

export default No
