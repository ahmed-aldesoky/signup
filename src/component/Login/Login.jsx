import React from 'react'
import logo from './Logo.png'
import './Login.css'
import { useState } from "react";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

function Login() {
    const [userData, setUserData] = useState({
        email:"",
        password:"",
        showPassword: false
    })
    const [errors, setError] = useState({
        emailErr:"",
        passwordErr: ""
    })
    const changeData = (e) => {
        if(e.target.name === "email"){
            setUserData({
                ...userData,
                email: e.target.value
            });
            //console.log(e.target.value.includes('@'))
            setError({
                ...errors,
                emailErr:
                    e.target.value.substring((e.target.value.length - 4)) != ".com" || !e.target.value.includes('@')?
                    "Please enter correct email form"
                    : e.target.value.length == 0 ?
                    "This field is required"
                    : null
            })
        }
        else if(e.target.name === "password"){
            setUserData({
                ...userData,
                password: e.target.value
            });
            setError({
                ...errors,
                passwordErr:
                    e.target.value.length == 0?
                    "This field is required"
                    :e.target.value.length < 8 ?
                    "Password must be more than 8 char"
                    : null
            })
        }
        else if(e.target.name === "showPassword"){
         
            setUserData({
                ...userData,
                showPassword: e.target.checked
            })
        }
    }
    const submitData = (e) => {
      
        e.preventDefault()
    }
  return (
    <>
    <div className='home'>
        <div className="form-Con">
        <img className='logo-chooser' src={logo} alt="logo"/>
        <Form className='w-75 d-flex flex-column justify-content-evenly align-item-center'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Enter email" className='form-control my-2' required onChange={(e) => changeData(e)}/>
            <Form.Text className="text-danger">
                    {errors.emailErr}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type={`${userData.showPassword? "text" : "password"}`} name="password" className='form-control my-2' placeholder="Password" required onChange={(e) => changeData(e)}/>
            <Form.Text className="text-danger">
                    {errors.passwordErr}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="showPassword" label="Show Password" onChange={(e) => changeData(e)}/>
            </Form.Group>
            <Form.Text><a href="/">Forget Password ? </a></Form.Text>

            <Button variant="primary" type="submit" className='main-Butt w-100' onClick={(e) => submitData(e)}>
                Submit
            </Button>

          <p className='py-3'>Signed up with Facebook or Google ?<a href="/"> Tap here to create a password</a>.</p>



        </Form>
        </div>
        </div>

    

   
    </>
  )
}

export default Login
