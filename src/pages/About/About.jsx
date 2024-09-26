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

                <img src={profile} />


                </div>
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                    <h1> About Me </h1>
                    <p>
                    Hello! I’m Savitha H., I graduated with a degree in Computer Applications (BCA) from Thiruvalluvar University in 2020, driven by a strong passion for software development. Recently, I completed a Full-Stack MERN Developer course at FITA Academy in Pondicherry.
                    I have developed a solid foundation in web development technologies including HTML, CSS, JavaScript, React.js, MongoDB, Express.js, Node.js, Bootstrap, and React Bootstrap.
                    I am now seeking an entry-level position where I can leverage my skills to develop and maintain high-quality websites. I am eager to contribute to a dynamic team and apply my problem-solving abilities in a collaborative environment.


                    </p>
                </div>
            </div>
        </div>
        </Bounce>
        {/* </Rotate> */}
        
        </>
    )
}