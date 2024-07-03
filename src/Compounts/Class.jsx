import React from 'react'
import Navbar from './Navbar'
import './Mainn.css'
const Class = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row row1">
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

        <div className="row row1">
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
    </>
  )
}

export default Class
