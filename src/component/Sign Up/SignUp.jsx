import React from 'react'
import logo from './Logo.png'
import { useState } from "react";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

function SignUp() {

  const emailReg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  const passwordReg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
  const zipReg=new RegExp(/^\d{5}(?:[- ]?\d{4})?$/)
  const nameReg=new RegExp(/^[a-z ,.'-]+$/i)


  const [userData, setUserData] = useState({
      name:"",
      email:"",
      username:"",
      password:"",
      confirmPassword:"",
      showPassword: false,
      zip:""
     
  })
  const [errors, setError] = useState({
      emailErr:"",
      passwordErr: "",
      nameErr:"",
      usernameErr:"",
      confirmPasswordErr:"",
      zipErr:""
  })

  
  const changeData = (e) => {
      if(e.target.name === "email"){
          setUserData({
              ...userData,
              email: e.target.value
          });
          //console.log(emailReg.test(e.target.value))
          setError({
              ...errors,
              emailErr:
                  !emailReg.test(e.target.value)?
                  "Please enter correct email form"
                  : e.target.value.length == 0?
                  "This field is required"
                  : null
          })
      }
      else if(e.target.name === "zip"){
        setUserData({
            ...userData,
            zip: e.target.value
        });
        setError({
            ...errors,
            zipErr:
                !zipReg.test(e.target.value) ?
                "Please Enter a valid zip"
                : e.target.value.length == 0?
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
                  !passwordReg.test(e.target.value) ?
                  "Please Enter a valid password"
                  : e.target.value.length == 0?
                  "This field is required"
                  : null
          })
      }
      else if(e.target.name === "confirmPassword"){
          setUserData({
              ...userData,
              confirmPassword: e.target.value
          });
          setError({
              ...errors,
              confirmPasswordErr:
                  e.target.value !== userData.password ?
                  "Passwords are not matched"
                  : e.target.value.length == 0?
                  "This field is required"
                  : null
          })
      }
      else if(e.target.name === "showPassword"){
          //console.log(e.target.checked)
          setUserData({
              ...userData,
              showPassword: e.target.checked
          })
      }
      else if(e.target.name === "Username"){
          setUserData({
              ...userData,
              username: e.target.value
          })
          setError({
              ...errors,
              usernameErr:
              !nameReg.test(e.target.value) ?
              "Please Enter a valid name"
              : e.target.value.length == 0?
              "This field is required"
              : null
          })
      }

      else if(e.target.name === "lastName"){
        setUserData({
            ...userData,
            username: e.target.value
        })
        setError({
            ...errors,
            lastnameErr:
            !nameReg.test(e.target.value) ?
            "Please Enter a valid name"
            : e.target.value.length == 0?
            "This field is required"
            : null
        })
    }
      else if(e.target.name === "zip"){
        setUserData({
            ...userData,
            zip: e.target.value
        });
        setError({
            ...errors,
            zipErr:
                !zipReg.test(e.target.value) ?
                "Please Enter a valid zip"
                : e.target.value.length == 0?
                "This field is required"
                : null
        })
  
  }
    
    
 
    

  }
  const submitData = (e) => {
    //   console.log(e.target)
      e.preventDefault()
  }
return (
    <>
      <div className='home'>
      <div  className="form-Con">
      <img className='logo-chooser' src={logo} alt="logo"/>
      <Form className='w-75 d-flex flex-column justify-content-evenly align-item-center'>

            <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control type="text"  name="Username"  placeholder='First Name' required onChange={(e) => changeData(e)}/>
            <Form.Text className="text-danger">
                        {errors.usernameErr}
            </Form.Text>
            </Form.Group>

           


            

             <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control type="text"  name="lastName"  placeholder='Last Name' required onChange={(e) => changeData(e)}/>
             <Form.Text className="text-danger">
                 {errors.lastnameErr}
             </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="email" name="email" placeholder='Email Address' required onChange={(e) => changeData(e)}/>
                    <Form.Text className="text-danger">
                        {errors.emailErr}
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                 
                    <Form.Control type={`${userData.showPassword? "text" : "password"}`} name="password" placeholder='Password' required onChange={(e) => changeData(e)}/>
                    <Form.Text className="text-danger">
                        {errors.passwordErr}
                    </Form.Text>
                </Form.Group>   



                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    
                    <Form.Control type={`${userData.showPassword? "text" : "password"}`} name="confirmPassword" placeholder='confirmPassword' required onChange={(e) => changeData(e)}/>
                    <Form.Text className="text-danger">
                        {errors.confirmPasswordErr}
                    </Form.Text>
                </Form.Group>


              




                <Form.Group className="mb-3" >
                    
                    <Form.Control type="text" name="zip" placeholder='ZIP code' required onChange={(e) => changeData(e)}/>
                    <Form.Text className="text-danger">
                        {errors.zipErr}
                    </Form.Text>
                </Form.Group>
                <Form.Text>By clicking below and creating an account, I agree to Sahla's <a href="http://">Terms of Service</a> and <a href="/">Privacy Policy</a>.</Form.Text>
                <Button  type="submit" className='main-Butt w-100' onClick={(e) => submitData(e)}>
                    Create account
                </Button>
                
       </Form>

</div>
</div>

    </>
)
}

export default SignUp
