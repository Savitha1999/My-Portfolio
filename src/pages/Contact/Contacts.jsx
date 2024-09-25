import React from "react";
import './contacts.css';
import { IoMdMailUnread } from "react-icons/io";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { IoLogoWhatsapp } from "react-icons/io";
import { FcCallback } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa6";




import contact from '../../assets/images/contact.png';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {  LightSpeed, Rotate } from "react-reveal";

export default function Contacts()
{
    return(
        <>
   
        <div className=" contact  " id="contact" >
            <div className="card card0 border-0 pt-5 pb-3">
                <div className="row m-2">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12" >
                        <div className="card1">
                            <LightSpeed>
                            <div className="row border-line">
                            <h5 className="text-center" style={{marginLeft:"5px"}}> <IoMdMailUnread size={30} style={{marginRight:"5px"}} color="rgb(212, 57, 57)" /> 
                            <span className="designs" style={{color:"purple"}} > Email_Id : </span>
                            <span  style={{marginLeft:"18px",fontWeight:"bold"}} >  hsavitha1999@gmail.com </span>
                            </h5> 
                            <h5 className="head" style={{marginLeft:"80px"}}> <FcCallback 
                            size={30}  /> <span className="designs" style={{color:"purple"}}> Phone_No : </span>
                            <span style={{marginLeft:"10px",fontWeight:"bold"}}> 9080829754 </span>
                            </h5>   
                                <img src={contact} 
                                alt="Contact"
                                className="image" />
                            </div>
                            </LightSpeed>
                        </div>
                    </div>

                    <Rotate>
                    <div className="col-lg-6 col-md-6">
                    <div className="card2 d-flex card border-0 px-3 py-4">
                        <div className="row">
                            <div className="row text-center mb-3">
                            
                            <h6> Contact With  
                               <a href="https://www.linkedin.com/in/savitha-h-393600315"> <BsLinkedin color="blue" size={30} className="ms-2" /> </a>
                               <a href="https://github.com/Savitha1999"> <BsGithub color="black" size={30} className="ms-2" /> </a>
                            </h6>
                            </div>   

                             {/* <h5 className="text-center mb-3 "> <FcCallback 
                            size={30}  /> <span className="design" style={{color:"purple"}}> Phone_No : </span>
                            <span style={{marginLeft:"10px",fontWeight:"bold"}}> 9080829754 </span>
                            </h5>                    */}
                       
                        <div className="row px-3 mt-2 mb-4">
                            <div className="line" />
                                <small className="or text-center"> OR </small>
                                <div className="line" />
                        </div>
                       
                        <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="a6910190-7968-472c-84d6-b33bac338b4c" />


                        <div className="row px-3">
                        
                        <input type="text"
                        name="name"
                            placeholder="Enter Your Name" />

                            {/* <h5> <IoMdMailUnread size={30} color="rgb(212, 57, 57)" /> <span className="design" style={{color:"purple"}} > Email_Id : </span>
                            <span  style={{marginLeft:"13px",fontWeight:"bold"}} >  hsavitha1999@gmail.com </span>
                            </h5> */}
                        </div> 

                        <div className="row px-3 mt-3"> 

                        <input type="email"
                        name="email"
                            placeholder="Enter Your Email_Id" />

                        {/* 
                            <h5> <FcCallback 
                            size={30}  /> <span className="design" style={{color:"purple"}}> Phone_No : </span>
                            <span style={{marginLeft:"10px",fontWeight:"bold"}}> 9080829754 </span>
                            </h5> */}
                        </div>
                        <div className="row px-3 mt-3">

                            <textarea
                            placeholder="Enter Your Message" />

                            {/* <h5> <IoLogoWhatsapp 
                            size={30} color="green" /> <span className="design " style={{color:"purple"}} > WhatsApp : </span>
                            <span style={{marginLeft:"10px",fontWeight:"bold"}}> 9080829754 </span>
                            </h5> */}
                            
                        </div>
                        
                        <button className="button mt-3 w-50"  type="submit"> Send Message <FaArrowRight style={{marginLeft:"10px"}} />
                        </button>
                        </form>
                    
                        </div>
                    
                    </div>
                   
                    </div>
                    </Rotate>
                </div>
            </div>

        </div>      

      
        </>
    )
}