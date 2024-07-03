import React from 'react'
import Navbar from './Navbar'
import './Mainn.css'

const Conduct = () => {
  return (
    <>
      <Navbar />
      <div className="container-fliud footer " style={{ backgroundColor: "black", color: "white" }}>
        <div className="row">
          <div className="col-3">
            <img src="src/assets/logo.png" className="loff" alt="logo" />
          </div>

          <div className="col-3">
            <h2>Discover</h2>
            <ul>
              <li className='ht'>Home</li>
              <li className='ht'> About</li>
              <li className='ht'>Class</li>
              <li className='ht'>Team</li>
              <li className='ht'> Price</li>
              <li className='ht'>Galary</li>
              <li className='ht'>Blog</li>
              <li className='ht'> Conduct</li>

            </ul>
          </div>

          <div className="col-3">
            <h2>Quick Link</h2>
            <ul>
              <li className='ht'>Gallery</li>
              <li className='ht'>Login</li>
              <li className='ht'>Register</li>
            </ul>
          </div>

          <div className="col-3">
            <h2>Contact</h2>
            <ul>
              <li className='ht'>Address</li>
              <li className='ht'>Email</li>
              <li className='ht'>Phone</li>
            </ul>
          </div>

        </div>

      </div>

    </>
  )
}

export default Conduct
