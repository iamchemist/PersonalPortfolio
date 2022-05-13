import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/grad.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Ashwin Gopalan</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
      </div>


<div className='me'>
  <img src={me} alt="me" />
</div>

<a href='#contact' className='scroll__down'>scroll down</a>
    </header>
  )
}

export default header