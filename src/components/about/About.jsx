import React from 'react'
import './about.css'
import ME from '../../assets/natureAkash.jpg'
import {FaAward} from 'react-icons/fa'
import {FaPlaneDeparture} from 'react-icons/fa'
import {BiSolidBookAlt} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import {GrProductHunt} from 'react-icons/gr'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import { Link } from "react-router-dom";

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
            <a href='#experience' className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Software Development Experience</h5>
              <small>2+ Years</small>
            </a>

            <a href='#experience' className='about__card'>
              <GrProductHunt className='about__icon'/>
              <h5>Product Work Experience</h5>
              <small>1+ Years</small>
            </a>

            <a href='#portfolio' className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ completed projects</small>
            </a>
            
            <Link to= 'https://www.linkedin.com/in/akash-sampurnanand-pandey-129609178/' target="_blank" rel="noopener noreferrer" className='about__card'>
              <AiFillLinkedin className='about__icon'/>
              <h5>Content Creation</h5>
              <small>I write about Distributed System Design and Healthcare on LinkedIn</small>
            </Link>

            <Link to='/hobby' target="_blank" rel="noopener noreferrer" className='about__card'>
              <FaPlaneDeparture className='about__icon'/>
              <h5>Hobbies</h5>
              <small>Flying Single Engine Planes, Origami and Cooking Indian Food</small>
            </Link>

            <Link to='/book_summary' target="_blank" rel="noopener noreferrer" className='about__card'>
              <BiSolidBookAlt className='about__icon'/>
              <h5>Education</h5>
              <small>Two degrees cooler</small>
            </Link>

          </div>
        </div>
        <div className='bottom__text'>
            <p> A technology enthusiast with a Master’s in Computer Science from New York University and Bachelor's from Indian Institute of Technology (IIT). Software Engineering workhorse with around 2 years of professional experience in big public company (Amazon and Capgemini), a Series D startup (Forward Health), and a seed-funded startup (Acadza). Skilled in Back-end technologies using Go, Python (Django), and Javascript(Node.js), and Frontend technologies like React.js.</p>
          </div>
      </div>
    </section>
  )
}

export default About