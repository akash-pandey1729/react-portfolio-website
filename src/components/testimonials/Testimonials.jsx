import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {AiFillLinkedin} from 'react-icons/ai'

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id = 'testimonials'>
      <h5>Reviews from Managers/Mentors</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src = {AVTR1} alt = ""/>
          </div>
          <h5 className='reviewer_name'>Kaushik Roy</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              A temporibus delectus consequuntur aliquid necessitatibus cum maxime minima aut doloremque vero, 
              qui cumque provident dolorem voluptas rerum doloribus ipsam laborum nisi autem consectetur.
          </small>
          <div className='linkedin'>
            <a href='https://www.linkedin.com/in/kaushik-roy-8834b11b/' rel="noreferrer" target='_blank'>
              <AiFillLinkedin />
            </a>
          </div>
          <div>
            Akash's Manager at Capgemini
          </div>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src = {AVTR2} alt = ""/>
          </div>
          <h5 className='reviewer_name'>Xiaomin Wang</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              A temporibus delectus consequuntur aliquid necessitatibus cum maxime minima aut doloremque vero, 
              qui cumque provident dolorem voluptas rerum doloribus ipsam laborum nisi autem consectetur.
          </small>
          <div className='linkedin'>
            <a href='https://www.linkedin.com/in/xiaomin-wang-325b042b/' rel="noreferrer" target='_blank'>
              <AiFillLinkedin />
            </a>
          </div>
          <div>
            Akash's Mentor at Forward Health
          </div>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src = {AVTR3} alt = ""/>
          </div>
          <h5 className='reviewer_name'>Natalia Carvalho</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              A temporibus delectus consequuntur aliquid necessitatibus cum maxime minima aut doloremque vero, 
              qui cumque provident dolorem voluptas rerum doloribus ipsam laborum nisi autem consectetur.
          </small>
          <div className='linkedin'>
            <a href='https://www.linkedin.com/in/carvalhonatalia/' rel="noreferrer" target='_blank'>
              <AiFillLinkedin />
            </a>
          </div>
          <div>
            Akash's Manager at AWS
          </div>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src = {AVTR4} alt = ""/>
          </div>
          <h5 className='reviewer_name'>Anshul Singhal</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              A temporibus delectus consequuntur aliquid necessitatibus cum maxime minima aut doloremque vero, 
              qui cumque provident dolorem voluptas rerum doloribus ipsam laborum nisi autem consectetur.
          </small>
          <div className='linkedin'>
            <a href='https://www.linkedin.com/in/anshulsinghal-iitb/' rel="noreferrer" target='_blank'>
              <AiFillLinkedin />
            </a>
          </div>
          <div>
            Akash's Manager at Acadza
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials