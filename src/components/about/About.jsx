import React from 'react'
import './about.css'
import ME from '../../assets/natureAkash.jpg'
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
              <h5>SDE Work Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Product Work Experience</h5>
              <small>1+ Years</small>
            </article>

            <a className='about__card' href='#contact'>
              <ImUsers className='about__icon'/>
              <h5>My Book Summaries</h5>
              <small>200 Worldwide</small>
            </a>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ completed projects</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Hobbies</h5>
              <small>3+ completed projects</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Content Creation</h5>
              <small>I talk about Distributed System Design and Healthcare</small>
            </article>

          </div>
        </div>
        <div className='bottom__text'>
            <p> A technology enthusiast with a Master’s in Computer Science from New York University. Previously, a seasoned Software Engineering workhorse with around 2 years of professional experience in big public company (Amazon and Capgemini), a Series D startup (Forward Health), and a seed-funded startup (Acadza). Skilled in Back-end technologies using Go, Python (Django), and Javascript(Node.js), and Frontend technologies like React.js.</p>
          </div>
      </div>
    </section>
  )
}

export default About