import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Screen Shot 2023-07-26 at 9.50.27 PM.png'
import IMG2 from '../../assets/leetcode.png'
import IMG3 from '../../assets/mentalHealth.webp'
import {FaReact} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {BiLogoMongodb} from 'react-icons/bi'
import {DiJavascript1} from 'react-icons/di'
import {SiPython} from 'react-icons/si'
import {BiLogoGoLang} from 'react-icons/bi'
import {TbBrandCss3} from 'react-icons/tb'
import {TbHtml} from 'react-icons/tb'

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {IMG1} alt = 'IMG1' width={250} height={250}/>
          </div>
          <h3>My Personal Website</h3>
          <div className='portfolio__item__cta'>
            <a href='https://github.com/akash-pandey1729' className='btn'>Github Repo</a>
            <a href='https://akash-pandey.com/' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
          <div>
            <small>Technologies Used</small>
            <div className='technology__icons'>
              <FaReact className='icon'/>
              <TbBrandCss3 className='icon'/>
              <TbHtml className='icon'/>
              <DiJavascript1 className='icon'/>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {IMG2} alt = 'IMG1' width={250} height={250}/>
          </div>
          <h3>Leetcode Profile</h3>
          <div className='portfolio__item__cta'>
            <a href='https://github.com/akash-pandey1729/cinderella_man' rel="noreferrer" target='_blank' className='btn'>Github Repo</a>
            <a href='https://leetcode.com/cinderella-man' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
          <div>
            <small>Technologies Used</small>
            <div className='technology__icons'>
              <SiPython className='icon'/>
              <BiLogoGoLang className='icon'/>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {IMG3} alt = 'IMG1' width={250} height={250}/>
          </div>
          <h3>Mental Health Platform</h3>
          <div className='portfolio__item__cta'>
            <a href='https://github.com/akash-pandey1729/MHPclient' rel="noreferrer" target='_blank' className='btn'>Github Repo</a>
            <a href='https://github.com/akash-pandey1729/MHPclient' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
          <div>
            <small>Technologies Used</small>
            <div className='technology__icons'>
              <FaReact className='icon'/>
              <IoLogoNodejs className='icon'/>
              <BiLogoMongodb className='icon'/>
              <DiJavascript1 className='icon'/>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio