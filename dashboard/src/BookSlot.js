import React from 'react'
import Navbar from './Navbar';
import "./BookSlot.css";

const BookSlot = () => {
  return ( 
    <div>

    <div>
       <Navbar/>
       </div>
       <div  class ="BookSlotContainer">

       <h>BookSlot
      </h>
      <div className='Date'>
        <span >select Date:</span>
               
         <input type='date' placeholder= 'DD/MM/YYYY'></input> 
        <div> <input type='text'id='dateForm' placeholder= 'DD/MM/YYYY'></input> </div>
       </div>
       
     <div className='Time'>
      <label>select time:</label>
      <input type='time' ></input>
      <div> <input type='text'id='time'placeholder='HH:MM'></input></div>
      </div>

      <div className='levels'>
        <h2>Difficulty Level</h2>
        <p><input type='radio'/>Beginner</p>
        <p><input type='radio'/>Intermediate</p>
        <p><input type='radio'/>Advance</p>

        
        <h2>Practice Mode</h2>
        <p><input type='radio'/>Time Interview(with a timer)</p>
         <p><input type='radio'/>Relaxed Mode(no timer)</p>

        <h2>Interview Type Selection</h2>
        <p><input type='radio'/>Technical Coding</p>
        <p><input type='radio'/>System Design</p>
        <p><input type='radio'/>Behavioral</p>
        <p><input type='radio'/>Algorithmic</p>
        <p><input type='radio'/>Full-Stack</p>
      </div>
      <button>Submit</button>


      </div>
      </div>
      );
      };
      export default BookSlot;
