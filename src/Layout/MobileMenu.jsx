import React,{useState} from "react";

import { Link, NavLink } from "react-router-dom";

//icons
import { IoIosArrowForward } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faMobileScreen,
  faHeadphones,
  faWifi,
  faClock,
  faLaptop,
  faVolumeHigh,
  faBook,
  faHouse,
  faPlugCircleBolt,
  faCircle,
  faGift,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";


//css
import "../CSS/MobileMenu.css"

//component
import {categories} from "../Component/Categories"


const MobileMenu = () => {



  //create an array of icon 
  const iconArr = [
    faLaptop,
    faMobileScreen,
    faHeadphones,
    faClock,
    faWifi,
    faLightbulb,
    faHouse,
    faPlugCircleBolt,
    faVolumeHigh,
    faBook,
    faCircle,
    faGift,]


    


  return (
     <>


    <div className="">
    {Object.keys(categories).map((category,i)=>{
          return <React.Fragment key={i}>
          <li className="w-auto py-1 px-3 m-1 bg-white d-flex justify-content-between align-items-center " data-bs-toggle='dropdown' >
          <Link className="mobile_menu_para" >{category}</Link> 
          <FontAwesomeIcon className="dropdown-toggle" icon={faChevronDown} style={{cursor:'pointer'}}/>
        </li>
        <ul className="dropdown-menu w-100  ">
          {categories[category].map((subc,i)=>{
            return <li key={i} className="nav-item">
            <Link to={`/${category}/${subc}`} className="dropdown-item">{subc}</Link>
           </li>
          }) }
        </ul>
        </React.Fragment>
    })}


    </div>
     </>
  );
};

export default MobileMenu;