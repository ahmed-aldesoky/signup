import React from 'react'
import {Navbar,Container,Card,CardGroup} from 'react-bootstrap'
import logo from './Logo.png'  
import './becometasker.css'
import footerimg1 from './1.jpg'
import footerimg2 from './2.jpg'  
import footerimg3 from './3.jpg'  



import img from './worker-grinding-white-wall-with-sandpaper.jpg';

function BecomeATasker() {
  return (
    <>
  
  <Navbar bg="primary">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="200"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
  

    <div className="container py-5">
        <div className="row g-4">
        <div className="col-md-7">
            <img src={img} alt="craftwomen" className='w-100'/>
            </div>
        <div className="col-md-5">
            <h1>Earn money your way</h1>
            <p className='fs-5'>See how much you can make
tasking on Sahla</p>
    <label className='fs-5 fw-bolder' htmlFor="city">Select your area</label>
        <select id='city' class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    <label className='fs-5 fw-bolder' htmlFor="city">Choose a Category</label>
    <select id='city' class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<h1 className='fw-bold d-inline-block mx-2'>$34</h1><span>Per Hour</span>
<button className='main-Butt d-block w-100 mt-4'>Get Started</button>
<p>Already have an account?<a href="/"> Sign in</a></p>
            </div>
        </div>
    </div>

    

    <div >
    <CardGroup className="text-center"   >
    <Card border="light">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card border="light">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  
  
  
 
  
</CardGroup>
</div>

    </>
  )
}

export default BecomeATasker
