import React from 'react'
import config from ".././config.json"

const Images = ({id}) => {

  return (
    <>
    <div className="Images">
    <img className='img-fluid' src={`${config.apiUrl}/api/product/product-photo/${id}`} alt="" />
    <div className='thumbnails'>
      <img onClick={()=>alert('feauter will added')} className='thumb-img' src={`${config.apiUrl}/api/product/product-photo/${id}`} alt=""/>

    </div>
    </div>
    

    </>
  )
}

export default Images