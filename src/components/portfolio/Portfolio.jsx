import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {IMG1} alt = 'IMG1'/>
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item__cta'>
            <a href='https://github.com/akash-pandey1729' className='btn'>Github</a>
            <a href='https://github.com/akash-pandey1729' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {IMG2} alt = 'IMG1'/>
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item__cta'>
            <a href='https://github.com/akash-pandey1729' className='btn'>Github</a>
            <a href='https://github.com/akash-pandey1729' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {IMG3} alt = 'IMG1'/>
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item__cta'>
            <a href='https://github.com/akash-pandey1729' className='btn'>Github</a>
            <a href='https://github.com/akash-pandey1729' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {IMG4} alt = 'IMG1'/>
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item__cta'>
            <a href='https://github.com/akash-pandey1729' className='btn'>Github</a>
            <a href='https://github.com/akash-pandey1729' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {IMG5} alt = 'IMG1'/>
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item__cta'>
            <a href='https://github.com/akash-pandey1729' className='btn'>Github</a>
            <a href='https://github.com/akash-pandey1729' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {IMG1} alt = 'IMG1'/>
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item__cta'>
            <a href='https://github.com/akash-pandey1729' className='btn'>Github</a>
            <a href='https://github.com/akash-pandey1729' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio