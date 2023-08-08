import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id = 'experience'>
      {/* <h5>Skills I have</h5> */}
      <h2>Skills</h2>
      <div className='container experience__container'>

      <div className='experience__backend'>
        <h3>Backend Software Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>API (REST/gRPC)</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
              <h4>Node.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>Django</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>GoLang</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>Git + Postman</h4>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Frontend Software Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>React.js</h4>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__product'>
        <h3>Product Management</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>First Principles Thinking</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>Project Tracking: Asana (Agile Methods)</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>A/B Testing</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience_detail-icon' />
              <div>
                <h4>Figma Wireframing</h4>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience