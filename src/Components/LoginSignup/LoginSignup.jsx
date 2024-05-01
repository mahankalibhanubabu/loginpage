import React, { useState } from 'react'
import './LoginSignup.css';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

   const[action,setAction]= useState("Login"); 
   const loginwithgoogle = ()=>{
    window.open("http://localhost:6005/auth/google/callback","_self")
}

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email Id" placeholder='Email Id' />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password"placeholder='Password' />
            </div>
            <div className="input">
            <img src={user_icon} alt="" />
            <input type="password"placeholder='User' />
          <select className="form-select" name="occupation" >
          <option value="co">Choose One</option>
            <option value="student">Student</option>
            <option value="employee">Instructor</option>
          </select>
        </div>
            
        </div>
        {action ==="Sign Up"?<div></div>:<div className="two-col"><label htmlFor="login-check"><input type="checkbox" />Remember Me</label></div>}
        {action ==="Sign Up"?<div></div>:<div className="forgot-password">Forgot password? <span>Click Here!</span></div>}
        {action ==="Sign Up"?<div></div>:<div className='message'>Not Registerd? <a href="#">Create an account</a></div>}
        <button className='login-with-google-btn' onClick={loginwithgoogle}>
            Sign In With Google
        </button>
        <div className="submit-container">``
            <button className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
            <button className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</button>
            
        </div>
        
    </div>
  )
}

export default LoginSignup