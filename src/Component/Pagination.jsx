import React from 'react';
//css
import "../CSS/Pagination.css"

const Pagination = ({Products}) => {
  

  return (
    <>
    {Products !== undefined ? <div className="pagination">
            <p to='' >{Products.category}</p>
          </div> : ""  }
     
    </>
  )
}

export default Pagination