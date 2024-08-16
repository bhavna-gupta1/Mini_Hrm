import React from 'react'
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './Login.css'

function Login() {
const[username,setUsername]=useState()
const [password,setPassword]=useState()
const [error,setError]=useState()
    const navigate = useNavigate();
    async function clicklogin() {
        // Example API URL, replace with your actual login API
        const loginApiUrl ='https://f023-2401-4900-4639-fa08-74aa-cf71-28e0-9fc5.ngrok-free.app';
    //   const loginApiUrl=process.env.REACT_APP_API_URL
        try {
          const response = await fetch(`${loginApiUrl}/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
                 },
            body: JSON.stringify({ username, password }),
          });
    
          if (response.ok) {
            // If login is successful, navigate to the dashboard
            navigate('/dashboard');
          } else {
            // Handle failed login attempt
            const errorData = await response.json();
            setError(errorData.message || 'Login failed');
          }
        } catch (error) {
          setError('An error occurred during login');
        }
      }
   
  return (
    <div className='bg_img'>
        <img src='https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg' /> 

        <div className='heading'>
            <h1>Employees Management System</h1>
        </div>cd app
        <div className='name_pass'>
            <h2>Login to site</h2>
            <div className='username'>
                <h3>Username</h3>
                <input type='string'
                value={username} 
                onChange={(e) => setUsername(e.target.value)}  />
            </div>
            <div className='username'>
                <h3>password</h3>
                <input type='password'
                value={password}  
                 onChange={(e) => setPassword(e.target.value)}  />
            </div>
            <button className='login_btn' onClick={clicklogin}>Login</button>
        </div>
    </div>
  )
}

export default Login