import "../Hospitals/Hospital.css"
import Header from "../../components/Header";
import {ReactComponent as Location}  from "../../logos/location.svg";
import {ReactComponent as Pharmacyicon}  from "../../logos/pharmacy.svg";
import {ReactComponent as Phoneicon}  from "../../logos/phone.svg";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


mapboxgl.accessToken = 'pk.eyJ1IjoiZGVubWQiLCJhIjoiY2xqYWJucXc1MDl5NTNqdWlqejZzczQxaiJ9.cv5TdfWag9Sb0zKBWIUAag'
function  Hospital(){
  

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
        <form >
        <input
          className="location_detail"
          type="text"
          placeholder="Enter place name"
  
        />
        <button type="submit">Search</button>
      </form>
         </div>
         <div className="main_hos_box">
            <div className="subhos_box_1">
            <div className="lefthos_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="hos_name">DR. Agarwal Eye Hospital</span>
            </div>
            <div className="address_phone">
            <span className="hos_details"><Location></Location>Sastri Rd, Kottayam</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>9998788</span>
            </div>
            </div>
            <div className="righthos_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="hos_name">DR. Agarwal Eye Hospital</span>
            </div>
            <div className="address_phone">
            <span className="hos_details"><Location></Location>Sastri Rd, Kottayam</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>9998788</span>
            </div>
            </div>
            </div>
            <div className="subhos_box_2">
            <div className="lefthos_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="hos_name">DR. Agarwal Eye Hospital</span>
            </div>
            <div className="address_phone">
            <span className="hos_details"><Location></Location>Sastri Rd, Kottayam</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>9998788</span>
            </div>
            </div>
            <div className="righthos_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="hos_name">DR. Agarwal Eye Hospital</span>
            </div>
            <div className="address_phone">
            <span className="hos_details"><Location></Location>Sastri Rd, Kottayam</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>9998788</span>
            </div>
            </div>
            </div>

         </div>
         </div>
        </div>

      );
    }
    
    export default Hospital;