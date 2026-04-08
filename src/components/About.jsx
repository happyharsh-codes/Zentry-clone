import { useState } from 'react'
import '../general.css'
import '../styles/about.css'

function About() {

  return (
    <div className="about floatbox">
      <div className="title">
          <p className='font-general'>WELCOME TO ZENTRY</p>
          <h1 className='font-zentry'>
            DISC<b>O</b>VER THE WORLD'S <br/> LARGEST SHARED <b>A</b>DVENTURE,
          </h1>
      </div>
      <div className="image">
        <img src="img/stones.webp" alt="stones logo"  id="stones-img" className='floating'/>
        <img src="img/about.webp" alt="about logo" id= 'about-main-img' />
      </div>

      <div className="footer">
        <h3 className='font-robert-regular'>The Game of Games begins-your, life now an epic MMORPG</h3>
        <p className='font-robert-medium'>Zentry unites every player from countless games and platform,<br/> both digital and physical, into a unified play Economy</p>
      </div>
    </div>
  )
}

export default About
