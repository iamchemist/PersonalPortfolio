import React from 'react'
import './about.css'
import me from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (

    <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
               <img src={me} alt="About Image" />
            </div>
          </div>

           <div className="about__content">
               <div className="about__cards">
                 <article className='about__card'>
                       <FaAward className='about__icon'/> 
                       <h5>Experience</h5>
                       <small>3+ years experience</small>
                 </article>

                 <article className='about__card'>
                       <FiUsers className='about__icon'/> 
                       <h5>Open-source Contribution</h5>
                       <small>To be done</small>
                 </article>

                 <article className='about__card'>
                       <VscFolderLibrary className='about__icon'/> 
                       <h5>Personal Projects Completed</h5>
                       <small>4</small>
                 </article>
                 
                 
               </div>
               <p>I am a process engineer by the day and a software engineer by the night. Aspiring to add some light to my nights.</p>   
               <a href='#contact' className='btn btn-primary'>Let's Connect</a>
           </div>

             
    </div>
    </section>
  )
}

export default About