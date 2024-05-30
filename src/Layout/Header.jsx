import React,{useState,useEffect} from "react";

//Layout
import Menubar from "./Menubar";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

//css
import HeaderCSS from "../CSS/Header.module.css";

//component
import SearchBar from "../Component/SearchBar";
import HomePageCart_User from "../Component/HomePageCart_User";


const Header = () => {



  const [onScrollMenuBar , setOnSrollMenuBar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

 //if scroll in horizontal way then scroll will be true 
  const handleScroll = () => {
    if(scrollY > 500 || window.innerWidth < 1300){
      setScrolling(true)
    }else{
      setScrolling(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
        // Cleanup the event listener on component unmount
        return () => {
         window.removeEventListener('scroll', handleScroll);
       };
   },[]);


 //if window resize is more by 1300 then setScrolling will be true 
  const handleResize = () => {
    if(window.innerWidth < 1300){
      setScrolling(true)
    }else{
      setScrolling(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize',handleResize);
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
  })  



  const handleMenuBarClick = () => {
    setOnSrollMenuBar(false);
  };


  return (
    <>
      
      <div id={`${scrolling ? HeaderCSS.sticky : HeaderCSS.header}`}  >
         <div className={HeaderCSS.header_sections}>

        
      <div className={HeaderCSS.logo}>
          <a className={HeaderCSS.brand} href="/">SHOPEE</a>
          {scrolling && <div className={HeaderCSS.scrolling_menu} 
          onClick={()=>{setOnSrollMenuBar(!onScrollMenuBar)}} >
          {onScrollMenuBar ? <FontAwesomeIcon icon={faChevronUp} />  : 
          <FontAwesomeIcon icon={faChevronDown} /> } categories
            </div>}
        </div>
        
        {onScrollMenuBar && <Menubar  onScrollMenuBar={onScrollMenuBar} 
          onClickMenuBar={handleMenuBarClick} 
          onMouseLeave={()=>{setOnSrollMenuBar(!onScrollMenuBar)}}
          />}
   
       <SearchBar />

      <HomePageCart_User />
  </div>
      </div>

    </>
  );
};

export default Header;
