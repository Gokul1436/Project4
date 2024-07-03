import React from 'react'
import Navbar from './Navbar'
import './Mainn.css'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container about">
        <h3 className="h1">ABOUT US</h3>
        <p className="about-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum excepturi error <br />tempore quasi eos quas recusandae quam saepe tenetur!
        </p>
        <div className="row">
          <div className="col-3 col33">
            <button className="btn btn-light btn-diagonal-slide">  <img src="src/assets/user (1).png" className='icon' alt="user" /></button>
            <h6 className='head-icon'>AWARD-WINNING TRAINERS</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis in totam? Deserunt, vel quibusdam?</p>
            <button className="btn btn-success">Explore More</button>

          </div>
          <div className="col-3 col33">
            <button className="btn btn-light btn-diagonal-slide">  <img src="src/assets/price.png" className='icon' alt="user" /></button>
            <h6 className='head-icon'>EXCELLENT PRICES</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, possimus dignissimos ut inventore id voluptate.</p>
            <button className="btn btn-success">Explore More</button>


          </div>
          <div className="col-3 col33">
            <button className="btn btn-light btn-diagonal-slide">  <img src="src/assets/tumble.png" className='icon' alt="user" /></button>
            <h6 className='head-icon'>MODERN EQUIPMENT</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod eos optio aut sunt accusantium.</p>
            <button className="btn btn-success">Explore More</button>


          </div>

        </div>

      </div>
    </>
  )
}

export default About
