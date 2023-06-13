import "../Forgotpassword/Forgotpassword.css"

function Forgotpassword(){

return (
    
        
        <div class="ForgotPassword">                        
        <div class="section1">
            <div className="head_text"><h1>WELCOME TO<br/>
            <p>iCARE</p></h1>
            </div>
        </div>
        <div class=" section2">
            <h2>Forgot Password</h2>
            <div class="form-container">
                <form>
                  <div className="form-group">
                    
                    <input type="text" id="email" name="email" placeholder="Enter your email"/>
                    <button type="button" >Send OTP</button> 
                </div>
                  <div class="form-group">
                    
                    <input type="text" id="otp" name="otp" placeholder="Enter your OTP"/>
                  </div>
                  <div class="form-group">
                    <button type="button">Verify OTP</button>
                  </div>
                  <div class="register-link">
                    <button className="login_btn">Login</button>
                    
                  </div>
                </form>
            </div>
            
        </div>
    </div>
    
   
  

)
}
export default Forgotpassword