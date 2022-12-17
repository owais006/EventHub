import React from 'react'
import img1 from './../img1.jpg';
import img2 from './../img2.png';
import img3 from './../img3.jpg';
import img4 from './../img4.png';
const Body = () => {
  return (
    <React.Fragment>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="text">
          <h1>
            Hello!!
          </h1>
          <div className='para'>
          <p>
          The "Event Management System" has been developed to override the problems prevailing in 
the practicing manual system. This software is supported to eliminate and in some cases reduce 
the hardships faced by this existing system.
          </p>
          <p className='para1'>
          Moreover this system is designed for the particular 
need of the company to carry out operations in a smooth and effective manner
          </p>
          </div>
        </div>
    </React.Fragment>
      )
}

export default Body
