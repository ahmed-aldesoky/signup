import React from 'react'
import { Link } from "react-router-dom"

import './Help.css'
function Help() {
  
  return (
    <>
            <Link className='link' to={'Helppage'}><button className='helpButt'><i class="fa-solid fa-circle-info"></i><p>Help</p></button>
    </Link>
    </>
        
  )
}

export default Help