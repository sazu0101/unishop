import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (

      <div className="list-group">
        <NavLink
          to="/admin/dashboard/createcategory"
          className="list-group-item  list-group-item-action"
          aria-current="true"
        >
          create category
        </NavLink>
        <NavLink
          to="/admin/dashboard/createproduct"
          className="list-group-item  list-group-item-action"
        >
          create product
        </NavLink>
        <NavLink
          to="/admin/dashboard/products"
          className="list-group-item  list-group-item-action"
        >
         Products
        </NavLink>
        
        <NavLink
          to="/admin/dashboard/users"
          className="list-group-item  list-group-item-action"
        >
          All Users
        </NavLink>

      </div>
  );
};

export default AdminMenu;
