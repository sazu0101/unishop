import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//css
import "../CSS/Menubar.css";

//component
import { categories } from "../Component/Categories";

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
} from "@fortawesome/free-solid-svg-icons";

const Menubar = ({ onScrollMenuBar, onClickMenuBar }) => {
  //Make the array of icons
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
    faGift,
  ];

  //declare a state and store icon array
  const [isHovered, setIsHovered] = useState({
    computer: false,
    mobile: false,
    headohone: false,
    smart_watch: false,
    routers: false,
    light_lamp: false,
    home_appliances: false,
    trimmer_shaver: false,
    microphone: false,
    books: false,
    other: false,
    gifts: false,
  });

  //set the single value as true when the mouseover
  const handleMouseOver = (i) => {
    setIsHovered((prev) => ({
      ...prev,
      [i]: true,
    }));
  };

  //set the  value as false after mouseleave
  const handleMouseLeave = (i) => {
    setIsHovered((prev) => ({
      ...prev,
      [i]: false,
    }));
  };

  return (
    <>
      <div
        className={`${onScrollMenuBar == undefined ? "menubar" : "scroll"} `}
        onClick={onClickMenuBar}>
          
        <div className={`side_nav`}>
          <ul>
            {Object.keys(categories).map((category, i) => {
              // replace the underline with space
              let category_Withouth_UnderSquare = category.replace(/_/g, " ");

              return (
                <li
                  key={i}
                  onMouseOver={() => {
                    handleMouseOver(i);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave(i);
                  }}
                >
                  <NavLink to={`/${category}`}>
                    <FontAwesomeIcon
                      icon={iconArr[i]}
                      className={`menu_icon`}
                    />
                    {category_Withouth_UnderSquare}{" "}
                    {isHovered[i] && <IoIosArrowForward className={`arrow`} />}
                  </NavLink>
                  <ul className={`dropdown`}>
                    {categories[category].map((subcategory) => {
                      // replace the underline with space
                      let subcategory_Withouth_Undersquare =
                        subcategory.replace(/_/g, " ");

                      return (
                        <li key={subcategory}>
                        
                          <NavLink to={`/${category}/${subcategory}`}>
                            {subcategory_Withouth_Undersquare}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menubar;
