import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>AKASH S PANDEY</a>
      <ul className='permalinks'>
        <li> <a href='#home'>Home</a> </li>
        <li> <a href='#about'>About</a> </li>
        <li> <a href='#experience'>Experiences</a> </li>
        <li> <a href='#services'>Services</a> </li>
        <li> <a href='#testimonials'>Testimonials</a> </li>
        <li> <a href='#contact'>Contact</a> </li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/akash-sampurnanand-pandey-129609178/' rel="noreferrer" target='_blank' ><AiFillLinkedin/></a>
        <a href='https://github.com/akash-pandey1729' rel="noreferrer" target='_blank'><AiFillGithub/></a>
        <a href='https://www.instagram.com/akash_p1729/' rel="noreferrer" target='_blank'><AiOutlineInstagram/></a>
    </div>
    <div className='footer__copyright'>
      <small>Copyright 2023 &copy; Akash Sampurnanand Pandey. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer
