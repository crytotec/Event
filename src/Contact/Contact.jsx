import './Contact.css'

function Contact(){
    return(
        <div>
        <div className='img'>
       <div className='section'>
        <div className='container'>
        <h1> Contact</h1>
        <p>You can reach us through any of the contact options listed below.</p>
        </div>
      </div>
</div>

        <div>
            <form>
            <div className='name'>
                <div className='setname'>
                <label id='fname'>First Name:</label>
                <input type='text' required id='fname' placeholder='FirstName'/>
                </div>
                <div className='setname'>
                 <label id='lname'>Last Name:</label>
                 <input type='text' required id='lname' placeholder='LastName'/>
                 </div>
                 </div>
                 <label id='email'>Email:</label>
                 <input type='email'  required id='eamil' placeholder='Email Address'/>
                 <label id='name'>Subject:</label>
                 <input type='text' id='name' required placeholder='Subject'/>
                 <label id='Comment'>Comment:</label>
                 <textarea  id='name'rows='5' cols='30' placeholder='Comment'/>
                 <button>Click</button>
            </form>
          
        </div>
        </div>
      )
}
export default Contact