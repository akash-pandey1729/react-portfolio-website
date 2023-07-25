import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt = 'about'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years of Experience</small>
            </article>

            <article className='about__card'>
              <ImUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200 Worldwide</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ completed projects</small>
            </article>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Ducimus itaque assumenda dolore optio unde veniam ipsa voluptatem perspiciatis? 
          Ipsam perspiciatis quis quisquam alias. Enim quisquam ab magnam voluptate cum iure!</p>
          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About