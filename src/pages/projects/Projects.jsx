import React from "react";
import './project.css';
import mythra from '../../assets/images/mythra.png';
import Amazon from '../../assets/images/Amazon.png';
import Form  from '../../assets/images/Form.png';
import TOUR from '../../assets/images/TOUR.png';
import Fita from '../../assets/images/Fita.png';
import Cementio from '../../assets/images/Cementio.png';
import Swetha from '../../assets/images/Swetha.png';
import { TbWorldWww } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import ppcLogin from '../../assets/images/ppcLogin.png';
import ppcUser from '../../assets/images/ppcUser.png';
import ppcAdmin from '../../assets/images/ppcAdmin.png';
import ppcAdminHome from '../../assets/images/ppcAdminHome.png';
import ppcUserHome from '../../assets/images/ppcUserHome.png';
import rent1 from '../../assets/images/rent1.png';
import rent2 from '../../assets/images/rent2.png';
import rentadmin1 from '../../assets/images/rentadmin1.png';
import rentadmin2 from '../../assets/images/rentadmin2.png';




import {Fade, Roll} from 'react-reveal';

export default function Projects()
{
    return(
        <>
       
        <div className="container project" style={{marginRight:"20px"}}   id="project" >
        <Fade right>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase" > 
        TOP RECENT PROJECTS 
        </h2>
        <hr/>
        <p className="pb-3 text-center" style={{fontWeight:"bold" ,fontStyle:"italic"}}> 
           👉 Here are my top projects with live link and source code
        </p>
        </Fade>
        

  <div className="row p-2" id="ads" style={{margin: "30px 0px 30px 0px", marginRight:"40px"}} >
        <Roll>

         
   {/* ---------- CARD 1: USER with Carousel ---------- */}
<div className="col-12 col-sm-6 col-md-4 mt-3">
  <div className="card rounded">
    <div className="card-image position-relative">
      <span
        className="card-notif-badge"
        style={{
          position: "absolute",
          left: "-10px",
          top: "-25px",
          background: "#f29f67",
          textAlign: "center",
          borderRadius: "30px",
          color: "black",
          padding: "5px 15px",
          fontSize: "14px",
        }}
      >
        Mern Full Stack
      </span>

      {/* Carousel 1 */}
      <div
        id="carouselPondy1"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner rounded">
          <div className="carousel-item active">
            <img src={ppcUser} className="d-block w-100" alt="Project Screenshot 1" />
          </div>
          <div className="carousel-item">
            <img src={ppcLogin} className="d-block w-100" alt="Project Screenshot 2" />
          </div>
           <div className="carousel-item">
            <img src={ppcUserHome} className="d-block w-100" alt="Project Screenshot 2" />
          </div>
        </div>

        {/* Controls for Carousel 1 */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselPondy1"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselPondy1"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    {/* Tech Badges */}
    <div className="card-image-overly m-auto mt-2">
      {["Html", "Css", "React Js", "Javascript", "Bootstrap", "React Bootstrap", "Express Js", "MongoDB", "Node Js"].map((tech, idx) => (
        <span className="card-detail-badge" key={idx}>{tech}</span>
      ))}
    </div>

    {/* Card Body */}
    <div className="card-body text-center">
      <div className="ad-title m-auto">
        <h5 className="text-uppercase">PONDY PROPERTIES || USER (REALTIME PROJECT WEB & APP)</h5>
      </div>
      <div className="row p-2">
        <div className="col-lg-6 col-sm-12">
          <a className="ad-btn" target="_blank" rel="noreferrer" href="https://ppcpondy.com/">
            <TbWorldWww size={30} /> Browser
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ---------- CARD 2: ADMIN with Carousel ---------- */}
<div className="col-12 col-sm-6 col-md-4 mt-3">
  <div className="card rounded">
    <div className="card-image position-relative">
      <span
        className="card-notif-badge"
        style={{
          position: "absolute",
          left: "-10px",
          top: "-25px",
          background: "#f29f67",
          textAlign: "center",
          borderRadius: "30px",
          color: "black",
          padding: "5px 15px",
          fontSize: "14px",
        }}
      >
        Mern Full Stack
      </span>

      {/* Carousel 2 */}
      <div
        id="carouselPondy2"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner rounded">
          <div className="carousel-item active">
            <img src={ppcAdmin} className="d-block w-100" alt="Admin Screenshot 1" />
          </div>
          <div className="carousel-item">
            <img src={ppcAdminHome} className="d-block w-100" alt="Admin Screenshot 2" />
          </div>
        </div>

        {/* Controls for Carousel 2 (Corrected ID) */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselPondy2"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselPondy2"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    {/* Tech Badges */}
    <div className="card-image-overly m-auto mt-2">
      {["Html", "Css", "React Js", "Javascript", "Bootstrap", "React Bootstrap", "Express Js", "MongoDB", "Node Js"].map((tech, idx) => (
        <span className="card-detail-badge" key={idx}>{tech}</span>
      ))}
    </div>

    {/* Card Body */}
    <div className="card-body text-center">
      <div className="ad-title m-auto">
        <h5 className="text-uppercase">PONDY PROPERTIES || ADMIN (REALTIME PROJECT WEB)</h5>
      </div>
      <div className="row p-2">
        <div className="col-lg-6 col-sm-12">
          <a className="ad-btn" target="_blank" rel="noreferrer" href="https://ppcpondy.com/process">
            <TbWorldWww size={30} /> Browser
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

          <div className="col-12 col-sm-6 col-md-4 mt-3">
  <div className="card rounded">
    <div className="card-image position-relative">
      <span
        className="card-notif-badge"
        style={{
          position: "absolute",
          left: "-10px",
          top: "-25px",
          background: "#f29f67",
          textAlign: "center",
          borderRadius: "30px",
          color: "black",
          padding: "5px 15px",
          fontSize: "14px",
        }}
      >
        Mern Full Stack
      </span>

      {/* Carousel 1 */}
      <div
        id="carouselRent1"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >

        <div className="carousel-inner rounded">
          <div className="carousel-item active">
            <img src={rent1} className="d-block w-100" alt="Project Screenshot 1" />
          </div>
          <div className="carousel-item">
            <img src={rent2} className="d-block w-100" alt="Project Screenshot 2" />
          </div>
           {/* <div className="carousel-item">
            <img src={ppcUserHome} className="d-block w-100" alt="Project Screenshot 2" />
          </div> */}
        </div>

        {/* Controls for Carousel 1 */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselPondy1"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselRent1"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    {/* Tech Badges */}
    <div className="card-image-overly m-auto mt-2">
      {["Html", "Css", "React Js", "Javascript", "Bootstrap", "React Bootstrap", "Express Js", "MongoDB", "Node Js"].map((tech, idx) => (
        <span className="card-detail-badge" key={idx}>{tech}</span>
      ))}
    </div>

    {/* Card Body */}
    <div className="card-body text-center">
      <div className="ad-title m-auto">
        <h5 className="text-uppercase"> RENT PONDY PROPERTIES || USER (REALTIME PROJECT WEB & APP)</h5>
      </div>
      <div className="row p-2">
        <div className="col-lg-6 col-sm-12">
          <a className="ad-btn" target="_blank" rel="noreferrer" href="https://rentpondy.com/">
            <TbWorldWww size={30} /> Browser
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
            </Roll>  
        </div>



        <div className="row p-2" id="ads" style={{margin: "30px 0px 30px 0px", marginRight:"40px"}} >
        <Roll>
<div className="col-12 col-sm-6 col-md-4 mt-3">
  <div className="card rounded">
    <div className="card-image position-relative">
      <span
        className="card-notif-badge"
        style={{
          position: "absolute",
          left: "-10px",
          top: "-25px",
          background: "#f29f67",
          textAlign: "center",
          borderRadius: "30px",
          color: "black",
          padding: "5px 15px",
          fontSize: "14px",
        }}
      >
        Mern Full Stack
      </span>

      {/* Carousel 2 */}
      <div
        id="carouselRent2"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner rounded">
          <div className="carousel-item active">
            <img src={rentadmin1} className="d-block w-100" alt="Admin Screenshot 1" />
          </div>
          <div className="carousel-item">
            <img src={rentadmin2} className="d-block w-100" alt="Admin Screenshot 2" />
          </div>
        </div>

        {/* Controls for Carousel 2 (Corrected ID) */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselRent2"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselPondy2"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    {/* Tech Badges */}
    <div className="card-image-overly m-auto mt-2">
      {["Html", "Css", "React Js", "Javascript", "Bootstrap", "React Bootstrap", "Express Js", "MongoDB", "Node Js"].map((tech, idx) => (
        <span className="card-detail-badge" key={idx}>{tech}</span>
      ))}
    </div>

    {/* Card Body */}
    <div className="card-body text-center">
      <div className="ad-title m-auto">
        <h5 className="text-uppercase">RENT PROPERTIES || ADMIN (REALTIME PROJECT WEB)</h5>
      </div>
      <div className="row p-2">
        <div className="col-lg-6 col-sm-12">
          <a className="ad-btn" target="_blank" rel="noreferrer" href="https://rentpondy.com/process">
            <TbWorldWww size={30} /> Browser
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

        </Roll>
        </div>
        

        {/* card Designs */}
        <div className="row p-2" id="ads" style={{margin: "30px 0px 30px 0px", marginRight:"40px"}} >
        <Roll>

           <div className="col-12 col-sm-6 col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#f29f67",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"black",
                            padding:"5px 15px",
                            fontSize:"14px"
                        }}> FrontEnd React Js 
                        </span>

                        <img src={mythra} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
                        <span className="card-detail-badge"> Html </span>
                        <span className="card-detail-badge"> Css </span>
                        <span className="card-detail-badge"> React.js </span>
                        <span className="card-detail-badge"> Javascript </span>
                        <span className="card-detail-badge"> Bootstrap </span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase"> Mythra Shopping Website (Recreated)  </h5>
                        </div>
                        <div className="row p-2">
                            <div className="col-lg-6 col-sm-12">
                         <a className="ad-btn"  target="_blank" href="https://www.savitha.online/myntra/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-lg-6 col-sm-12 ">
                          <a className="ad-btn1"  target="_blank" href="https://github.com/Savitha1999/Mythra-Shopping"><IoLogoGithub size={30} /> GitHub </a> 
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mt-2">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#f29f67",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"black",
                            padding:"5px 15px",
                            fontSize:"14px"
                        }}> FrontEnd React Js  
                        </span>

                        <img src={Amazon} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
                        <span className="card-detail-badge"> Html </span>
                        <span className="card-detail-badge"> Css </span>
                        <span className="card-detail-badge"> React.js </span>
                        <span className="card-detail-badge"> Javascript </span>
                        <span className="card-detail-badge"> Bootstrap </span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase"> Amazon Ecommerce Website (Recreated)  </h5>
                        </div>
                        <div className="row p-2">
                            <div className="col-lg-6 col-sm-12">
                         <a className="ad-btn"  target="_blank" href="https://www.savitha.online/amazon/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-lg-6 col-sm-12 ">
                          <a className="ad-btn1"  target="_blank" href="https://github.com/Savitha1999/Amazon-Shop"><IoLogoGithub size={30} /> GitHub </a> 
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#f29f67",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"black",
                            padding:"5px 15px",
                            fontSize:"14px"
                        }}> FrontEnd React.js
                        </span>

                        <img src={Form} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
                        <span className="card-detail-badge"> Html </span>
                        <span className="card-detail-badge"> Css </span>
                        <span className="card-detail-badge"> React.js </span>
                        <span className="card-detail-badge"> Javascript </span>
                        <span className="card-detail-badge"> Bootstrap </span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase"> React Form Validation With Error Message  </h5>
                        </div>
                        <div className="row p-2">
                            <div className="col-lg-6 col-sm-12">
                         <a className="ad-btn"  target="_blank" href="https://www.savitha.online/form/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-lg-6 col-sm-12 ">
                          <a className="ad-btn1"  target="_blank" href="https://github.com/Savitha1999/React-Form"><IoLogoGithub size={30} /> GitHub </a> 
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            </Roll>  
        </div>
        

        <div className="row  p-2" id="ads" style={{margin: "30px 0px 30px 0px", marginRight:"40px"}}>
        <Roll>

        <div className="col-12 col-sm-6 col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#f29f67",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"black",
                            padding:"5px 15px",
                            fontSize:"14px"
                        }}> FrontEnd React.js 
                        </span>

                        <img src={Fita} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
                        <span className="card-detail-badge"> Html </span>
                        <span className="card-detail-badge"> Css </span>
                        <span className="card-detail-badge"> React.js </span>
                        <span className="card-detail-badge"> Javascript </span>
                        <span className="card-detail-badge"> Bootstrap </span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase"> Fita Real Time Project (TeamWork)  </h5>
                        </div>
                        <div className="row p-2">
                            <div className="col-lg-6 col-sm-12">
                         <a className="ad-btn"  target="_blank" href="https://www.savitha.online/fita/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-lg-6 col-sm-12 ">
                          <a className="ad-btn1"  target="_blank" href="https://github.com/Savitha1999/Fita-Realtime-Project"><IoLogoGithub size={30} /> GitHub </a> 
                          </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-4 mt-2">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#f29f67",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"black",
                            padding:"5px 15px",
                            fontSize:"14px"
                        }}>Web Design 
                        </span>

                        <img src={TOUR} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
                        <span className="card-detail-badge"> Html </span>
                        <span className="card-detail-badge"> Css </span>
                        <span className="card-detail-badge"> Javascript </span>
                        <span className="card-detail-badge"> Bootstrap </span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase"> Tours & Travels Website (Recreated)  </h5>
                        </div>

                         <div className="row p-2">
                            <div className="col-lg-6 col-sm-12">
                         <a className="ad-btn"  target="_blank" href="https://www.savitha.online/tours/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-lg-6 col-sm-12 ">
                          <a className="ad-btn1"  target="_blank" href="https://github.com/Savitha1999/Tours-And-Travels"><IoLogoGithub size={30} /> GitHub </a> 
                          </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="col-md-4 mt-2">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#f29f67",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"black",
                            padding:"5px 15px",
                            fontSize:"14px"
                        }}> Web Design
                        </span>

                        <img src={Cementio} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
                        <span className="card-detail-badge"> Html </span>
                        <span className="card-detail-badge"> Css </span>
                        <span className="card-detail-badge"> Javascript </span>
                        <span className="card-detail-badge"> Bootstrap </span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase"> Cement Manufature Website (Recreated)  </h5>
                        </div>
                        <div className="row p-2">
                            <div className="col-lg-6 col-sm-12">
                         <a className="ad-btn"  target="_blank" href="https://www.savitha.online/cementio/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-lg-6 col-sm-12 ">
                          <a className="ad-btn1"  target="_blank" href="https://github.com/Savitha1999/Cementio"><IoLogoGithub size={30} /> GitHub </a> 
                          </div>
                        </div>

                    </div>
                </div>
            </div>
            </Roll>
        </div>


        <div className="row  p-2" id="ads" style={{margin: "30px 0px 30px 0px", marginRight:"40px"}}>
        <Roll>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#f29f67",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"black",
                            padding:"5px 15px",
                            fontSize:"14px"
                        }}> Web Design
                        </span>

                        <img src={Swetha} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
                        <span className="card-detail-badge"> Html </span>
                        <span className="card-detail-badge"> Css </span>
                        <span className="card-detail-badge"> Javascript </span>
                        <span className="card-detail-badge"> Bootstrap </span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase"> Shwtha International Website (Recreated)  </h5>
                        </div>
                        <div className="row p-2">
                            <div className="col-lg-6 col-sm-12">
                         <a className="ad-btn" target="_blank" href="https://www.savitha.online/shweta/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-lg-6 col-sm-12 ">
                          <a className="ad-btn1" target="_blank" href="https://github.com/Savitha1999/Shweta-International"><IoLogoGithub size={30} /> GitHub </a> 
                          </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#f29f67",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"black",
                            padding:"5px 15px",
                            fontSize:"14px"
                        }}> Full Stack 
                        </span>

                        <img src={mythra} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
                        <span className="card-detail-badge"> Html </span>
                        <span className="card-detail-badge"> Css </span>
                        <span className="card-detail-badge"> React.js </span>
                        <span className="card-detail-badge"> Javascript </span>
                        <span className="card-detail-badge"> Bootstrap </span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase"> Mythra Shopping Website (Recreated)  </h5>
                        </div>
                         <a className="ad-btn" href="#"> View </a> 
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#f29f67",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"black",
                            padding:"5px 15px",
                            fontSize:"14px"
                        }}> Full Stack 
                        </span>

                        <img src={mythra} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
                        <span className="card-detail-badge"> Html </span>
                        <span className="card-detail-badge"> Css </span>
                        <span className="card-detail-badge"> React.js </span>
                        <span className="card-detail-badge"> Javascript </span>
                        <span className="card-detail-badge"> Bootstrap </span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase"> Mythra Shopping Website (Recreated)  </h5>
                        </div>
                         <a className="ad-btn" href="#"> View </a> 
                    </div>
                </div>
                 
            </div> */}

            </Roll>
        </div>
        
        </div>
   
        </>
    )
}