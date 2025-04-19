// import React from "react";
// import './contacts.css';
// import { IoMdMailUnread } from "react-icons/io";
// // import { FaPhoneVolume } from "react-icons/fa6";
// // import { IoLogoWhatsapp } from "react-icons/io";
// import { FcCallback } from "react-icons/fc";
// import { FaArrowRight } from "react-icons/fa6";




// import contact from '../../assets/images/contact.png';
// import { BsGithub, BsLinkedin } from "react-icons/bs";
// import {  LightSpeed, Rotate } from "react-reveal";

// export default function Contacts()
// {
//     return(
//         <>
   
//         <div className=" contact  " id="contact" >
//             <div className="card card0 border-0 pt-5 pb-3">
//                 <div className="row m-2">
//                     <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12" >
//                         <div className="card1">
//                             <LightSpeed>
//                             <div className="row border-line">
//                             <h5 className="text-center" style={{marginLeft:"5px"}}> <IoMdMailUnread size={30} style={{marginRight:"5px"}} color="rgb(212, 57, 57)" /> 
//                             <span className="designs" style={{color:"purple"}} > Email_Id : </span>
//                             <span  style={{marginLeft:"18px",fontWeight:"bold"}} >  hsavitha1999@gmail.com </span>
//                             </h5> 
//                             <h5 className="head" style={{marginLeft:"80px"}}> <FcCallback 
//                             size={30}  /> <span className="designs" style={{color:"purple"}}> Phone_No : </span>
//                             <span style={{marginLeft:"10px",fontWeight:"bold"}}> 9080829754 </span>
//                             </h5>   
//                                 <img src={contact} 
//                                 alt="Contact"
//                                 className="image" />
//                             </div>
//                             </LightSpeed>
//                         </div>
//                     </div>

//                     <Rotate>
//                     <div className="col-lg-6 col-md-6">
//                     <div className="card2 d-flex card border-0 px-3 py-4">
//                         <div className="row">
//                             <div className="row text-center mb-3">
                            
//                             <h6> Contact With  
//                                <a href="https://www.linkedin.com/in/savitha-h-393600315"> <BsLinkedin color="blue" size={30} className="ms-2" /> </a>
//                                <a href="https://github.com/Savitha1999"> <BsGithub color="black" size={30} className="ms-2" /> </a>
//                             </h6>
//                             </div>   

                          
                       
//                         <div className="row px-3 mt-2 mb-4">
//                             <div className="line" />
//                                 <small className="or text-center"> OR </small>
//                                 <div className="line" />
//                         </div>
                       
//                         <form action="https://api.web3forms.com/submit" method="POST">
//                         <input type="hidden" name="access_key" value="a6910190-7968-472c-84d6-b33bac338b4c" />


//                         <div className="row px-3">
                        
//                         <input type="text"
//                         name="name"
//                             placeholder="Enter Your Name" />

                          
//                         </div> 

//                         <div className="row px-3 mt-3"> 

//                         <input type="email"
//                         name="email"
//                             placeholder="Enter Your Email_Id" />

                        
//                         </div>
//                         <div className="row px-3 mt-3">

//                             <textarea
//                             placeholder="Enter Your Message" />

                         
                            
//                         </div>
                        
//                         <button className="button mt-3 w-50"  type="submit"> Send Message <FaArrowRight style={{marginLeft:"10px"}} />
//                         </button>
//                         </form>
                    
//                         </div>
                    
//                     </div>
                   
//                     </div>
//                     </Rotate>
//                 </div>
//             </div>

//         </div>      

      
//         </>
//     )
// }




import React, { useState } from "react";
import "./contacts.css";
import { IoMdMailUnread } from "react-icons/io";
import { FcCallback } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa6";
import contact from "../../assets/images/contact.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { LightSpeed, Rotate } from "react-reveal";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSubmitting(true);
      // Handle form submission via Web3Forms or other services
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "a6910190-7968-472c-84d6-b33bac338b4c",
          ...formData,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        })
        .catch(() => {
          alert("An error occurred. Please try again.");
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0 pt-5 pb-3">
        <div className="row m-2">
          {/* Left Section */}
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <LightSpeed>
                <div className="row border-line">
                  <h5 className="text-center" style={{ marginLeft: "5px" }}>
                    <IoMdMailUnread
                      size={30}
                      style={{ marginRight: "5px" }}
                      color="rgb(212, 57, 57)"
                    />
                    <span className="designs ms-1" style={{ color: "purple" }}>
                      Email_Id:
                    </span>
                    <span style={{ marginLeft: "18px", fontWeight: "bold" }}>
                      hsavitha1999@gmail.com
                    </span>
                  </h5>
                  <h5 className="head" style={{ marginLeft: "90px" }}>
                    <FcCallback size={30} />
                    <span className="designs" style={{ color: "purple" }}>
                      Phone.No:
                    </span>
                    <span style={{ marginLeft: "13px", fontWeight: "bold" }}>
                      9080829754
                    </span>
                  </h5>
                  <img src={contact} alt="Contact" className="image" />
                </div>
              </LightSpeed>
            </div>
          </div>
          {/* Right Section */}
          <Rotate>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-3 py-4">
                <div className="row">
                  <div className="row text-center mb-3">
                    <h6>
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/savitha-h-393600315"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://github.com/Savitha1999"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mt-2 mb-4">
                    <div className="line" />
                    <small className="or text-center"> OR </small>
                    <div className="line" />
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </div>

                    <div className="row px-3 mt-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email_Id"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </div>

                    <div className="row px-3 mt-3">
                      <textarea
                        name="message"
                        placeholder="Enter Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </div>

                    <button
                      className="button mt-3 w-50"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <FaArrowRight style={{ marginLeft: "10px" }} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Rotate>
        </div>
      </div>
    </div>
  );
}
