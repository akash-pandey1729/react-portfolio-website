import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {BiSolidContact} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#home' onClick={()=>setActiveNav('#home')} className={activeNav==="#home"? 'active': ''}><AiOutlineHome /></a>
      <a href='#about' onClick={()=>setActiveNav("#about")} className={activeNav==='#about'? 'active':''}><AiOutlineUser /></a>
      <a href='#experience' onClick={()=>setActiveNav("experience")} className={activeNav==="experience"?'active':''}><BiBookBookmark /></a>
      <a href='#services' onClick={()=>setActiveNav("services")} className={activeNav==="services"?'active':''}><MdMiscellaneousServices /></a>
      <a href='#contact'onClick={()=>setActiveNav("contact")} className={activeNav==="contact"?'active':''}><BiSolidContact /></a>
    </nav>
  )
}

export default Nav