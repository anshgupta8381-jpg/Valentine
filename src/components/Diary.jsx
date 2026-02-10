import React from 'react' 
import './Diary.css' 
import diary from '../assets/diary.jpg'
import date from '../assets/date.png'
import lovetxt from '../assets/lovetxt.png'
import catt from '../assets/catt.png'
import yoyo from '../assets/yoyo.png'
import boxg from '../assets/boxg.png'
import gifttxt from '../assets/gifttxt.png'

const Diary = () => {
  return (

<div className="diary-container"><h1 className="head1">
  <span>WORDS</span>
  <span>FROM</span>
  <span>MY</span>
  <span>HEART</span>
</h1>
  <img src={diary} alt="diary" id="dimg" />
  <img src={date} alt="date" id="date" />
  <img src={lovetxt} alt="date" id="txt" />
  <img src={catt} alt="date" id="cat" />
  <img src={yoyo} alt="yo" id="yoyoo" />
  <img src={gifttxt} alt="yo" id="bt" />
 <a href='/yes'> <img src={boxg} alt="date" id="boxg" /></a>

  <div className="diary-page">
    
<p id='line1'>Durr kahin aasmano mein hote hain ye faisle,</p>
<p id='line2'>na jaanu main, na jaano tum.Kya likha hai</p>
<p id='line3'> Ishwar ne in lakeeron mein, har baar alag hue,</p>
 <p id='line4'>phir ek ho jaayein — aisi aadat hai hume humaari.</p>

<p id='line5'>Bade imaan se likha hoga meri kismat mein tumhe,</p>
<p id='line6'>jo har baar, har saal, tum mere hue, Ishq nahi hai</p>
<p id='line7'> ye mera awarapan h,jo tumhara bhoot sawaar mujh </p>
<p id='line8'>par. Sirf hum dono ke alawa mitt jaye yeh jag saara</p> 
 
<p id='line9'>reh jaye bs hum do.. har pal aankho hee aankho m </p>
<p id='line10'>pyar ki leher uthe..jo tume mera or muje tumara kre</p>

<p id='line11'>Kaun ho tum,j o har baar mujhe ishq sikha deti ho?</p>
 <p id='line12'>Pariyon ki raani,aakhir chaand par raaj hai tera.</p>
<p id='line13'>Shh… meri Seshu,</p>
<p id='line14'>likha hai Ansh ko khuda ne tera.</p>
    
  </div>
</div>
)
}

export default Diary
