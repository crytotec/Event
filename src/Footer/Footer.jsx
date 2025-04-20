import { FaClock, FaPhone } from 'react-icons/fa'
import './Footer.css'
import { FaAddressBook } from 'react-icons/fa6'



function Footer(){
  return(
    <div>
        <div className='footer'>
         <div className='footers'>
            <h1>Get Through to US</h1>
            <h3>Get through to us on any of the channels</h3>
            </div>
            <div className='footicon'>
                <div className='con'>
                <div className='iconset'>
                <FaAddressBook/>
                </div>
                <p>
                    Address:
                </p>
                <p>
                    123, ABC Street, New York, USA
                </p>    
                </div>
                <div className='con'>
                <div className='iconset'>
                <FaPhone/>
                </div>
                <p>
                    Phone:
                </p>
                <p>
                    (202) 765-4321
                </p>
                </div>
                <div className='con'>
                <div className='iconset'>
                <FaClock/>
                </div>
                <p>Working Hours:</p>
                <p>Monday–Friday: 9AM – 5PM</p>
                <p>Saturday: 10AM – 3PM</p>
                </div>
            </div>
        </div>
        <div className='footer1'>
           &copy; 2025 Crytotec. All rights Reserved
        </div>
    </div>
  )
}
export default Footer