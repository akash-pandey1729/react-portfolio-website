import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {SiJirasoftware} from 'react-icons/si'
import {BiSolidContact} from 'react-icons/bi'
import {MdWork} from 'react-icons/md'
import { useState } from 'react'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  // const [hover, setHover] = useState(false);
  // const onHover = () => {
  //   setHover(true);
  // };

  // const onLeave = () => {
  //   setHover(false);
  // };
  return (
    <nav>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="top Section" href='#home' onClick={()=>setActiveNav('#home')} className={activeNav==="#home"? 'active': ''} ><AiOutlineHome /></a>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="about" href='#about' onClick={()=>setActiveNav("#about")} className={activeNav==='#about'? 'active':''}><AiOutlineUser /></a>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="work exp" href='#services' onClick={()=>setActiveNav("services")} className={activeNav==="services"?'active':''}><SiJirasoftware /></a>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="portfolio" href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav==="#portfolio"? 'active': ''}><MdWork /></a>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="contact" href='#contact'onClick={()=>setActiveNav("contact")} className={activeNav==="contact"?'active':''}><BiSolidContact /></a>
      <Tooltip id="my-tooltip" />
    </nav>
  )
}

export default Nav