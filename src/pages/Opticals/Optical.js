import "../Opticals/Optical.css"
import Header from "../../components/Header";
import {ReactComponent as Location}  from "../../logos/location.svg";
import {ReactComponent as Pharmacyicon}  from "../../logos/pharmacy.svg";
import {ReactComponent as Phoneicon}  from "../../logos/phone.svg";
import axios from "axios";
import { useState} from "react";

function  Optical(){
  const [place, setPlace] = useState('');
  const [opticals, setOpticals] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    getOpticals();
  };
  const getOpticals = () => {
    axios
      .get(`http://localhost:5000/auth/optical_details?Place=${place}`)
      .then(response => {
        console.log(response.data);
        setOpticals(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

    return(
        <div className="optical_ParentDiv">
          <div className="headerdiv">
            <Header></Header>
          </div>
        <div className="optical_banner">
         <div className="headline">
         <h1 className="h1">Nearby Optical Shops</h1>
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
        <button className="search" type="submit">Search</button>
      </form>
         </div>
         <div className="main_opt__box">
            <div className="sub_box_1">
            {opticals.length === 0 ? (
            <div className="no_results">No results found !</div>
          ) :(
            <>
          {opticals.slice(0, opticals.length / 2).map((opticals, index) => (
            <div className="left_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="opt_name">{opticals.Opticals_Name}</span>
            </div>
            <div className="address_phone">
            <span className="opt_details"><Location></Location>{opticals.Address}</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>{opticals.PhoneNo}</span>
            </div>
            </div>
             ))}
             {opticals.slice(opticals.length / 2).map((opticals, index) => (
            <div className="right_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="opt_name">{opticals.Opticals_Name}</span>
            </div>
            <div className="address_phone">
            <span className="opt_details"><Location></Location>{opticals.Address}</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>{opticals.PhoneNo}</span>
            </div>
            </div>
             ))}
              </>
               )}
            </div>
         
            

         </div>
         </div>
        </div>
        
      );
    }
    
    export default Optical;