import React,{useEffect, useState} from "react";
import axios from "axios";
  import { useNavigate } from "react-router-dom";
const Signup=()=>{
    const [ userName,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phoneNumber,setPhone]=useState(null);
    const [ password,setPassword]=useState("");

     let navigate = useNavigate();

     useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth)
        {
            navigate('/');
        }
     })
    const Submithandler=(event)=>{
        event.preventDefault();
         axios.post('http://localhost:3001/user/signUp',{
        userName:userName,
        email:email,
        phoneNumber:phoneNumber,
        password:password
       })
       .then(res=>{
        console.log(res);
        localStorage.setItem("user",JSON.stringify(res));
        navigate("/login");
       })
       .catch(err=>{
        console.log(err);
       })
    }

    return (
        <div className="Signup">
            <h1>Register</h1>
            <form onSubmit={Submithandler}>
            <input type="text" placeholder="Enter Your Name"  onChange={(e)=>setName(e.target.value)} />

            <input type="text" placeholder="Enter Your Email"   onChange={(e)=>setEmail(e.target.value)}/>

            <input type="number" placeholder="Enter Your PhoneNumber"  onChange={(e)=>setPhone(e.target.value)}/>

            <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" > Sign Up</button> 
            </form>
        </div>
    )
}
export default Signup;