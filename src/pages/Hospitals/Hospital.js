import "../Hospitals/Hospital.css"
import Header from "../../components/Header";
import {ReactComponent as Location}  from "../../logos/location.svg";
import {ReactComponent as Pharmacyicon}  from "../../logos/pharmacy.svg";
import {ReactComponent as Phoneicon}  from "../../logos/phone.svg";
import { useState,useEffect } from "react";
import axios from "axios";

function  Hospital(){
  const [place, setPlace] = useState('');
  const [hospitals, setHospitals] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    getHospitals();
  };
  const getHospitals = () => {
    axios
      .get(`http://localhost:5000/auth/hospital_details?Place=${place}`)
      .then(response => {
        console.log(response.data);
        setHospitals(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
   return(
        <div className="hospital_ParentDiv">
          <div className="headerdiv">
            <Header></Header>
          </div>
        <div className="hospital_banner">
         <div className="headline">
          
         <h1 className="h1">Nearby Hospitals</h1>
         </div>
         <div className="location">
            <span className="location_icon"><Location></Location></span>
        <form onSubmit={handleSubmit}>
        <input
          className="location_detail"
          type="text"
          placeholder="Enter place name"  
          value={place} 
          onChange={(e) => setPlace(e.target.value)}
  
        />
        <button className="search" type="submit"  onClick={getHospitals}>Search</button>
      </form>
         </div>
         <div className="main_hos_box">

            <div className="subhos_box_1">
            {hospitals.slice(0, hospitals.length / 2).map((hospital, index) => (
            <div className="lefthos_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="hos_name">{hospital.Hospital_name}</span>
            </div>
            <div className="address_phone">
            <span className="hos_details"><Location></Location>{hospital.Address}</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>8{hospital.PhoneNo}</span>
            </div>
            </div>
          ))}
           {hospitals.slice(hospitals.length / 2).map((hospital, index) => (
            <div className="righthos_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="hos_name">{hospital.Hospital_name}</span>
            </div>
            <div className="address_phone">
            <span className="hos_details"><Location></Location>{hospital.Address}</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>{hospital.PhoneNo}</span>
            </div>
            </div>
             ))}
            </div>
            

         </div>
         </div>
        </div>

      );
    }
    
    export default Hospital;