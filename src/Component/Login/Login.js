import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
    const navigate = useNavigate();
    function clicklogin(){
        navigate('/dashboard')
    }
  return (
    <div className='bg_img'>
        <img src='https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg' /> 

        <div className='heading'>
            <h1>Employees Management System</h1>
        </div>
        <div className='name_pass'>
            <h2>Login to site</h2>
            <div className='username'>
                <h3>Username</h3>
                <input type='string' />
            </div>
            <div className='username'>
                <h3>password</h3>
                <input type='password' />
            </div>
            <button className='login_btn' onClick={clicklogin}>Login</button>
        </div>
    </div>
  )
}

export default Login