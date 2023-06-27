import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
            //save the auth toke to local storage and redirect
      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
      alert("Login Success");
    }
    
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">

      <h1>Student Login</h1>
      <form action="" method="POST"  onSubmit={handleSubmit}>  
        <input
          type="email"
          name="email"
          required
          value={credentials.email}
          onChange={onChange}
          placeholder="Enter Email"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          required
          value={credentials.password}
          onChange={onChange}
          placeholder="Enter Password"
        />
        <br />
        <br />
        <input type="submit" value="submit" />
        <br />
        <br />
        <Link to="/createuser" className="btn text-decoration-none"> create a new account </Link>
        
      </form>

      </div>
    </>
  )
}
