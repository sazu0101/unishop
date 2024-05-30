import React, { useState } from 'react';
import {useLocation} from "react-router-dom"
import axios from 'axios';
import config from "../../config.json"
//css
import "../../CSS/UpdateProduct.css"

const UpdateProduct = () => {

 const location = useLocation();
 
 const {item} = location.state



 
  const [_id, setId] = useState(item._id);
  const [category, setCategory] = useState(item.category);
  const [subcategory, setSubCategory] = useState(item.subcategory);
  const [title, setTitle] = useState(item.title);
  const [specification_property, setSpecification_property] = useState(item.specification_property);
  const [specification_value,setSpecification_value] = useState(item.specification_value)
  const [price, setPrice] = useState(item.price);
  const [brand, setBrand] = useState(item.brand);
  const [quantity, setQuantity] = useState(item.quantity);
  const [model , setModel] = useState(item.model);


  const handleUpdateProduct = async () => {
    try {
      // Create an object with the updated product data
      const updatedProductData = {
        category,
        subcategory,
        title,
        specification_property,
        specification_value,
        price,
        brand,
        quantity,
        model
      };

      // Make an HTTP request to your backend route to update the product
      const response = await axios.put(`${config.apiUrl}/api/product/update-product/${_id}`, updatedProductData);

      if (response.status === 201) {
        // Handle a successful update (you can show a success message or redirect)
        alert("Product updated successfully");
      } else {
        // Handle errors if the update was not successful
        console.error("Product update failed");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };



  return (

    <>
    <section id='update-product'>

      <div className='id-div'>
        <input type="text" placeholder='write product id' 
        onChange={(e) => setId(e.target.value)}
        value={_id} required
        />
      </div>


      <div className='category-div'>
      <input type="text" placeholder='write category' 
      onChange={(e) => setCategory(e.target.value)} 
      value={category} required />

      </div>

      <div className='subcategory-div'>
        <input type="text" placeholder='write subcategory' 
        onChange={(e) => setSubCategory(e.target.value)} value={subcategory}  required/>
      </div>

      <div className='brand-div'>
        <input type="text" placeholder='write brand' 
        onChange={(e) => setBrand(e.target.value)} value={brand} required />
      </div>

      <div className='model-div'>
        <input type="text" placeholder='write model' 
        onChange={(e) => setModel(e.target.value)} value={model} />
      </div>

      <div className='title-div'>
        <input type="text" placeholder='write title' 
        onChange={(e) => setTitle(e.target.value)} value={title} required />
      </div>

      <div className='specification_property-div'>
        <textarea type="text" placeholder='write specification_property' style={{width:'500px',height:'100px'}}
        onChange={(e) => setSpecification_property(e.target.value)} value={specification_property} required />
      </div>

      <div className='specification_value-div'>
        <textarea type="text" placeholder='write specification_property' style={{width:'500px',height:'100px'}}
        onChange={(e) => setSpecification_value(e.target.value)} value={specification_value} required />
      </div>


      <div className='price-div'>
        <input type="number" placeholder='write price' 
        onChange={(e) => setPrice(e.target.value)} value={price} required />
      </div>

      <div className='quantity-div'>
        <input type="number" placeholder='write quantity' 
        onChange={(e) => setQuantity(e.target.value)} value={quantity} required />
      </div>

      <div className='update-btn'>
        <button onClick={handleUpdateProduct} >update</button>
      </div>
      </section>
    </>

  )
}

export default UpdateProduct