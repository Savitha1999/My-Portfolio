import React from "react";
import './tech.css';
import { TechnologyList } from "../../utils/TechnologyList";
import { Rotate , Fade} from 'react-reveal';

export default function Technology()
{
    return(
        <>

        <div className="container teachskill m-3 " style={{marginTop:"60px",paddingLeft:"40px" }}  id="skills" >
         
        <Rotate>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase" style={{color:"#138781", fontWeight:"bold"}}> Technical Skills </h2>
        <hr style={{color:"#138781", margin:"10px auto", width:"400px" }} />
        <p className="pb-3 text-center"> 
            👉 Including Programming Languages , Front-end and Back-end Tools , and APIs 
        </p>
        </Rotate>
     
        <div className="row  p-2 " style={{marginLeft:"30px",marginRight:"30px"}} >
            {TechnologyList.map((tech) => (
                <Fade left>
                <div key={tech._id} className="col-md-3">
                    <div className="card m-2">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex justify-content-center">
                                <div className="align-self-center">
                                <tech.icon className="tech-icon"   /> 
                                </div>
                                <div className="media-body">
                                    <h5> {tech.name} </h5>

                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            ))}
        </div>
        </div>

        

        </>
    )
}







