import React,{useState} from 'react';


import "../CSS/SideFilters.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';

//actions
import { LowestPriceProduct,HighestPriceProduct } from '../Redux/FilterProduct';

const PriceFilter = ({products}) => {

  
  const [showPrice, setPrice] = useState(false);
  const [PriceValue , setPriceValue] = useState();
  const [lowestTohighestChecked , setlowestTohighestChecked] = useState(false);
  const [highestToLowestChecked, sethighestTolowestChecked] = useState(false);
  
  const dispatch= useDispatch();
  const handlePrice = (e) => {
   if(e.target.value === "lowest-highest" && e.target.checked === true ){
    setlowestTohighestChecked(true)
    sethighestTolowestChecked(false);
    dispatch(LowestPriceProduct(products))
   }
   if(e.target.value === "highest-lowest"  && e.target.checked === true ){
    sethighestTolowestChecked(true)
    setlowestTohighestChecked(false)
    dispatch(HighestPriceProduct(products))
   }
  }

  return (
    <>
          <div className={`filter_by_price ${
            showPrice && `${`price_collapse`}`
          }`}  >

        <div className={SideFilterCSS.toggle_div}>
        <h5>Price</h5>
        {showPrice ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                onClick={() => {
                  setPrice(!showPrice);
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => {
                  setPrice(!showPrice);
                }}
              />
            )}
        </div>


        <div className={SideFilterCSS.lowest}>
        <input type="checkbox" value='lowest-highest' checked={lowestTohighestChecked} onChange={(e)=>{handlePrice(e)}}  />
        <label>lowest-highest</label>
        </div>

        
        <div className={SideFilterCSS.highest}> 
          <input type="checkbox" value='highest-lowest' checked={highestToLowestChecked}  onChange={(e)=>{handlePrice(e)}} />
          <label htmlFor="">highest-lowest</label>
        </div>

      </div>

    </>
  )
}

export default PriceFilter