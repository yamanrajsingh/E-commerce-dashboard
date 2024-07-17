import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userName, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  let navigate = useNavigate();

  const loginhandle = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/user/login", {
        userName: userName,
        // email:email,
        // phoneNumber:phoneNumber,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res));
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Signup">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter UserName"
        onChange={(e) => setName(e.target.value)}
        value={userName}
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit" onClick={loginhandle}>
        {" "}
        Login{" "}
      </button>
    </div>
  );
};

export default Login;
