import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <>
  <div className="list-group">
        <NavLink
          to="/dashboard/profile"
          className="list-group-item  list-group-item-action"
          aria-current="true"
        >
            Profile
          
        </NavLink>
        <NavLink
          to="/dashboard/orders"
          className="list-group-item  list-group-item-action"
        >
          Orders
        </NavLink>

      </div>
    </>
  )
}

export default UserMenu