import React from 'react';


import "../CSS/SideFilters.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

const RatingFilter = () => {

  

  return (
    <>
 
   <div className={`filter_by_rating`}>
      <div className={`toggle_div`} onClick={()=>alert('the function will be update')}>
        <h5>Rating</h5>
        <FontAwesomeIcon  icon={faChevronDown} />
      </div>

      <div className={``}>
          
      </div>
   </div>

    </>
  )
}

export default RatingFilter