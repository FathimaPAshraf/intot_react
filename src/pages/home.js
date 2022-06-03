import React from 'react'
import {Link} from 'react-router-dom'

export default function home() {
  return (
    
        <React.Fragment>
            <section className="paraclass" id="title">

<div className="container-fluid">

 

  <nav className="navbar navbar-expand-lg ">

    <a className="navbar-brand" href="">INTOT</a>
    <div className="navbar-collapse" >
      <div className="nav ml-auto ">
        <ul className="navbar-nav  ">
          <li className="nav-item itemnav">
            <Link to= "/Login" style={{textDecoration:"none", color:"white"}}>Login
            
              <img src="pro/images/login.png" alt="" />
              </Link>
          </li>
          <li className="nav-item itemnav">
            <Link to= "/About" style={{textDecoration:"none", color:"white"}}>Sign Up
              <img src="pro/images/signup.png" alt="" />
              </Link>
            
          </li>
          <li className="nav-item itemnav">
            <a className="nav-link" href="/">
              <img src="pro/images/search-icon." alt="" />
              
            </a>
          </li>
          <li className="nav-item">
            
            <div id="myNav" className="overlay">

              
              <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
            
              
              <div className="overlay-content">
                <a href="index.html">Home</a>
                <a href="team.html">Team</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="/">Contact us</a>
              </div>
            
            </div>
            <span onClick="openNav()">
              <input type="image" id="slidepage" src="pro/images/menu.png" className="menuimg"/>
            </span>
          </li>
        </ul>
     </div>
    </div>
  </nav>
  </div>



<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active li-1">01</li>
<li data-target="#carouselExampleIndicators" data-slide-to="1" className="li-2">02</li>
</ol>
<div className="carousel-inner">
<div className="carousel-item active">
  <div className="para">
      
    <h1>
      INNOVATIVE<br/>
      <span className="soln">
        SOLUTIONS
      </span>
    </h1>
    <p>
      We find the best solutions fot you, we<br/>redesign your home and work places.<br/>
      Discover why over 5,100 home owners<br/>trust initiative.
    </p>
    <button type="button" className="btn btn-outline-light" id="slidebtn">Read more</button>
   </div>
<img  className="slideimg" src="pro/images/slider-img.png" alt=""/>

</div>
<div className="carousel-item">
  <div className="para">
      
    <h1>
      INNOVATIVE<br/>
      <span className="soln">
        SOLUTIONS
      </span>
    </h1>
    <p>
      We find the best solutions fot you, we<br/>redesign your home and work places.<br/>
      Discover why over 5,100 home owners<br/>trust initiative.
    </p>
    <button type="button" className="btn btn-outline-light" id="slidebtn">Read more</button>
   </div>
<img  className="slideimg" src="pro/images/slider-img.png" alt=""/>

  </div>
</div>
</div>
</section>


 <div className="edit-1">

 </div>
 
 <div className="edit-2">
    
 </div>
 
 <section>
 <div className="row">
     <h2 className="cardhead">WHY INITIATIVE COMPANY</h2>
<p className="cardpara">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using<br/> Lorem
</p>
</div>
<div className="row cardsec">
<div className="col-lg-4 col-md-6 pricing-column">
  <div className="about-card shadow p-3 mb-5 bg-white rounded">
<div className="card-img">
  <img src="pro/images/card-img-1.png" alt=""/>
</div>
<div className=" card-body ">
  <h4>
    10 YEARS EXPERIENCE
  </h4>
  <p>
    Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.
  </p>
</div>
<div className="about-btn1">
  <button type="button" className=" cardbtn  btn btn-outline-success">Read more</button>
</div>
</div>  
</div>
<div className="col-lg-4 col-md-6 pricing-column2">
  <div className="about-card shadow p-3 mb-5 bg-white rounded">
<div className="card-img">
  <img src="pro/images/card-img-2.png" alt=""/>
</div>
<div className=" card-body">
  <h4>
   A PRO ARCHITECTS TEAM
  </h4>
  <p>
    Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.
  </p>
</div>
<div className="about-btn2">
  <button type="button" className=" cardbtn  btn btn-outline-success">Read more</button>
</div>
</div>  

</div>
<div className="col-lg-4 col-md-6 pricing-column3">
  <div className="about-card shadow p-3 mb-5 bg-white rounded">
<div className="card-img">
  <img src="pro/images/card-img-3.png" alt=""/>
</div>
<div className ="card-body">
  <h4>
    1000+ HAPPY CUSTOMERS
  </h4>
  <p>
    Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.
  </p>
</div>
<div className="about-btn3">
  <button type="button" className="cardbtn  btn btn-outline-success">Read more</button>
</div>
</div>  
</div>
</div>
</section>

<section className="portfolio-sec">
<div className="row portfolio">
  <h2 className="portfolio-head">OUR PORTFOLIO</h2>
  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using<br/> Lorem</p>
</div>
<div className="container portfolio_container">
  <div className="row">
    <div className="col-md-8">
      <div className="portfolio_img1">
        <img src="pro/images/portfolio-img-1.png" alt=""/>
      </div>
    </div>
    <div className="col-md-4">
      <div className="portfolio_img2">
        <img src="pro/images/portfolio-img-2.jpg" alt=""/>
      </div>
    </div>
    <div className="col-md-4">
      <div className="portfolio_img3">
        <img src="pro/images/portfolio-img-3.png" alt=""/>
      </div>
    </div>
    <div className="col-md-8">
      <div className="portfolio_img4">
        <img src="pro/images/portfolio-img-4.png" alt=""/>
      </div>
    </div>
  </div>
</div>
</section>





</React.Fragment>

 )
}
