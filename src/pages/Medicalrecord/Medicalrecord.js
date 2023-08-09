
import "./Medicalrecord.css"
import Header from "../../components/Header";
import { useState,useEffect } from "react";
import axios from "axios";

function  Medicalrecord(){
  const [medicalRecords, setMedicalRecords] = useState([]);

  useEffect(() => {
    fetchMedicalRecords();
  }, []);

  const fetchMedicalRecords = async () => {
    try {
      const response = await axios.get("http://localhost:5000/medical-records"); // Adjust the URL to match your backend endpoint
      setMedicalRecords(response.data);
    } catch (error) {
      console.error("Error fetching medical records:", error);
    }
  };
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
            <h2 className="date">Date:07-06-2023</h2>
            <h2 className="test">Test Result 1</h2>
            <h2 className="symptoms">Symptoms: Redness, Pain, Watering eyes</h2>
            <h2 className="result">Result: May have conjuntivites. Consult a doctor for further examinaions</h2>
            </div>
        </div>
        <div className="medrec_box_2">
            <div className="dec_box">
            <h2 className="date">Date:11-07-2023</h2>
            <h2 className="test">Test Result 2</h2>
            <h2 className="symptoms">Symptoms: Redness</h2>
            <h2 className="result">Result: Your eyes are not affected with conjuntivites or cataract  . Consult a doctor for further examinaions</h2>
            </div>
            
        </div>
        <div className="medrec_box_3">
            <div className="dec_box">
            <h2 className="date">Date</h2>
            <h2 className="test">Test Result 1</h2>
            <h2 className="symptoms">Symptoms: Redness, Pain, Watering eyes</h2>
            <h2 className="result">Result: May have conjuntivites. Consult a doctor for further examinaions</h2>
            </div>
            
        </div>
      
      

    
     </div>
     </div>
    </div>
    
  );
}

export default  Medicalrecord; 

