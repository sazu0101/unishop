import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//provider
import { Provider } from "react-redux";
//store
import store from "./store";
//css
import "./CSS/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store} >
      <App />
    </Provider>
  </>
);
