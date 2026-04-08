import { useState } from 'react'
import '../general.css'
import '../styles/story.css'
import Button from "../subcomponents/Buttons"

function Story() {

  return (
    <div className="story">
      <div className="story-heading">
        <p className='font-general'>The Multiversal Ip world</p>
        <h1 className='font-zentry'>the st<b>o</b>ry of <br /> a hidden real<b>m</b></h1>
      </div>
      <div className="story-image">
        <img src="img/entrance.webp" alt="story image" />
      </div>
      <div className="story-content">
        <p className="font-circular-web">Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.</p>
        <Button label="Discover Prologue" />
      </div>
    </div>
  )
}

export default Story
