import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function react() {

  const [input, setInput] = useState({
  
    email: '',
    psw: '',
    pswrepeat: ''
  })

  function handleChange(event) {
    const {name, value} = event.target;
    setInput(prevInput =>{
      return {
        ...prevInput,
        [name]: value
      }
    })
  }
  


function handleClick(event) {
  event.preventDefault();
  console.log(input);
  
    
  }


return (
    <React.Fragment>
        <form action="action_page.php" style={{border:"1px solid #ccc"}}>
    <div className="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr/>
  
      <label for="email"><b>Email</b></label>
      <input type="text" autoComplete="off" placeholder="Enter Email" name="email" value={input.email} onChange={handleChange} required/>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" value={input.psw} onChange={handleChange} required/>
  
      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password"  placeholder="Repeat Password"  name="pswrepeat" value={input.pswrepeat} onChange={handleChange} required/>
  
      <label>
        <input onClick={handleClick} type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}}/> Remember me
      </label>
  
      <p>By creating an account you agree to our <a href="/" style={{color:"dodgerblue"}}>Terms Privacy</a>
      </p>
  
      <div class="clearfix">
        <button onClick={handleClick} type="button" class="cancelbtn">Cancel</button>
        <button onClick={handleClick} type="submit" class="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
  
  </React.Fragment>
  )
}
