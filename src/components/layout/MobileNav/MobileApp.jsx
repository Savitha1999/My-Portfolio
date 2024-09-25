import React, { useState } from "react";
import './mobile.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";

import { Link } from 'react-scroll';


export default function MobileApp()
{

    const [open,setOpen]= useState(false);


    //handle open
    const handleOpen =()=>
    {
         
        setOpen(!open);
    }


    //handle menu clicks
    const handleMenuClick = ()=>
    {
        setOpen(false);
    }

    return(
        <>
        
    <div className="mobile-nav">
        <div className="mobile-nav-header">
            {open ? (<AiOutlineMenuFold size={30} className="mobile-nav-icon" onClick={handleOpen} />) 
            : ( <GiHamburgerMenu size={30} className="mobile-nav-icon" onClick={handleOpen} />) }
        <span className="mobile-nav-title"> My Portfolio App </span>
        </div>
        {open && (
            <div className="mobile-nav-menu">
            <div className="nav-items">
                <div className="nav-item">
                    <div className="nav-link"> 
                        <Link to="home" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}
                        onClick={handleMenuClick}
                        >
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
                        duration={100}
                        onClick={handleMenuClick}>
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
                        duration={100}
                        onClick={handleMenuClick}>
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
                        duration={100}
                        onClick={handleMenuClick}>
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
                        duration={100}  
                        onClick={handleMenuClick}>
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
                        duration={100}
                        onClick={handleMenuClick}>
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
                        duration={100}
                        onClick={handleMenuClick}>
                         <FcBusinessContact /> Contact                     
                        </Link> 
                        </div>
                </div>
               
            </div>          
            </div>

        ) }

    </div>        
        
        
        </>
    )
}