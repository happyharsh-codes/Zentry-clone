import { useState } from 'react'
import '../general.css'
import '../styles/about.css'

function About() {

  return (
    <div className="about floatbox">
      <div className="title">
          <h1 className='font-zentry'>
            The A<b>d</b>venture Begi<b>n</b>s Here
          </h1>
      </div>
      <div className="image">
        <img src="img/stones.webp" alt="stones logo"  id="stones-img" className='floating'/>
      </div>
        <img src="img/about.webp" alt="about logo" id= 'about-main-img' />

      <div className="footer">
        <p className='font-robert-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo amet temporibus optio.</p>
      </div>
    </div>
  )
}

export default About
