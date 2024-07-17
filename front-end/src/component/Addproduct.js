import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Addproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  let navigate = useNavigate();
  const addhandler = (event) => {
    event.preventDefault();
    const userID= JSON.parse(localStorage.getItem('user')).data._id;
    if (!name || !price || !category || !company) {
        setError(true);
        return false;
      }
    // console.warn({ name, price, category, company });
    axios
      .post("http://localhost:3001/add", {
        name: name,
        price: price,
        category: category,
        company: company,
        userId:userID,
      })
      .then((res) => {
         console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Signup">
      <h1>Add Product</h1>
      <form onSubmit={addhandler}>
        <input
          type="text"
          placeholder="Enter Product Name"
          onChange={(e) => setName(e.target.value)} value={name}
        />
        { error && !name &&<span className="valid">Enter valid product name</span>}
        <input
          type="text"
          placeholder="Enter Product Price"
          onChange={(e) => setPrice(e.target.value)}
        />
          { error && !price &&<span className="valid">Enter valid product price</span>}
        <input
          type="text"
          placeholder="Enter Product Category"
          onChange={(e) => setCategory(e.target.value)}
        />
          { error && !category &&<span className="valid">Enter valid category</span>}
        <input
          type="text"
          placeholder="Enter Product Company"
          onChange={(e) => setCompany(e.target.value)}
        />
          { error && !company &&<span className="valid">Enter valid company name</span>}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Addproduct;
