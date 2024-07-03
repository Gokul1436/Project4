import React from 'react'
import Navbar from './Navbar'
import'./Mainn.css'

const Blog = () => {
  return (
    <>
      <Navbar />
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
    </>
  )
}

export default Blog