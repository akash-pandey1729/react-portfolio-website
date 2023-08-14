import React from 'react'
import './about.css'
// import ME from '../../assets/natureAkash.jpg'
// import ME2 from '../../assets/plane.jpg'
import ME3 from '../../assets/grad.jpg'
import {FaAward} from 'react-icons/fa'
import {FaPlaneDeparture} from 'react-icons/fa'
import {BiSolidBookAlt} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import {GrProductHunt} from 'react-icons/gr'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import { Link } from "react-router-dom";

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
        <Swiper className='image_swiper'
          modules={[Pagination,Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          autoplay = {{delay: 1000}}
          pagination={{ clickable: true }}>
          <SwiperSlide className='my_image_swipe'>
              <div className='my_image'>
                <img src = {ME3} alt = ""/>
              </div>
          </SwiperSlide>
      </Swiper>

          {/* <div className='about__me-image'>
            <img src={ME} alt = 'about'/>
          </div> */}
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <a data-tooltip-id="my-tooltip-about" data-tooltip-content="click to Navigate" href='#experience' className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Software Development Experience</h5>
              <small>2+ Years</small>
            </a>

            <a data-tooltip-id="my-tooltip-about" data-tooltip-content="click to Navigate"  href='#experience' className='about__card'>
              <GrProductHunt className='about__icon'/>
              <h5>Product Work Experience</h5>
              <small>1+ Years</small>
            </a>

            <a data-tooltip-id="my-tooltip-about" data-tooltip-content="click to Navigate"  href='#portfolio' className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small className='text_description'>3+ completed projects</small>
            </a>
            
            <Link data-tooltip-id="my-tooltip-about" data-tooltip-content="click to Navigate"  to= 'https://www.linkedin.com/in/akash-sampurnanand-pandey-129609178/' target="_blank" rel="noopener noreferrer" className='about__card'>
              <AiFillLinkedin className='about__icon'/>
              <h5>Content Creation</h5>
              <small className='text_description'>I write about Distributed System Design and Healthcare on LinkedIn</small>
            </Link>

            <a href='##' className='about__card'>
              <FaPlaneDeparture className='about__icon'/>
              <h5>Hobbies</h5>
              <small className='text_description'>Flying Single Engine Planes, Origami and Cooking Indian Food</small>
            </a>

            <a data-tooltip-id="my-tooltip-about" data-tooltip-content="click to Navigate"  href='#education' className='about__card'>
              <BiSolidBookAlt className='about__icon'/>
              <h5>Education</h5>
              <small className='text_description'> MS from NYU, BS from IIT Varanasi, India</small>
            </a>

          </div>
        </div>
        {/* <div className='bottom__text'>
            <p> A seasoned Software Engineering workhorse with a Master’s in Computer Science from New York University and Bachelors from the Indian Institute of Technology (IIT) with around 2 years of professional experience in public companies (Amazon and Capgemini), a Series D startup (Forward Health), and a seed-funded startup (Acadza). Skilled in Back-end technologies using Go, Python (Django), and Javascript(Node.js), and Frontend technologies like React.js.</p>
        </div> */}
      <Tooltip id="my-tooltip-about" />
      </div>
    </section>
  )
}

export default About