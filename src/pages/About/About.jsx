import React from "react";
import './about.css';
import { Bounce } from "react-reveal";
// import logo from '../../assets/images/My Logo.png';
import profile from '../../assets/images/Portlogo.png';

export default function About()
{
    return(
        <>
        
        {/* <Rotate> */}
        <Bounce>
        <div className="about" id="about">
            <div className="row">
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                    {/* <img src="https://www.kindpng.com/picc/m/140-1403886_office-girl-cartoon-png-transparent-png.png"
                    alt="Profile-pic" /> */}
                    {/* <img src={logo} alt="My Pic" /> */}

                    {/* src="https://t3.ftcdn.net/jpg/04/59/25/62/240_F_459256228_UpLGOVfRyZr0htSbYUlpdLyiJaTPDpqr.jpg" */}
                    {/* https://t3.ftcdn.net/jpg/06/21/63/90/240_F_621639043_RoLZyYTG8dBqjCNrlKXMKDwzwQorevcP.jpg */}
               
                    {/* https://t4.ftcdn.net/jpg/06/01/29/15/240_F_601291561_gZSshy6s6ALh89eso6NGlhvB6zFkA0on.jpg */}
               
                    {/* https://t4.ftcdn.net/jpg/04/49/57/99/240_F_449579945_jZUYr5vWN74jzny51R52Oj3RsHKfe0UU.jpg */}
               
                {/* https://t3.ftcdn.net/jpg/09/48/83/74/240_F_948837440_so22Z7SIcPO71USweYxagGGPd5T3hJLD.jpg */}

                <img src={profile} alt="My Profile" />


                </div>
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                    <h1> About Me </h1>
                    <p>
              Hello! I'm Savitha H., a passionate and detail-oriented MERN Stack Developer with a Bachelor’s degree in Computer Applications (BCA) from Thiruvalluvar University, graduating in 2020.

I have 2 years of professional experience as a MERN Full Stack Developer at Legends Tech Solution Pvt. Ltd., Puducherry, where I was involved in designing, developing, and maintaining full-stack web applications. I worked closely with cross-functional teams to build scalable, responsive, and secure solutions tailored to business needs.

My technical expertise includes HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Bootstrap, and React Bootstrap. I take pride in writing clean, maintainable code, implementing real-time features, and delivering high-performance applications.

I am now seeking a new opportunity where I can further enhance my skills and contribute to innovative projects within a dynamic development team. I am committed to solving real-world problems through smart and efficient web technologies.


                    </p>
                </div>
            </div>
        </div>
        </Bounce>
        {/* </Rotate> */}
        
        </>
    )
}