import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate , useParams } from "react-router-dom";
const Updateproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const params= useParams();
  useEffect(()=>{
    getDetails();
  },[]);
  const getDetails= async ()=>{
    let result = await fetch(`http://localhost:3001/product/${params.id}`, {
      method: "GET"
    });
    result=await result.json();
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
  }
  let navigate = useNavigate();
  const upproduct = (event) => {
 
  };
  return (
    <div className="Signup">
      <h1>Update Product</h1>
      <form onSubmit={upproduct}>
        <input
          type="text"
          placeholder="Enter Product Name"
          onChange={(e) => setName(e.target.value)} value={name}
        />
       
        <input
          type="text"
          placeholder="Enter Product Price"
          onChange={(e) => setPrice(e.target.value)} value={price}
        />
         
        <input
          type="text"
          placeholder="Enter Product Category"
          onChange={(e) => setCategory(e.target.value)} value={category}
        />
        
        <input
          type="text"
          placeholder="Enter Product Company"
          onChange={(e) => setCompany(e.target.value)} value={company}
        />
       
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default Updateproduct;
