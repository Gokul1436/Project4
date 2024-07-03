import React,{useState}from 'react'
import Navbar from './Compounts/Navbar'
import './App.css';
import './Compounts/Mainn.css';

const App = () => {

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
      <div className="container-fluid">
        <div className="container-fluid main">
          <h1 className="success"><spam className="head-spam">WHERE HARD</spam> WORK MEETS SUCCESS</h1>
          <p className="head-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quisquam nulla fuga, doloremque aliquam cumque.</p>
          <button className="btn btn-danger header-btn"> GET STARTED </button>

        </div><br /><br />
        {/* part2 */}


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
        </div><br />
        <hr /><br />


        {/* PART3 */}
{/* 
        <div className="container-fluid" style={{justifyContent:"center",alignItems:"center"}}>
          <div className="row ">
            <div className="col-6 col1">
              <h1 className="class-head">BODY BUILDING</h1>
              <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Libero accusamus reprehenderit qui consequatur vel consectetur maiores?</p>
              <button className="btn btn-danger class-btn"> READ MORE </button>
            </div>
            <div className="col-6 col2">
              <h1 className="class-head">CARDIO</h1>
              <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Libero accusamus reprehenderit qui consequatur vel consectetur maiores?</p>
              <button className="btn btn-danger class-btn"> READ MORE </button>
            </div>
          </div>

          <div className="row">
            <div className="col-6 col3">
              <h1 className="class-head">FITNESS</h1>
              <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Libero accusamus reprehenderit qui consequatur vel consectetur maiores?</p>
              <button className="btn btn-danger class-btn"> READ MORE </button>
            </div>
            <div className="col-6 col4">
              <h1 className="class-head">CROSSFIT</h1>
              <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Libero accusamus reprehenderit qui consequatur vel consectetur maiores?</p>
              <button className="btn btn-danger class-btn"> READ MORE </button>
            </div>
          </div>
        </div>
        */}



       {/* PART5 */}


       <div className="container-fluid">
        <h1 className="team-head">OUR TRAINERS</h1>
        <div className="card mb-3 card-out out1" >
          <div className="row g-0">
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

      </div><br/><hr/><br/> 


      {/* part6 */}

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
      <br/><br/> <hr className='hr'/><br/>



      {/* part8 */}



      <div className="container-fluid">
        <div className="card" style={{width: "18rem",marginTop:"100px",display:"inline-block",margin:"16px"}}>
          <img src="src/assets/post4.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">MARCH 10.2021</p>
            <h5>MAINTAIN A OERFECT STRUCTURE AFTER WORKOUT</h5>
          </div>
        </div>
        <div className="card" style={{width: "18rem",marginTop:"40px",display:"inline-block",margin:"16px"}}>
          <img src="src/assets/post1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">MAY 10.2021</p>
            <h5>MAINTAIN A OERFECT STRUCTURE AFTER WORKOUT</h5>
          </div>
        </div>

        <div className="card" style={{width: "18rem",marginTop:"40px",display:"inline-block",margin:"16px"}}>
          <img src="src/assets/post2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">JULY 31.2021</p>
            <h5>MAINTAIN A OERFECT STRUCTURE AFTER WORKOUT</h5>
          </div>
        </div>


        <div className="card" style={{width: "18rem",marginTop:"40px",display:"inline-block",margin:"16px"}}>
          <img src="src/assets/post3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">OCTUBER 18.2021</p>
            <h5>MAINTAIN A OERFECT STRUCTURE AFTER WORKOUT</h5>
          </div>
        </div>

        <button className="btn btn-danger class-btn blog"> EXPLORE MORE</button>
      </div>






{/* foooter */}

<div className="container-fliud footer " style={{ backgroundColor: "black", color: "white",marginTop:"70px" }}>
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


      




      </div>
    </>
  )
}

export default App
