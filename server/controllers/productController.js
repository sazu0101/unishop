
import productModel from "../models/productModel.js";
import slugify from "slugify";
import fs from "fs"

/*const fs = require("fs");*/


const createProductController = async (req, res) => {
  try {
    const { title, description, price, category,subcategory, quantity ,brand } = req.body;

    // ... Your validation code

    const slug = slugify(title);

    const product = new productModel({ title, description, price, category, subcategory, quantity,brand,slug  });

    if (req.file) {
      product.photo.data = req.file.buffer;
      product.photo.contentType = req.file.mimetype;
    }

    await product.save();

    res.status(201).send({
      success: true,
      message: "Product is created",
      product,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error in createProductController",
      error: error.message,
    });
  }
};



const getProductController = async(req,res)=>{

  try {
    const products = await productModel.find(req.query).select('-photo').populate('category');
    res.status(201).send({
      success : true,
      message : 'all products',
      products
    })
  } catch (error) {
    res.status(500).send({
     message : "error in getProductController",
     error : error.message
    })
 }

}

const getSingleProductController = async(req,res)=>{

   try {
     const singleProduct = await productModel.findOne({slug : req.params.slug}).select('-photo')
     res.status(200).send({
      success : true,
      message : "single product",
      singleProduct
     })
   } catch (error) {
    res.status(500).send({
     message : "error in getSingleProductController",
     error : error.message
    })
 }


}

const deleteProductController = async(req,res)=>{
   try {
     const product = await productModel.findByIdAndDelete({_id : req.params.id});
     res.status(200).send({
      success : true,
      message : "deleted product",
      product
     })
   } catch (error) {
    res.status(500).send({
     message : "error in deleteProductController",
     error : error.message
    })
 }
}

const productPhotoController = async(req,res)=>{
   try {
    const product = await productModel.findById(req.params.id).select('photo');
    if(product.photo.data){
     res.set('Content-type',product.photo.contentType);
     return res.status(200).send(product.photo.data);
   }
   } catch (error) {
    res.status(500).send({
     message : "error in productPhotoController",
     error : error.message
    })
 }
}


const updateProductController =  async(req,res)=>{
  try {
    const { title, description, price, category, subcategory,brand, shipping, quantity } =
      req.body;


    /* Check if title is present and is a string
    if (typeof title !== 'string') {
      return res.status(400).send({
        success: false,
        message: 'Invalid title',
      });
    }
*/
    const slug = slugify(title);

    const products = await productModel.findByIdAndUpdate(req.params.id , 
      {...req.body , slug} ,
       {new : true})

    await products.save();

    res.status(201).send({
      success : true,
      message : "product is updated",
      products
    })

  } catch (error) {
     res.status(500).send({
      message : "error in updateProductController",
      error : error.message
     })
  }

}



export {
  createProductController,
  getProductController,
  getSingleProductController,
  deleteProductController,
  productPhotoController,
  updateProductController
};

