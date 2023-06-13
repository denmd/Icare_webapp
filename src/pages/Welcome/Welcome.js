import "../Welcome/Welcome.css"
import { useNavigate } from 'react-router-dom';

function Welcome(){
    const Navigate=useNavigate()
    const HandleClick = () => {
        Navigate('/login');
      };

return(
    <div className="main-body">
    <div className="center" id="cntr">
       <div className="main-head">
        <h1 className="H1">Welcome to _ _ _ _</h1>
        <h2 className="H2">Your personal eye care companion</h2>
        </div>  
        <div className="welcome_btn">

            <button className="getstarted_btn" onClick={HandleClick}>Get Started ➜</button>
        </div>
  </div>
   
    </div>

)
}
export default Welcome;