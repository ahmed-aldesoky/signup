import React from 'react'
import location from './earth.png'
import './city.css';

const City = () => {
  return (


    <div className='main-cont'>
      <div className='search-cont'>
        <h2 className='text-center m-2' >cities where we work-sahla</h2>
        <br />
        <div class="searchbox">
          <input type="search" class="xx  border border-primary " placeholder="search by zip code" />
          <button class="btn bg-primary text-white  btn-outline-primary  " type="button" >search </button>
        </div>
      </div>
      <div className='city' >

        <div className="city-list" >


          <div className='list'>
            <img src={location} className="earth" alt="logo" />
            <br />
            <p className='p-location'>
              Sahla's Locations
            </p>
            <ul className='list-group location-ul  m-3 p-5'>
              <li className='list-group-item fw-bold  border-0' >cairo</li>
              <li className='list-group-item border-0 text-primary' >nasr city</li>
              <li className='list-group-item border-0 text-primary' >new cairo</li>
              <li className='list-group-item border-0 text-primary' >maadi</li>
              <li className='list-group-item border-0 text-primary' >zayton</li>


            </ul>

            <ul className='list-group  location-ul flex m-3 p-5'>
              <li className='list-group-item fw-bold  border-0' >cairo</li>
              <li className='list-group-item border-0 text-primary' >nasr city</li>
              <li className='list-group-item border-0 text-primary' >new cairo</li>
              <li className='list-group-item border-0 text-primary' >maadi</li>
              <li className='list-group-item border-0 text-primary' >zayton</li>


            </ul>
            <ul className='list-group location-ul flex m-3 p-5'>
              <li className='list-group-item fw-bold  border-0' >cairo</li>
              <li className='list-group-item border-0 text-primary' >nasr city</li>
              <li className='list-group-item border-0 text-primary' >new cairo</li>
              <li className='list-group-item border-0 text-primary' >maadi</li>
              <li className='list-group-item border-0 text-primary' >zayton</li>


            </ul>





          </div>

        </div>



      </div>
    </div>

  )
}

export default City