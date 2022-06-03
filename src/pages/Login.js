import React from 'react'

export default function Login() {

  function handleChange(event) {
    console.log(event.target);
    
  }


  return (

   
    
  <React.Fragment>
        <form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png/" alt="" className="avatar"/>
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text"  autoComplete="off" placeholder="Enter Username"  name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password"  name="psw" required/>

    <button type="submit">Login</button>
    <label>
      <input onChange={handleChange} type="checkbox" checked="checked" autoComplete="off" name="remember"/> Remember me
    </label>
  </div>

  <div class="container" style={{backgroundColor:"#f1f1f1"}}>
    <button type="button" OnClick={"handleClick"} class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="/">password?</a></span>
  </div>
</form>
    </React.Fragment>
  )
}
