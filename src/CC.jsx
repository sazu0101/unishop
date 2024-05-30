import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from "./CSS/AdminCC.module.css"

const CC = () => {
  const state = useSelector((state)=>state.authentication)
/*  const location = useLocation();

  console.log(location.state.Cart);
  const {Cart} = location.state;
  console.log(Cart); */
  return (
    <>

  {state.role === 2 || state.role === 1 ? <>
  
   <table>
     <thead>
        <tr>
          <th colSpan={1}>order Id</th>
          <th  colSpan={1}>items</th>
          <th  colSpan={1}  > price</th>     
        </tr>
     </thead>
     <tbody>
     {/* <tr>
        <td className={styles.orderID} rowSpan={1}>12345679</td>
        <td rowSpan={1}> {Cart.map((cartPro,i)=>{
          return <div  key={i}> 
           <li>{cartPro.title}</li>
          </div>
   
         })}</td>

  <td rowSpan={1}> {Cart.map((cartPro,i)=>{
          return <div  key={i}> 
           <li>{cartPro.price}</li>
          </div>
   
         })}</td>

      </tr> */}

      <tr>
        <td>total</td>
      </tr>
     </tbody>
    </table>    
    
   
  </> :<><h2>wrong access</h2></>}

    </>
  ) 
}

export default CC