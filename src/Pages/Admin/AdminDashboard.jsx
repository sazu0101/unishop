import React from "react";

import { useSelector } from "react-redux";

import AdminProduct from "./AdminProducts";
import CreateProduct from "./CreateProduct";
import DeletProduct from "./DeleteProduct";
import Users from "./Users";

//css
import ".././../CSS/AdminDashboard.css"

const AdminDashboard = () => {
  
 const Authentication = useSelector((state)=> state.authentication)

  console.log(Authentication);
  return (
    <>
      {Authentication.role === 1 ? (
        <>
        <div className="admin-dashboard">
          <div className="nav-content">

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="adminproducts-tab" data-bs-toggle="tab" data-bs-target="#adminproducts-tab-pane" type="button" role="tab" aria-controls="adminproducts-tab-pane" aria-selected="true">Admin Products</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link " id="createproduct-tab" data-bs-toggle="tab" data-bs-target="#createproduct-tab-pane" type="button" role="tab" aria-controls="createproduct-tab-pane" aria-selected="true">create product</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link " id="deleteproduct-tab" data-bs-toggle="tab" data-bs-target="#deleteproduct-tab-pane" type="button" role="tab" aria-controls="deleteproduct-tab-pane" aria-selected="true">delete product</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link " id="alluser-tab" data-bs-toggle="tab" data-bs-target="#alluser-tab-pane" type="button" role="tab" aria-controls="alluser-tab-pane" aria-selected="true">all user</button>
              </li>


            </ul>
          </div>


          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="adminproducts-tab-pane" role="tabpanel" aria-labelledby="adminproducts-tab" tabIndex={0}>
              <AdminProduct />

            </div>

            <div className="tab-pane fade show " id="createproduct-tab-pane" role="tabpanel" aria-labelledby="createproduct-tab" tabIndex={0}>
              <CreateProduct />

            </div>

          

            <div className="tab-pane fade show " id="deleteproduct-tab-pane" role="tabpanel" aria-labelledby="deleteproduct-tab" tabIndex={0}>
              <DeletProduct />

            </div>
            
            <div className="tab-pane fade show " id="alluser-tab-pane" role="tabpanel" aria-labelledby="alluser-tab" tabIndex={0}>
              <Users />

            </div>
          </div>
          </div>

        </>
      ) : (
        <p>you are not admin</p>
      )}
    </>
  );
};

export default AdminDashboard;
