import Home from "./Home/Home"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import About from  "./About/About"
import Contact from "./Contact/Contact"
import Event from "./Event Planner/Event"
import Gallery from "./Gallery/Gallery"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App(){
 return(
  <div>
    <BrowserRouter>
    <Navbar/>
    < Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/Event' element={<Event/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    
  
   
   
    
  </div>
 )
}
export default App