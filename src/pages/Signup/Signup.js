import "../Signup/Signup.css"
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"



function Signup(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      age: age,
      first_name: firstName,
      last_name: lastName,
      gender:gender
    };
    
   
    try {
      const response = await axios.post('http://localhost:5000/auth/signup', data);
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
    }
  };

return(
    <div className="main-body">
       <div class="signup">
        <div class="signup_section">
            <div className="signup_head">
            <h1>WELCOME TO</h1>
            <br/>
            <p>iCARE</p>
            </div>
        </div>
        <div class="signup_inp_section">
        <h2>Create Account</h2>
      <div className="form_div">  
    <form onSubmit={handleSubmit}>
    <div className="name_div">
      <label for="first-name">First Name:</label>
      <input type="text" id="first-name" name="first-name"  value={firstName}
        onChange={(e) => setFirstName(e.target.value)} required />
      <label for="last-name">Last Name:</label>
      <input type="text" id="last-name"  name="last-name" value={lastName}
        onChange={(e) => setLastName(e.target.value)} required   />
    </div>
    <div className="gen_age">
      <label for="gender">Gender:</label>
      <select id="gender"  placeholder="select" name="gender"  value={gender} onChange={(e) => setGender(e.target.value)} required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" required  value={age}
        onChange={(e) => setAge(e.target.value)} />
    </div>
    <div className="ema_pass" >
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required  value={password}
        onChange={(e) => setPassword(e.target.value)} />
    </div>
   <div  className="create-btn"> 
   <button type="submit">Create Account</button>
   </div>
</form>
</div> 
</div>  
</div>
</div>
   
  

)
}
export default Signup