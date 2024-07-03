import React from 'react'
import Navbar from './Navbar'

const Text = () => {
  return (
   <>
      <Navbar />
      <div className="container-fliud">
        <div className="card mb-3 " style={{justifyContent:"center",textAlign:"center"}}>
          <img src="src/assets/brand-1.png" class="card-img-top" alt="..." style={{maxWidth:"400px",justifyContent:"center",textAlign:"center",marginLeft:"490px"}} />
          <div className="card-body">
            <h5 className="card-title">FITTNESS CENTER</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
 
        <div className="card mb-3 " style={{justifyContent:"center",textAlign:"center"}}>
          <img src="src/assets/brand-2.png" class="card-img-top" alt="..." style={{maxWidth:"400px",justifyContent:"center",textAlign:"center",marginLeft:"490px"}} />
          <div className="card-body">
            <h5 className="card-title">POWER LIFTER</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>



        <div className="card mb-3 " style={{justifyContent:"center",textAlign:"center"}}>
          <img src="src/assets/brand-3.png" class="card-img-top" alt="..." style={{maxWidth:"400px",justifyContent:"center",textAlign:"center",marginLeft:"490px"}} />
          <div className="card-body">
            <h5 className="card-title"></h5>BEST LOCAL GYM
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>





        <div className="card mb-3 " style={{justifyContent:"center",textAlign:"center"}}>
          <img src="src/assets/brand-4.png" class="card-img-top" alt="..." style={{maxWidth:"400px",justifyContent:"center",textAlign:"center",marginLeft:"490px"}} />
          <div className="card-body">
            <h5 className="card-title">FITTNESS CLUB</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>       

        <div className="card mb-3 " style={{justifyContent:"center",textAlign:"center"}}>
          <img src="src/assets/brand-5.png" class="card-img-top" alt="..." style={{maxWidth:"400px",justifyContent:"center",textAlign:"center",marginLeft:"490px"}} />
          <div className="card-body">
            <h5 className="card-title">BODYBUILDING</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>


        </div>
        

        
        
      </>
      )
}

      export default Text
