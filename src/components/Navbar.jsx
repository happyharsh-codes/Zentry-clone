import { useState } from 'react'
import '../general.css'
import '../styles/navbar.css'
import Button from '../subcomponents/Buttons'

function Navbar() {

  return (
    <header>
      <section className='nav-left-section'>
        <div className="logo-icon">
          <img src="img/logo.webp" alt="logo" className="logo" />
        </div>
        <Button label="Products"/>
      </section>
      <section className='nav-middle-section'></section>
      <section className='nav-right-section'>
        <nav>Nexus</nav>
        <nav>Vault</nav>
        <nav>Prologue</nav>
        <nav>About</nav>
        <nav>Contact</nav>
        <div>
          <Button label=""/>
        </div>
      </section>
    </header>
  )
}

export default Navbar
