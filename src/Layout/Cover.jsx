import React from "react";

//css
import"../CSS/Cover.css";

//Layout
import Menubar from "./Menubar";
import ImgSlider from "./ImgSlider";

const Cover = () => {
  return (
    <>
        <div id="cover">
        <Menubar />
        <ImgSlider />
        </div>

    </>
  );
};

export default Cover;
