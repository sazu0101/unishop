import React, { useEffect } from "react";

//css
import "./CSS/App.css";

import Router from "./Router/Router.jsx";

//
import { useSelector , useDispatch } from "react-redux";
import {FetchAllProduct} from "./Redux/FetchAllProduct.jsx";
import {Fetch_Computer_Items} from "./Redux/Fetch_Computer_Items.jsx";

function App() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
       dispatch(FetchAllProduct())
       dispatch(Fetch_Computer_Items())
     },[])
     
  return (
    <>
      <Router />
    </>
  );
}

export default App;
