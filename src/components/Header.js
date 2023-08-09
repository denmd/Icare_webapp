import "../components/Header.css"
import Logout from "../logos/Logout";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function  Header(){
const navigate=useNavigate()
const DirectHome=()=>{
  navigate('/home')
}
const Directprofile=()=>{
  navigate('/profile')
}
const handleLogout = async () => {
 navigate("/login")
  }

return(
    <div className="headermaindiv">
      <div className="headersubdiv">
        <div className="appName">
          <h1>ICARE</h1>
        </div>
       
       <div className="header_content_div">
        <div className="direct_home">
          <span onClick={DirectHome}> Home </span>
          
        </div>
        <div className="direct_profile_page">
          
          <span><button className='profile_btn'  onClick={Directprofile}>My profile</button></span>
         

        </div>
           <button className='direct_logout'onClick={handleLogout} >
            <span><Logout></Logout></span>
            <span className="text"> Logout</span>
            </button>
        
        </div>
      </div>
    </div>
  );
}

export default Header;