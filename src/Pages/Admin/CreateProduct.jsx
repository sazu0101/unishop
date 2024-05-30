import React, { useState } from "react";
import axios from "axios";
import config from "../../config.json";

//categories
import { categories } from "../../Component/Categories";

const CreateProduct = () => {
  //All states of this page
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [model, setModel] = useState("");
  const [specification_property,setSpecification_property] = useState("");
  const [specification_value,setSpecification_value] = useState("")
  const [Category_Wise_Subcategory, setCategory_Wise_Subcategory] =useState("");

  //post api function for create product
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("title", title);
      productData.append("specification_property", specification_property);
      productData.append("specification_value", specification_value);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      productData.append("subcategory", subcategory);
      productData.append("brand", brand);
      productData.append("model", model);
      const { data } = await axios.post(
        `${config.apiUrl}/api/product/create-product`,
        productData
      );
      if (data?.success) {
        alert("product is creatd");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //handleCategory fun for set value of category and category_wise_subcategory
  const handleCategory = (e) => {
    setCategory(e.target.value);
    setCategory_Wise_Subcategory(e.target.value);
  };


 console.log(subcategory);
  return (
    <>
      <div className="mt-3">
        <label className="btn btn-outline-secondary col-md-12">
          {photo ? photo.name : "upload photo"}
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            hidden
          />
        </label>
      </div>

      <div className="mt-3">
        {photo && (
          <div>
            <img
              src={URL.createObjectURL(photo)}
              alt=""
              className="img-fluid"
            />
          </div>
        )}
      </div>

      <select
        className="w-100 mt-3 p-2"
        name=""
        id=""
        onChange={handleCategory}
      >
        {Object.keys(categories).map((c, i) => {
          return (
            <option key={i} value={c}>
              {c}
            </option>
          );
        })}
      </select>

      <select
        className="w-100 p-2 mt-3"
        name=""
        id=""
        onChange={(e) => {
          setSubCategory(e.target.value);
        }}
        required
      >
        {categories[Category_Wise_Subcategory] !== undefined &&
          categories[Category_Wise_Subcategory].map((subc, i) => {
            return (
              <option key={i} value={subc}>
                {subc}
              </option>
            );
          })}
      </select>

      
      <div className="mt-3">
        <input
          type="text"
          value={title}
          placeholder="write a title"
          className="form-control w-100"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      
      <div className="mt-3">
        <input
          type="text"
          value={model}
          placeholder="write a model"
          className="form-control w-100"
          onChange={(e) => setModel(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <input
          type="text"
          value={brand}
          placeholder="write a brand"
          className="form-control w-100"
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>


      <div className="mt-3 ">
        <textarea 

          type="text"
          value={specification_property}
          placeholder="write specifications"
          className="form-control w-100"
          onChange={(e) => setSpecification_property(e.target.value)}
        />
      </div>

      
      <div className="mt-3 ">
        <textarea
          type="text"
          value={specification_value}
          placeholder="write specification value"
          className="form-control w-100"
          onChange={(e) => setSpecification_value(e.target.value)}
        />
      </div>


      <div className="mt-3">
        <input
          type="number"
          value={price}
          placeholder="write a price"
          className="form-control w-100"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <input
          type="number"
          value={quantity}
          placeholder="write a quantity"
          className="form-control w-100"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <button className="btn btn-primary" onClick={handleCreateProduct}>
          CREATE PRODUCT
        </button>
      </div>
    </>
  );
};

export default CreateProduct;
