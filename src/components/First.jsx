import React from 'react'
import './first.css'
import chatballoon from '../assets/chatballoon.png'
import plann from '../assets/plann.png'
import bunnyv from '../assets/bunnyv.png'
import feb from '../assets/feb.png'



const First = () => {
  return (
    <div>
      <img id="balloon" src={chatballoon} alt="balloon" />
      <img id="plane" src={plann} alt="paper" />
      <img id="rabbits" src={bunnyv} alt="paper" />
      <b><p class="text1">Hey Saesha,</p></b>
      <b><p class="text2"> Will you be my Valentine?</p></b>
      <img id="feb" src={feb} alt="14" />
      <a href= '/yes'><button class="button1">YES OF COURSE!!!</button></a>
      <a href='/no'><button class="button2">NO THANKYOU</button></a>
       
    </div>
  )
}

export default First
