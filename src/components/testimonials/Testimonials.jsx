import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/kaushik.jpeg'
// import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/natalia.jpeg'
import AVTR4 from '../../assets/anshul.jpeg'
import {AiFillLinkedin} from 'react-icons/ai'

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Testimonials = () => {
  return (
    <section id = 'testimonials'>
      <h5>Reviews from Managers/Mentors</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination,Navigation, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      autoplay = {{delay: 1000}}
      pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src = {AVTR1} alt = ""/>
          </div>
          <h5 className='reviewer_name'>Kaushik Roy</h5>
          <small className='client__review'> Over the last 10 years of my professional experience in the Software Industry, I have
mentored and trained more than 200 associates, I would place Akash
among the top 1 percentile of all the associates I have trained so far. Akash has unparalleled drive to excel in
the technical domain.
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

        {/* <SwiperSlide className='testimonial'>
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
        </SwiperSlide> */}

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src = {AVTR3} alt = ""/>
          </div>
          <h5 className='reviewer_name'>Natalia Carvalho</h5>
          <small className='client__review'>
              As his manager at AWS, I found Akash to be hardworking. He would always push himself to the best of his abilities. He was able to meet all the base targets during the end of his internship. He also did not take a single day off during the entire 14 weeks of his internship. Good effort.
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
              As a first product hire, Akash has had a tremendous impact in shaping the company in its early days. He takes very entrepreneurial, takes ownership, and delivers responsibly. He is a self starter, highly motivated and has a diverse skill sets through which he tackles any ambigous problems very diligently. He was a core member of the think tank at Acadza. Best wishes for his future endeavors
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