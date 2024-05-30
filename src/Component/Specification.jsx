import React from 'react'

//css
import "../CSS/specification.css"


const Specification = ({value,property}) => {


  return (
    <>
  <section id='specification'>
   <h2 className='specification-title'>Specification</h2>
   <table>
      <tbody>
         {property !== undefined && property.map((pro, i) => {
            // Access the corresponding value from the `value` array
            const v = value !== undefined && value[i];
            return (
               <tr key={i}  > 
                  <td  className='property'>{pro}</td>
                  <td  className='value'>{v}</td>
               </tr>
            );
         })}
      </tbody>
   </table>
</section>

    </>
  )
}

export default Specification