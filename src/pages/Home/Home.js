import "./Home.css"
import Header from "../../components/Header";
import {ReactComponent as EyeIcon }  from "../../logos/eye-icon.svg";
import {ReactComponent as Hosimg }  from "../../logos/hospital (2).svg";
import {ReactComponent as Optimg }  from "../../logos/opticals.svg";
import {ReactComponent as Recimg }  from "../../logos/medical-record.svg";
import Resources from "../../logos/Resources";
import { useNavigate } from "react-router-dom";
function  Home(){
  const navigate=useNavigate()
  const EyeiconClick=()=>{
    navigate('/eyetest')  }
    const ResiconClick=()=>{
      navigate('/restype')
    }
    const HosiconClick=()=>{
      navigate('/hospital')
    }
    const OpticonClick=()=>{
      navigate('/optical')
    }
    const MedrecClick=()=>{
      navigate('/medrec')
    }
  

return(
    <div className="home_ParentDiv">
      <div className="home_headerdiv">
        <Header></Header>
      </div>
    <div className="home_banner">
     <div className="home_weltext">
     <h1 className="h1">Welcome,User</h1>
     </div>
     <div className="content_boxes">
      <button className="eye_box" onClick={EyeiconClick}>
       <div className="eyeimg"><span ><EyeIcon/></span></div> 
        <div className="eyetest"><span>Eye Test</span></div>
        </button>
      <button className="res_box" onClick={ResiconClick}>
      <div className="resimg"><span ><Resources/></span></div> 
        <div className="resource"><span>Resources</span></div>
      </button>
      <button className="hos_box" onClick={HosiconClick}>
      <div className="hosimg"><span ><Hosimg></Hosimg></span></div> 
      <div className="hospital"><span>Hospitals</span></div>
      </button>
      <button className="opt_box" onClick={OpticonClick}>
      <div className="optimg"><span ><Optimg></Optimg></span></div> 
      <div className="optical"><span>Opticals</span></div>
      </button>
      
      <button className="rec_box" onClick={MedrecClick} >
      <div className="recimg"><span ><Recimg></Recimg></span></div> 
      <div className="record"><span>Medical Record</span></div>
      </button>
      

    
     </div>
     </div>
    </div>
    
  );
}

export default Home;