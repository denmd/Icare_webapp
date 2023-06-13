import "../Signup/Signup.css"

function Signup(){

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
    <form>
    <div className="name_div">
      <label for="first-name">First Name:</label>
      <input type="text" id="first-name" name="first-name" required />
      <label for="last-name">Last Name:</label>
      <input type="text" id="last-name"  name="last-name" required />
    </div>
    <div className="gen_age">
      <label for="gender">Gender:</label>
      <select id="gender"  placeholder="select" name="gender" required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" required />
    </div>
    <div className="ema_pass" >
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required/>
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