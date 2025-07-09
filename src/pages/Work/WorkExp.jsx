import React from "react";
import './workExp.css';
import work3 from '../../assets/images/work3.png';
import { Bounce } from "react-reveal";

export default function WorkExp()
{
    return(
        <>
        <Bounce>
        <div className=" work "  id="workexprience">
            <div className="container work-exp">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase" > 
            WORK EXPRIENCE
            </h2>
            <hr/>
        

<div className="row mt-5 " id="ads" style={{margin: "30px 0px 30px 0px"}}>
<div className="col-md-4"></div>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#4646ea",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"white",
                            padding:"5px 15px",
                            cursor:"pointer",
                            fontSize:"14px"
                        }}> Mern FullStack Developer 
                        </span>

                        <img src={work3} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
  <span className="card-details-badge">Legends Tech Solution Pvt. Ltd., Pudhucherry</span>
                    </div>
                    {/* <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="" style={{color:"#138781"}}> 2 Years Exprience </h5>
                        </div>
                    </div> */}

                       <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 style={{ color: "#138781" }}>2 Years Experience</h5>
                      <p className="text-muted" style={{ fontSize: "14px" }}>
                        (2023 - Present)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            </div>
            </div> 
        </div>

        </Bounce>


        </>
    )
}