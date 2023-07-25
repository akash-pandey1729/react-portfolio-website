import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id = 'contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>asp9085@nyu.edu</h5>
            <a href='mailto:asp9085@nyu.edu'>Send an Email</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+19294986395</h5>
            <a href='https:://api.whatsapp.com/send?phone=+19294986395'>Send Message</a>
          </article>
        </div>
        <form action=''>
            <input type='text' name = 'name' placeholder='Your Full Name' required />
            <input type='text' name = 'email' placeholder='Your Email ID' required />
            <textarea name = 'message' rows={7} placeholder='Messsage for Akash' required/>
            <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact