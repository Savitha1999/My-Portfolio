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
        
        {/* card Designs */}
        <div className="row p-2" id="ads" style={{margin: "30px 0px 30px 0px", marginRight:"40px"}} >
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
                            <div className="col-6">
                         <a className="ad-btn" href="https://www.savitha.online/myntra/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-6 ">
                          <a className="ad-btn1" href="https://github.com/Savitha1999/Mythra-Shopping"><IoLogoGithub size={30} /> GitHub </a> 
                          </div>
                        </div>
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
                            <div className="col-6">
                         <a className="ad-btn" href="https://www.savitha.online/amazon/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-6 ">
                          <a className="ad-btn1" href="https://github.com/Savitha1999/Amazon-Shop"><IoLogoGithub size={30} /> GitHub </a> 
                          </div>
                        </div>
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
                            <div className="col-6">
                         <a className="ad-btn" href="https://www.savitha.online/form/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-6 ">
                          <a className="ad-btn1" href="https://github.com/Savitha1999/React-Form"><IoLogoGithub size={30} /> GitHub </a> 
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
                            <div className="col-6">
                         <a className="ad-btn" href="https://www.savitha.online/fita/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-6 ">
                          <a className="ad-btn1" href="https://github.com/Savitha1999/Fita-Realtime-Project"><IoLogoGithub size={30} /> GitHub </a> 
                          </div>
                        </div>
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
                            <div className="col-6">
                         <a className="ad-btn" href="https://www.savitha.online/tours/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-6 ">
                          <a className="ad-btn1" href="https://github.com/Savitha1999/Tours-And-Travels"><IoLogoGithub size={30} /> GitHub </a> 
                          </div>
                        </div>

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
                            <div className="col-6">
                         <a className="ad-btn" href="https://www.savitha.online/cementio/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-6 ">
                          <a className="ad-btn1" href="https://github.com/Savitha1999/Cementio"><IoLogoGithub size={30} /> GitHub </a> 
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
                            <div className="col-6">
                         <a className="ad-btn" href="https://www.savitha.online/shweta/"><TbWorldWww size={30} /> Browser </a> 
                         </div>
                         <div className="col-6 ">
                          <a className="ad-btn1" href="https://github.com/Savitha1999/Shweta-International"><IoLogoGithub size={30} /> GitHub </a> 
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