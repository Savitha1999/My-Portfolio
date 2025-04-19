import React from "react";
import './menu.css';
import { Zoom } from "react-reveal";
import {Fade} from 'react-reveal';
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
// import profile from '../../assets/images/Portlogo.png';
import profile from '../../assets/images/MYPROFILE.png';


import { Link } from 'react-scroll';


const Menu = ({toggle}) =>
{
    return (
        <>

        {toggle ? ( 
            <>
            <Zoom>

            <div className="navbar-profile-pic">
            {/* <img src="https://www.kindpng.com/picc/m/140-1403886_office-girl-cartoon-png-transparent-png.png" style={{borderRadius:"50%"}} alt="Profile Pic" /> */}
        
            <img src={profile} style={{borderRadius:"100%"}}   alt="Profile Pic" />

        </div> 

            </Zoom>
           
            <Fade left>
        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link"> 
                    <Link to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                    <IoHome  />
                    Home 
                    </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link"> 
                <Link to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                   <FcAbout  /> 
                   About 
                    </Link> 
                    </div>
            </div>

            <div className="nav-item">
                <div className="nav-link">
                <Link to="education" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                   <FcReading /> Education 
                    </Link> 
                    </div>
            </div>

            <div className="nav-item">
                {/* <div className="nav-link"> <GiSkills style={{fontSize:"20px"}} /> <FcGraduationCap /> Skills </div> */}
                <div className="nav-link">
                <Link to="skills" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                    <FcPositiveDynamic />Technical Skills                     
                    </Link> 
                    </div>
            </div>

            <div className="nav-item">
                <div className="nav-link">
                <Link to="project" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                    <FcVideoProjector /> Projects                      
                    </Link> 
                     </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <Link to="workexprience" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                    <FcPortraitMode /> Work Experience                     
                    </Link> 
                     </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <Link to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                     <FcBusinessContact /> Contact                     
                    </Link> 
                    </div>
            </div>
           
        </div>
      
        </Fade >
        </>) : (
            <> 
            <Fade left>
            <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link" >
                <Link to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                     <IoHome title="Home" />                   
                    </Link> 
                     
                </div>
            </div>

            <div className="nav-item">
                <div className="nav-link">
                <Link to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                    <FcAbout  title="About"/>                   
                    </Link> 
                </div>
            </div>

            <div className="nav-item">
                <div className="nav-link">
                <Link to="education" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                     <FcReading title="Education" />                   
                    </Link> 
                </div>
            </div>

            <div className="nav-item">
                <div className="nav-link">
                <Link to="skills" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                      <FcPositiveDynamic title="Skills" />                   
                    </Link> 
                </div>
            </div>

            <div className="nav-item">
                <div className="nav-link">
                <Link to="project" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                     <FcVideoProjector title="Projects" />                     
                    </Link>                  
                </div>
            </div>

            <div className="nav-item">
                <div className="nav-link"> 
                <Link to="workexprience" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                    <FcPortraitMode title="Work Experience" />                   
                    </Link> 
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link"> 
                <Link to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                     <FcBusinessContact title="Contact" />                  
                    </Link> 
                </div>
                
            </div>
          
        </div>
        </Fade >
 </>
        )}
        
        </>
    )
}

export default Menu;



