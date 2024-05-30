
import React, { useEffect, useState } from 'react';
import config from "../config.json"
import Dashboard from "../Dashboard/UserDashboard"
import Login from "../Authentication/Login"
import axios from 'axios';

import { useSelector } from 'react-redux';


const PrivateUserRouter = () => {
    const [ok ,setOk]= useState(true);
/*    const [Authentication] = useSelector((state)=> state.authentication);
  console.log(Authentication); */
   /*useEffect(()=>{

        const authCheck = async () => {
          try {
            const res = await axios.get(`${config.apiUrl}/api/v1/auth/userdashboard`)
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
        if(Authentication?.token) authCheck();
    },[Authentication?.token])
 */

  return ok ? <Dashboard /> : <Login />

}

export default PrivateUserRouter

