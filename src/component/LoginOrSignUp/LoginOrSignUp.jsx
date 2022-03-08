import React from 'react'
import logo from './Logo.png'
import './LoginOrSignUp.css'
import { Link } from 'react-router-dom'

function LoginOrSignUp() {
  return (
    <>
    <div className="form-Con">
      <img className='logo-chooser' src={logo} alt="logo"/>
        <form className='w-75 d-flex flex-column justify-content-evenly align-item-center'>
            <Link className='link' to={'/signup'}><button className='main-Butt'>Sign Up</button></Link>
            <Link className='link' to={'/login' }><button className='sec-Butt'>Log in</button></Link>
        <p className='py-3'>By signing up you agree to our <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a> .</p>
        </form>
    </div>
    
    </>
  )
}

export default LoginOrSignUp