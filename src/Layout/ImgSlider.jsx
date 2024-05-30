import React from "react";

//packages
import {Link} from "react-router-dom"

//css
import "../CSS/Imgslider.css";

//icons
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"

const Imgslidersr = () => {
  return (
    <>
  

<div id="carouselExampleFade" className="carousel slide carousel-fade ">
  <div className="carousel-inner">

    <div className="carousel-item active">
    <Link to={`/`}>
      <img src="cover4.png" className="img-fluid" alt="..." />
      </Link>
    </div>

    <div className="carousel-item">
    <Link to={`/`}>
      <img src="cover3.png " className="img-fluid" alt="..." />
      </Link>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <IoIosArrowBack className="carouselprev-icon" aria-hidden="true" />
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <IoIosArrowForward className="carouselnext-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



    </>
  );
};

export default Imgslidersr;
