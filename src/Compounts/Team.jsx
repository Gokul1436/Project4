import React from 'react'
import Navbar from './Navbar'
import './Mainn.css'

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h1 className="team-head">OUR TRAINERS</h1>
        <div className="card mb-3 card-out out1" >
          <div className="row ">
            <div class="col-md-4">
              <img src="src/assets/david.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body cd">
                <h5 className="card-title">DAVID WILLIAMS</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">7 YEARS EXPERENCE</small></p>
              </div>
            </div>
          </div>
        </div>



        <div className="card mb-3 card-out out2" >
          <div className="row g-0">
            <div class="col-md-4">
              <img src="src/assets/rosy.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body cd">
                <h5 className="card-title">ROSY RIVERA</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">1 YEAR EXPERENCE</small></p>
              </div>
            </div>
          </div>
        </div>




        <div className="card mb-3 card-out out3" >
          <div className="row g-0">
            <div class="col-md-4">
              <img src="src/assets/matt.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body cd">
                <h5 className="card-title">MATT STONE</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">3 YARS EXPERENCE</small></p>
              </div>
            </div>
          </div>
        </div>




        <div className="card mb-3 card-out out4" >
          <div className="row g-0">
            <div class="col-md-4">
              <img src="src/assets/sofia.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body cd">
                <h5 className="card-title">SOFIA LAUREN</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">2 YEARS EXPERENCE</small></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Team
// style="max-width: 540px;"