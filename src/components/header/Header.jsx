import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <header>
      <section id = 'home'>
      <div className='container header__container'>
        <h5>Hello I am</h5>
        <h1>Akash Sampurnanand Pandey</h1>
        <h5 className='text-light'>Backend Engineer</h5>
        <CTA />
        <HeaderSocials />


        {/* <div className='me'>
          <img src={ME} alt="me" />
        </div> */}

        
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
      </section>
    </header>
  )
}

export default Header