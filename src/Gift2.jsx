import React from 'react'
import './gift2.css'
import valentine from './assets/valentine.mp4'
import thumbnail from './assets/thumbnail.png'
import rose from './assets/rose.png'
import cltxt from './assets/cltxt.png'


const Gift2 = () => {
  return (
    <div>
      <p className='txt'>Kuch khaas yaaden jo na tumhari na meri, sirf humari</p>
      <video id='vid'
        src={valentine}
        poster={thumbnail}
        controls       
        loop        
      />
     <a href='/yes'> <img src={rose} id='r'/></a>
      <img src={rose} id='r2'/>
      <img src={cltxt} id='cl'/>
      <p className='txt2'>Jhoot kehte h saare ki hum dono alag ho jayenge lekin agr yeh baat sach h toh vo ni jaante ki hum fer ak hojayenge</p>
    </div>
  )
}

export default Gift2
