import { useState } from 'react';
import './Event.css';
import { useEffect } from 'react';

function Event() {
    let initGuest=[]
try {
    const guestsaved=JSON.parse(localStorage.getItem('guest'));
    if(guestsaved){
        initGuest = guestsaved
    }
} catch (e) {
    console.error('error', e);
    initGuest=[];
}

  const [guest, setGuest] = useState({
   id: null, Name: '',
    Email: '',
    Number: '',
    Title:'',
    Date:'',
  });

  const [save, setSave] = useState(initGuest);

  useEffect(()=>{
    localStorage.setItem('guest', JSON.stringify(save))
  },[save])

 

  const updateGuest = (e) => {
    const {name, value}= e.target;
    setGuest((prev)=>({...prev, [name]:value,}))
  }

  
const handleSubmit = (e) =>{
    e.preventDefault();

    if (guest.Name && guest.Number && guest.Email && guest.Title && guest.Date) {
        setSave([...save,{...guest, id:save.length+1}]);
        setGuest({Name:'', Email:'', Number:'', Title:'', Date:'', id:null})
    }else{
        alert('input the details')
    }
}

 

 const updateDel = (id) =>{
    const delet = save.filter((items)=>
    items.id !==id )
        setSave(delet)
 }
  return (
    <div>
      <div className='img'>
        <div className='section'>
          <div className='container'>
            <h1>Welcome to!!!</h1>
            <p>
              A dedicated space where we assist in planning your events,
              with the added convenience of photo editing services.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          name='Name'
          value={guest.Name}
          onChange={updateGuest}
          type='text'
          placeholder='Name'
        />

       <label htmlFor='Event'>Event Title:</label>
        <select
          name='Title'
          value={guest.Title}
          onChange={updateGuest}
          type='text'
          placeholder='Name'
        >    
             <option defaultValue='default'>default</option>
            <option value='Wedding'>Wedding Ceremony</option>
            <option value='Birthday'>Birthday Ceremony</option>
            <option value='conferences'>Conferences</option>
            <option value='conferences'>Burial Ceremony</option>
        </select>
         
         <label htmlFor='Date'>Date:</label>
        <input
          name='Date'
          value={guest.Date}
          onChange={updateGuest}
          type='date'
          placeholder='Name'
        />

        <label htmlFor='email'>Email:</label>
        <input
          name='Email'
          value={guest.Email}
          onChange={updateGuest}
          type='email'
          placeholder='Email'
        />

        <label htmlFor='number'>Number:</label>
        <input
          name='Number'
          value={guest.Number}
          onChange={updateGuest}
          type='number'
          placeholder='Number'
        />

        <button type='submit'>Enter</button>
      </form>
        
        
    
      {save.length > 0 && (
        <div className='guest-list'>
          <h3>Saved Guests:</h3>
          <div>
            {save.map((g, i) => (
              <div className='Details' key={i}>
                <p>name:{g.Name} </p>
                <p>Event Title: {g.Title}</p>
                <p>Date: {g.Date}</p>
                 <p>Email: {g.Email}</p>
                 <p>Number: {g.Number}</p>
                 <button onClick={() => updateDel(g.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
        
      )}
      
    </div>
  );
}

export default Event;
