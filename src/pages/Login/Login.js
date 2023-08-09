import "../Login/Login.css"
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import axios from 'axios';

function Login(){
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const datas = {
        email: email,
        password: password
      };
      try {
        const response = await axios.post('http://localhost:5000/auth/login', datas);
        navigate('/home');
      } catch (error) {
        console.error('Error:', error);
      }
    };
  const CreateSubmit=()=>{
    navigate('/signup');
  }
return(
    <div className="main-body">
        
        <div className=" login_section1">

            <div className="welc_text">
                 <h1>WELCOME TO </h1>
            <br/><p> iCARE</p></div>
           
          
        </div>
        <div className=" login_section2">
            <h2 className="login_txt">Log in</h2>
            <div className="form-container">

                
                <form className="form" onSubmit={handleSubmit} >

                 <div className="email">
                    <label  for="email" >Email:</label><br/>
                    <input  type="text" id="email" name="email" placeholder="Enter your email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
              <div className="password">
                    <label  for="password">Password:</label><br/>
                    <input type="password" id="password" name="password" placeholder="Enter your password"  value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/><br/>
                    </div>
                    <button  className ="login_btn" type="submit">Log In</button>
          
                  <div className="register-link">
                    <p>Don't have an account? </p>
                    <buttotn onClick={CreateSubmit}>Create Account</buttotn>
                  </div>
                </form>
            </div>
        
        </div>
    </div>
   
  

)
}
export default Login