import React from "react";

//packages
import { Link } from "react-router-dom";

//componet
import BrandFilter from "./BrandFilter";
import RatingFilter from "./RatingFilter";

//icon
import { IoFilterSharp } from "react-icons/io5";

//css
import "../CSS/Filter_Offcanvas.css"

const Filter_Offcanvas = ({ products }) => {
  return (
    <>
      <button
        className="filter_btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      > <IoFilterSharp /> Filter </button>

      <div
        className="offcanvas offcanvas-end  m-0"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header m-0">
          <Link to={`/`} className="offcanvas-title text-decoration-none text-dark" id="offcanvasRightLabel">
            A-Z.com
          </Link>
          <button
            type="button"
            className="btn-close user-select-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas_filter">
            <BrandFilter products={products} />
            <RatingFilter />
          </div>

        </div>
      </div>

    </>
  );
};

export default Filter_Offcanvas;
