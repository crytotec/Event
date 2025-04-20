import "./About.css" 
import  Event from '../images/Event.jpg'
import { useState } from 'react'
import {client} from '../Item'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

function About(){

    const [slide, setSlide]= useState(0);
      const totalSlide=client.length;
    
      const nextSlide = () =>{
        setSlide((slide+1)%totalSlide)
      }
    
    
      const prevSlide = () =>{
        setSlide((slide-1 + totalSlide)%totalSlide)
      }
  return(
    <div>
        <div className='img'>
       <div className='section'>
        <div className='container'>
        <h1> About Crytotec</h1>
        <p>We are into Event Planner and help to brings your vision to existence</p>
        </div>
      </div>
</div>
     <div className="about">
        <img src={Event}/>
        <div className="aboutsec">
            <h1>Pursuing Perfection in Every Detail</h1>
            <p>Crytotec, established in 2025, is an event planning and design company dedicated to creating exceptional experiences. We stand out by transforming ordinary events into unforgettable moments through creativity, precision, and professionalism.

           Rooted in values of integrity, transparency, and reliability, we are committed to exceeding client expectations with every event we deliver.</p>
            </div>
     </div>

     <div className='section2'>
                <h1>What Clients says</h1>
                <div className='des'>
                <div className='setdes'>
                 {client[slide].description}
                </div>
                </div>
                <div className='slideicon'>
                   <FaArrowAltCircleLeft className='circle' onClick={prevSlide}/>
                   <FaArrowAltCircleRight  className='circle' onClick={nextSlide}/>
                 </div>
               </div>

               <video  className='video' controls>
                     <source src='/video/Person.mp4' type='video/mp4'/>
                     </video>

            <div className="message">
              <div className="mes">
                <h1>Designing Seamless Moments, Every Time</h1>
                 <button>Kindly Drop Message</button>
              </div>
            </div>
    </div>
  )
}
export default About;