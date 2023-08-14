import React from 'react'
import './education.css'
import {FaGraduationCap} from 'react-icons/fa'
import {SiBookstack} from 'react-icons/si'
import NYU from '../../assets/nyu.jpeg'
import IIT from '../../assets/IIT-Logo.jpeg'

const Education = () => {
  return (
    <section id = 'education'>
      <h5>Degrees I earned</h5>
      <h2>Education</h2>
      <div className='container education__container'>

      <div className='education_univ'>
        <h3>New York University</h3>
        <div className='univ_image'>
            <img src = {NYU} alt = 'IMG1' width={250} height={250}/>
        </div>
          <div className='education__content'>
            <div>
                " "
            </div>
            <article className='education__details'>
              <FaGraduationCap className = 'education_detail-icon' />
              <div>
                <h4>Degree: Master of Science</h4>
              </div>
            </article>
            <article className='education__details'>
              <SiBookstack className = 'education_detail-icon' />
              <div>
                <h4>Major: Computer Science</h4>
              </div>
            </article>
            
          </div>
        </div>

        <div className='education_univ'>
        <h3>Indian Institute of Technology</h3>
        <div className='univ_image'>
            <img src = {IIT} alt = 'IMG1' width={250} height={250}/>
        </div>
          <div className='education__content'>
            <div>
                " "
            </div>
            <article className='education__details'>
              <FaGraduationCap className = 'education_detail-icon' />
              <div>
                <h4>Degree: Bachelor of Science</h4>
              </div>
            </article>
            <article className='education__details'>
              <SiBookstack className = 'education_detail-icon' />
              <div>
                <h4>Major: Engineering</h4>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education