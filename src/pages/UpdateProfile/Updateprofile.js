import "../UpdateProfile/Updateprofile.css"
import Header from "../../components/Header"
import { ReactComponent as ProfileIcon } from "../../logos/profileicon.svg"
function Updateprofile(){
   

return(
    <div className="updpro_ParentDiv">
      <div className="headerdiv">
        <Header></Header>
      </div>
    <div className="updpro_banner">
   
        <div class="updpro_left-rectangle">
            <div className="icon_div">
          <span className="pro_icon"><ProfileIcon/></span>
          </div>
        </div>
        <div className="updpro_right-rectangle">
            <div className="update_pro">
              <p ><strong>First Name:</strong><input type="text" id="fname" name="first-name" required /></p><br/>
              <p ><strong>Last Name:</strong><input type="text" id="lname" name="last-name" required /></p><br/>
              <p><strong>Email:</strong><input type="email" id="email" name="email" required /></p><br/>
              <p><strong>Age:</strong><input type="number" id="age" name="age" required/></p><br/>
              <p><strong>Gender:</strong><select id="gender" name="gender" required><br/>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                 </select></p><br/>
             <p><strong>Password:</strong><input type="password" id="password" name="password" required/></p><br/>
            <button class="confirm_update" type="button">Update</button>
          </div>

        </div>
      </div>
      </div>
   
  
    
   
  

)
}
export default Updateprofile