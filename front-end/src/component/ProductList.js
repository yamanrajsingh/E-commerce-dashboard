import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
const ProductList = () => {
  const [products, setProducts] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  },[])

  const getProducts = async  () => {
     let result= await fetch('http://localhost:3001/product');
    
      result= await result.json();
      console.log(result);
      setProducts(result);
      // console.log(result);
  };

  const updateProduct=(id)=>{
    navigate('/update/'+id);
  }
 
  const deleteProduct = async (id)=>{
    let result = await fetch(`http://localhost:3001/product/${id}`, {
      method: "Delete"
    });
    result= await result.json();
    if(result)
    {
      getProducts();
    }
    else
    {
      console.log("error");
    }
  
  }

  return (
    <div className="product-list">
    <h1>Product List</h1>
    <ul>
      <li>S.No.</li>
      <li>Name</li>
      <li>Price</li>
      <li>Category</li>
      <li>Company</li>
      <li>Operation</li>
    </ul>
   {
    Array.from(products).map((product, index)=>
      <ul key={product._id}>
        <li>{index + 1}</li>
        <li>{product.name}</li>
        <li>{product.price}</li>
        <li>{product.category}</li>
        <li>{product.company}</li>
        <li><button onClick={()=>deleteProduct(product._id)}>Delete</button>
        <button onClick={()=>updateProduct(product._id)}>Update</button></li>
      </ul>
    )
   }
  </div>
);
  }
export default ProductList;
