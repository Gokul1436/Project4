import React, { useState } from 'react'
import Navbar from './Navbar'
import './Mainn.css'

const Price = () => {

  const [pay, setpay] = useState("30");
  function Payvalue() {
    setpay("25")
  }


  const [payu, setpayu] = useState("45")
  function payulti() {
    setpayu("35")
  }

  const [paypro, setpaypro] = useState("60")
  function payprof() {
    setpaypro('50')
  }




  return (
    <>
      <Navbar />
      <div className="container-fluid price bg">
        <h1 className='member'>Membership</h1>
        <div className="row bg">
          <div className="col-4 bg">
            <div className="card price-card ">
              <div class="card-header bg ">
                STANDARD
              </div>
              <div className="card-body bg">
                <ul >
                  <li>include membership</li>
                  <li>Access all the gym fecility</li>
                  <li>Diet plan include</li>
                  <li>Hilth and fitness tips</li>
                  <li > Full access to every day</li>
                  <li>No additional charges</li>
                </ul>
                <h1 className='pay'>${pay}/Month</h1>
                <button className="btn btn-danger pay-header-btn" onClick={Payvalue}> GET STARTED </button>


              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="col-4 bg">
              <div className="card price-card ">
                <div class="card-header bg ">
                  ULTIMATE
                </div>
                <div className="card-body bg">
                  <ul >
                    <li>include membership</li>
                    <li>Access all the gym fecility</li>
                    <li>Diet plan include</li>
                    <li>Hilth and fitness tips</li>
                    <li > Full access to every day</li>
                    <li>No additional charges</li>
                  </ul>
                  <h1 className='pay'>${payu}/Month</h1>
                  <button className="btn btn-danger pay-header-btn" onClick={payulti}> GET STARTED </button>


                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="col-4 bg">
              <div className="card price-card ">
                <div class="card-header bg ">
                  PROFESSIONAL
                </div>
                <div className="card-body bg">
                  <ul >
                    <li>include membership</li>
                    <li>Access all the gym fecility</li>
                    <li>Diet plan include</li>
                    <li>Hilth and fitness tips</li>
                    <li > Full access to every day</li>
                    <li>No additional charges</li>
                  </ul>
                  <h1 className='pay'>${paypro}/Month</h1>
                  <button className="btn btn-danger pay-header-btn" onClick={payprof} > GET STARTED </button>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default Price









{/* <div id="mycarousel"className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img src="src/assets/matt.jpg" alt="fd" style={{width:"100%"}} />
          </div>
          <div className="carousel-item  active">
            <img src="src/assets/rosy.jpg" alt="fd" style={{width:"100%"}} />
          </div>
          <div className="carousel-item">
            <img src="src/assets/matt.jpg" alt="fd" style={{width:"100%"}} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
      </div> */}







// <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
// <div className="carousel-indicators">
//   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-c urrent="true" aria-label="Slide 1"></button>
//   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
// </div>
// <div className="carousel-inner">
//   <div className="carousel-item active">
//   <div className="card mb-3 card-out out1"  style={{width:"100%"}} >
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img src="src/assets/david.jpg" className="img-fluid rounded-start" alt="..." />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body cd">
//               <h5 className="card-title">DAVID WILLIAMS</h5>
//               <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//               <p className="card-text"><small class="text-muted">7 YEARS EXPERENCE</small></p>
//             </div>
//           </div>
//         </div>
//       </div>
//   </div>



//   <div className="carousel-item">
//   <div className="card mb-3 card-out out3 "   style={{width:"100%"}} >
//         <div className="row g-0">
//           <div class="col-md-4">
//             <img src="src/assets/matt.jpg" className="img-fluid rounded-start" alt="..." />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body cd">
//               <h5 className="card-title">MATT STONE</h5>
//               <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//               <p className="card-text"><small class="text-muted">3 YARS EXPERENCE</small></p>
//             </div>
//           </div>
//         </div>
//       </div>
//   </div>



//   <div className="carousel-item">
// <div className="card mb-3 card-out out2"   style={{width:"100%"}} >
//         <div className="row g-0">
//           <div class="col-md-4">
//             <img src="src/assets/rosy.jpg" className="img-fluid rounded-start" alt="..." />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body cd">
//               <h5 className="card-title">ROSY RIVERA</h5>
//               <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//               <p className="card-text"><small class="text-muted">1 YEAR EXPERENCE</small></p>
//             </div>
//           </div>
//         </div>
//       </div>


//   </div>
// </div>
// <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span className="visually-hidden c">Previous</span>
// </button>
// <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//   <span className="carousel-control-next-icon" aria-hidden="true"></span>
//   <span className="visually-hidden">Next</span>
// </button>
// </div>


