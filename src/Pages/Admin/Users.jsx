
import React, { useEffect, useState } from 'react';
import config from "../../config.json";
import axios from 'axios';

//css
import style from "../../CSS/Users.module.css"

const Users = () => {
  const [users , setUsers] = useState([]);

  /*useEffect(()=>{
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${config.apiUrl}/api/auth/all-user`);
         if(res.data.success){
           setUsers(res.data.allUser)
         }
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers();

  },[])
  console.log(users);*/
  return (
    <>

     {users.length > 0 && users.map((user,index)=>{
       return <div key={index}>
            <div className={style.user}>
            <p className='name'>name: {user.name}</p>
            <p className='email'>email: {user.email}</p>
            <p className='phone'>phone: {user.phone}</p>
            <p className='pass'>pass: {user.password}</p>
            </div>
       </div>
     })} 
   
    </>
  )
}

export default Users