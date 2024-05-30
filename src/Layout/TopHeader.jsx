import React from 'react'
import { Link } from 'react-router-dom'

//global hook


//css
import TopHeaderCSS from "../CSS/TopHeader.module.css";


const TopHeader = () => {
 



  return (
    <>
  <section id={TopHeaderCSS.topheader}>

   <div className={TopHeaderCSS.topheader_rightside}>
   <Link to="/" >CUSTOMER CARE</Link> 
    <Link to="/" >TRACK MY ORDER</Link> 

   </div>
    




  


  </section>
    </>
  )
}

export default TopHeader