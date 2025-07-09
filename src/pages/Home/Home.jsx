import React from "react";
import { useTheme } from "../../context/ThemeContext";
import './home.css';
import Typewriter from 'typewriter-effect';
// import Resume from "../../assets/docs/resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {Fade} from 'react-reveal';
import cv from "../../assets/images/savitha_cv.pdf";
import fita from '../../assets/images/Fita .pdf';




const Home = () =>
{

    const {theme,setTheme} = useTheme()

    // Handle Theme
    const handleTheme= () =>
    {
        setTheme( (prevState) => (prevState === "light" ? "dark" : "light" ) )
    }

    return (
        <>

        <div className="container-fluid home-container" id="home">
            <div className="theme-btn" onClick={handleTheme}>
                {theme === "light" ? (<BsFillMoonStarsFill size={30} />) : (<BsFillSunFill size={30} />)  }
            </div>
            <div className="container  home-content">
                <Fade right>
                <h2 className="p-3 mt-5" > Hi 🙋‍♀️ I'm a Savitha </h2>
                <h1 className="mt-2 p-2">
                <Typewriter
                options={{
                strings: ['Mern FullStack Developer !' , 'Web Developer !', 'React FrontEnd Developer !'],
                autoStart: true,
                loop: true,
                }}
                />
                </h1>
                
                </Fade>

                <Fade bottom>
                <div className="home-buttons mt-3">
                    {/* <a className="btn btn-hire" href="https://whatsapp.com/send?phone=1234567890"
                    rel="noreferrer"
                    target="_blank"
                     > Hire Me </a> */}
                    {/* <button className="btn btn-hire"> Hire Me  </button> */}
                    <a className="btn btn-cv bg-primary m-3"  href={cv} download="resume"> My Resume</a>
                    <a className="btn btn-cv bg-info m-3"  href={fita} download="Certificate"> Course Certificate </a>

                </div>
                </Fade>
            </div>
        </div>




        </>
    )
}

export default Home;








// import React from "react";
// import { useTheme } from "../../context/ThemeContext";
// import './home.css';
// import Typewriter from 'typewriter-effect';
// // import Resume from "../../assets/docs/resume.txt";
// import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
// import {Fade} from 'react-reveal';
// import resume from "../../assets/images/Savi_CV.pdf";

  
//  const Home = () => { 

//    const handleDownload = () => { 
//      const link = document.createElement('a'); 
//      link.href = resume; 
//      link.download = 'Savi_CV.pdf'; 
//      link.click(); 
//    }; 
  
//    return ( 
//      <div style={{ textAlign: 'center', padding: '20px' }} id='resume'> 
//        {/* Top Download Button */} 
//        <button className='btn-primary' onClick={handleDownload} style={{ marginBottom: '20px', border:'none', height:'60px', width:'auto', padding:'15px',boxSizing:'border-box', background:'#397ec0' }}> 
//          Download Resume 
//        </button> 
  
//        {/* Display Resume PDF */} 
//        <div> 
//          <iframe 
//            src={resume} 
//            width="80%" 
//            height="600px" 
//            title="Resume PDF" 
//            style={{ border: 'none', marginBottom: '20px' }} 
//          /> 
//        </div> 
  
//        {/* Bottom Download Button */} 
//        <button className='btn-primary' onClick={handleDownload} style={{ marginTop: '20px', border:'none', height:'60px', width:'auto', padding:'15px',boxSizing:'border-box' }}> 
//          Download Resume 
//        </button> 
//      </div> 
//    ); 
//  }; 
  
//  export default Home;
