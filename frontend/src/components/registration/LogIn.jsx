import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./LogIn.css";
import logo from '../../assets/logo.jpg';
import apartment from '../../assets/apartment.jpeg';
import axios from "axios";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});


  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const validateForm = () => {
    let formErrors = {};
    if (!email.trim()) {
      formErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      formErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      formErrors.password = "Password is required";
    } else if (password.length < 8) {
      formErrors.password = "Password must be at least 8 characters";
    } else if (!validatePassword(password)) {
      formErrors.password = "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };



  // const handleSubmit = async (e) => {

  //   e.preventDefault();

  //   console.log(email+" "+password);

  //    const data={
  //     "email":email,
  //     "password":password
  //    }

  //    try{
  //     const response = await axios.post("http://localhost:8080/usersdata/login", data);

  //     if(response.data == "false"){
  //       alert("Invalid credentials");
  //     }
     

     
  //   if (validateForm()) {
      
  //     const userRole = "admin"; // Get role from API or user data
  
  //     // if (userRole === "admin") {
  //     //   navigate("/admin-register");  // Redirect first-time admin users
  //     // } else {
  //     //   navigate("/dashboard"); // Redirect regular users
  //     // }

  //     if (userRole === "admin") {
  //       navigate("/admin-dashboard");  
  //     } else {
  //       navigate("/resident-dashboard"); 
  //     }

  //   }
  // }catch(error){
  //   console.log(error);
  // }
  // };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log(email + " " + password);
  
    if (!validateForm()) {
      console.log("Validation failed!");
      return; // Stop execution if validation fails
    }
  
    const data = { email, password };
  
    try {
      console.log("Sending request to API...");
      const response = await axios.post("http://localhost:8080/usersdata/login", data);
      
      console.log("API Response:", response.data);
  
      if (response.data === "false") {
        alert("Invalid credentials");
        return; // Stop execution if login fails
      }

      // Store email in localStorage
    localStorage.setItem("userEmail", email);
  
      // Navigate to admin-dashboard regardless of role
      navigate("/admin-dashboard");
  
    } catch (error) {
      console.log("Login Error:", error);
      alert("Login failed. Please try again.");
    }
  };
  

  return (
    <div className="Login_page">
      <div className='apartment'>
        <img src={apartment} alt='apartment' />
      </div>

      <div className="login_form">
        <img src={logo} className='communitylogo' alt="Community Logo" />

        <h1>Log In</h1>
      
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Log In</button>
        </form>

        <div>
          <h4 style={{ display: 'inline', marginRight: '5px' }}>Don't have an account?</h4>
          <span className="auth-link" onClick={() => navigate("/")}>Sign Up Now</span>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
