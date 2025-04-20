import './Home.css'
import { useState } from 'react'
import {section, client} from '../Item'
import  people1 from '../images/people1.jpg'
import  people2 from '../images/people2.jpg'
import  people3 from '../images/people3.jpg'
import  people4 from '../images/people4.jpg'
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
function Home(){
  const [slide, setSlide]= useState(0);
  const totalSlide=client.length;

  const nextSlide = () =>{
    setSlide((slide+1)%totalSlide)
  }


  const prevSlide = () =>{
    setSlide((slide-1 + totalSlide)%totalSlide)
  }


  return(
    <div className='Home'>
      <div className='img'>
       <div className='section'>
        <div className='container'>
        <h1> We Help to Bring Your Vision to life</h1>
        <button>
          <Link to='/Event'>
          Plan your Event
          </Link>
         
        </button>
        </div>

       </div>
      </div>
      <div className='section1'>
        <h1>Come Plan with US</h1>
        <div className='setsection'>
        {
          section.map((items)=>(
            <div className='setsection1' key={items.key}>
              <img src={items.img}/>
              <h2 className='title'>{items.title}</h2>
              <p className='description'>{items.description}</p>
              </div>
          ))
         }
        </div>
        
      </div>

      <div className='aboutsection'>
         <img src={people3}/>
         <div className='sectionset'>
         <h1>About Crytotec</h1>
         <p>Crytotec is a premier event planning and design company specializing in weddings and elegant celebrations. We combine creativity, style, and precision to bring your vision to life through stunning décor and seamless execution.</p>
         <button >
          <Link to='/About'> Read More
          </Link>
          </button>
         </div>
           </div>


           <div className='setwork'>
           <div className='Work'>
            <div className='people'>
            <img  src={people1}/>
            </div>
            <div className='people'>
          <img src={people2}/>
          </div>
         </div>
         <div className='gallery'>
           <button>
            <Link to='/Gallery'>Our Gallery</Link> </button>
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
           

    <div className='section4'>
      <div className='setsection4'>
      <div className='imageset'>
        <img  src={people1}/>
        <img  src={people2}/>
        </div>
       <div className='imageset'>
       <img  src={people3}/>
       <img  src={people4}/>
       </div>
      </div>
       <div className='textset'>
       <h1>Check Out What we do</h1>
       <p>At Crytotec, we bring the style, elegance, and creative flair your event deserves. We are industry leaders in venue styling, street decoration, floral design, and stage aesthetics—delivering visually stunning experiences that leave a lasting impression.
     </p>
       </div>
       
    </div>
    </div>
  )
}
export default Home;