import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id = 'testimonials'>
      <h5>Review from Managers</h5>
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
          <h5 className='client__name'>Kaushik Roy</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              A temporibus delectus consequuntur aliquid necessitatibus cum maxime minima aut doloremque vero, 
              qui cumque provident dolorem voluptas rerum doloribus ipsam laborum nisi autem consectetur.
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src = {AVTR2} alt = ""/>
          </div>
          <h5 className='client__name'>Ambar Choudhary</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              A temporibus delectus consequuntur aliquid necessitatibus cum maxime minima aut doloremque vero, 
              qui cumque provident dolorem voluptas rerum doloribus ipsam laborum nisi autem consectetur.
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src = {AVTR3} alt = ""/>
          </div>
          <h5 className='client__name'>Natalia Carvalho</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              A temporibus delectus consequuntur aliquid necessitatibus cum maxime minima aut doloremque vero, 
              qui cumque provident dolorem voluptas rerum doloribus ipsam laborum nisi autem consectetur.
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src = {AVTR4} alt = ""/>
          </div>
          <h5 className='client__name'>Anshul Singhal</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              A temporibus delectus consequuntur aliquid necessitatibus cum maxime minima aut doloremque vero, 
              qui cumque provident dolorem voluptas rerum doloribus ipsam laborum nisi autem consectetur.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials