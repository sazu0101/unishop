
import React, { useEffect, useState } from 'react';
import config from "../config.json"
import AdminDashboard from "../Pages/Admin/AdminDashboard"
import Login from "../Authentication/Login";
import axios from 'axios';



const PrivateAdminRouter = () => {
    const [ok ,setOk]= useState(true);


  /*  useEffect(()=>{

        const authCheck = async () => {
          try {
            const res = await axios.get(`${config.apiUrl}/api/v1/auth/admindashboard`)
            if(res.data.ok){
              setOk(true)
            }else{
              setOk(false)
            }
          } catch (error) {
            console.log('Error fetching profile:', error);
            setOk(false);
          }
 
        }
        if(state?.token) authCheck();
    },[state?.token])*/


  return ok ? <AdminDashboard /> : <Login />

}

export default PrivateAdminRouter

