import "../Myprofile/Myprofile.css"
import Header from "../../components/Header"
import { ReactComponent as ProfileIcon } from "../../logos/profileicon.svg"
import { useNavigate } from "react-router-dom"
function Myprofile(){
   const navigate=useNavigate()
   const Directupdprofile=()=>{
    navigate('/updateprofile')
   }

return(
    <div className="profile_ParentDiv">
      <div className="headerdiv">
        <Header></Header>
      </div>
    <div className="profile_banner">
   
        <div class="pro_left-rectangle">
            <div className="icon_div">
          <span className="pro_icon"><ProfileIcon/></span>
          </div>
        </div>
        <div class="pro_right-rectangle">
            <div class="profile_display">
              <p ><strong>Full Name:</strong> Barry Alen</p>
              <p><strong>Email:</strong>BarryAllen@gmail.com</p>
              <p><strong>Age:</strong> 27</p>
              <p><strong>Gender:</strong>Male</p>
            </div>
            <button class="update-button" type="button" onClick={Directupdprofile}>Update Profile</button>
          </div>

        </div>
      </div>
   
  
    
   
  

)
}
export default Myprofile
