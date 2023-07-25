import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/akash-sampurnanand-pandey-129609178/' rel="noreferrer" target='_blank' ><AiFillLinkedin/></a>
        <a href='https://github.com/akash-pandey1729' rel="noreferrer" target='_blank'><AiFillGithub/></a>
        <a href='https://www.instagram.com/akash_p1729/' rel="noreferrer" target='_blank'><AiOutlineInstagram/></a>
    </div>
  )
}

export default HeaderSocials