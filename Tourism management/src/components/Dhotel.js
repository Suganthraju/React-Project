import React, { Component } from 'react';
import './Chotel.css';
class Hotel extends Component { 
    render() { 
      return (
  <div className='vk'>
        <div>
          <h1 id='int'></h1>
          <form id='foren' action="/Btq">
           <table>
           <tr>
               <td><b>Arrive</b></td>
                <p><td><input type="date" placeholder='Enter your name' id='date' required/></td></p>
            </tr>
            <tr>
              
              <td><b>Depart</b></td>
              <p><td><input type="date" placeholder='Enter your name' id='date' required/></td></p>
           
            </tr>
            <tr>
              
              <td><b>People</b></td>
              <p><td><input type="number" placeholder='number of people' id='m6' required/></td></p>
           
            </tr>
            <tr>
            <td><label for="room"><b>Room </b></label></td>
          <p> <td><select name="Room" id="dat1" required>
           <option value="">Select</option>
           <option value="volvo">Deluxe</option>
           <option value="saab">Non-Deluxe</option>
           </select></td></p></tr>
            <tr>
            <td><label for="room"><b>Bedding </b></label></td>
          <p> <td><select name="Room" id="dat" required>
           <option value="">Select</option>
           <option value="volvo">Double-bedroom</option>
           <option value="saab">Single-bedroom</option>
           </select></td></p></tr>
          
          
           
              
            </table>
          <button class="button button-gray" id='mon' >Confirm</button>
          </form>
        </div>
        </div>
      );
    }
  }
   
  export default Hotel;