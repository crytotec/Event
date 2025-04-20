import { FaBars, FaFacebook, FaInstagram, FaTimes, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Navbar.css'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';



function Navbar() {
    const navbarRef=useRef(null);

    useEffect(()=>{
        if(navbarRef.current){
            navbarRef.current.style.position='fixed';
            navbarRef.current.style.top='0';
        }
    }
    ,[])

    const Handleclick = () =>{
        setNavbar(false)
    }

    const [navbar, setNavbar]=useState(false)

    const navbarupdate = () => {
        setNavbar(!navbar)
    }

    useEffect(()=>{
        if(navbar){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow='auto';
        }
    },[navbar])
        return(
        <div>
            <div ref={navbarRef} className="navbar">
            <div className='component'>
             <div className='list'>
                 <div className='faceback'>
                 <FaFacebook  className='facebook'/>
                 </div>
             <div className='twitterback'>
             <FaTwitter className='twitter'/>
             </div>
             <div className='youtubeback'>
             <FaYoutube className='youtube'/>
             </div>
            <div className='instagramback'>
            <FaInstagram className='instagram'/>
            </div>
            
             </div>
              <h1 className='logo'>Crytotec</h1>
               <button onClick={navbarupdate}>
                {navbar ? <FaTimes/> :<FaBars/> }
               </button>
                
            
              </div>
              </div>
              {navbar &&(
                <ul>
                <li onClick={Handleclick}>
                    <Link className='Link' to="/">
                    Home
                    </Link>
                   
                </li>
                <li onClick={Handleclick}>
                    <Link className='Link' to="/About">
                    About
                    </Link>
                </li>
                <li onClick={Handleclick}>
                    <Link className='Link' to='/Contact'>
                    Contact
                    </Link>
                    
                </li>
                <li onClick={Handleclick}>
                    <Link className='Link' to='/Event'>
                    Event Planner
                    </Link>
                </li>
                <li onClick={Handleclick}>
                    <Link className='Link' to='/Gallery'>
                    Gallery
                    </Link>
                </li>
               </ul>
              )}
               
            </div>
         
    )
}
export default Navbar