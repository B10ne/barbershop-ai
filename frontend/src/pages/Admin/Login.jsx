import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scissors } from "lucide-react";
import axios from "axios";

import "../../styles/admin/admin.css";

function Login() {

   const navigate = useNavigate();

   const [form, setForm] = useState({
      username: "",
      password: ""
   });

   const handleChange = (e) => {

      setForm({
         ...form,
         [e.target.name]: e.target.value
      });

   };

   const handleLogin = async () => {

    try {
 
       const response = await axios.post(
          "http://localhost:8000/admin/login",
          {
             username: form.username,
             password: form.password
          }
       );
 
       localStorage.setItem(
          "adminUser",
          JSON.stringify(response.data)
       );
 
       navigate(
          "/admin/dashboard"
       );
 
    } catch (error) {
 
       alert(
          error.response?.data?.detail ||
          "Login gagal"
       );
 
    }
 
 };
 return (

    <div className="auth-wrapper">
 
       <div className="auth-card">
 
          <div className="auth-logo">
 
             <div className="auth-logo-icon">
 
                <Scissors size={28}/>
 
             </div>
 
             <h2>
                AI Barbershop
             </h2>
 
          </div>
 
 
          <h4 className="auth-title">
 
             Welcome Back 👋
 
          </h4>
 
          <p className="auth-subtitle">
 
             Please sign in to continue
 
          </p>
 
 
          <div className="form-group">
 
             <label>
                Username
             </label>
 
             <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={form.username}
                onChange={handleChange}
             />
 
          </div>
 
 
          <div className="form-group">
 
             <label>
                Password
             </label>
 
             <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
             />
 
          </div>
 
 
          <div className="auth-options">
 
             <label className="remember-me">
 
                <input type="checkbox"/>
 
                Remember Me
 
             </label>
 
 
             <a href="#">
 
                Forgot Password?
 
             </a>
 
          </div>
 
 
          <button
             className="login-btn"
             onClick={handleLogin}
          >
 
             Sign In
 
          </button>
 
       </div>
 
    </div>
 
 );
}

export default Login;