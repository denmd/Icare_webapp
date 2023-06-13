
import "./Medicalrecord.css"
import Header from "../../components/Header";

function  Medicalrecord(){

return(
    <div className="medrec_ParentDiv">
      <div className="headerdiv">
        <Header></Header>
      </div>
    <div className="medrec_banner">
     <div className="welcometext">
     <h1 className="h1">Medical Records</h1>

     </div>
     <div className="medrec_boxes">
        <div className="medrec_box_1">
            <div className="dec_box">
            <h2 className="date">Date</h2>
            <h2 className="test">Test Result 1</h2>
            <h2 className="symptoms">Symptoms</h2>
            <h2 className="result">Result</h2>
            </div>
        </div>
        <div className="medrec_box_2">
            <div className="dec_box">
            <h2 className="date">Date</h2>
            <h2 className="test">Test Result 1</h2>
            <h2 className="symptoms">Symptoms</h2>
            <h2 className="result">Result</h2>
            </div>
            
        </div>
        <div className="medrec_box_3">
            <div className="dec_box">
            <h2 className="date">Date</h2>
            <h2 className="test">Test Result 1</h2>
            <h2 className="symptoms">Symptoms</h2>
            <h2 className="result">Result</h2>
            </div>
            
        </div>
      
      

    
     </div>
     </div>
    </div>
    
  );
}

export default  Medicalrecord; 

