import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from 'react-icons/md';
import './education.css';
import { Fade } from "react-reveal";

export default function Educations()
{
    return(
        <>
        <Fade top>
        <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase" > 
        EDUCATION DETAILS
        </h2>
        <hr/>

        <VerticalTimeline>

        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'white', color: 'black' }}
           contentArrowStyle={{ borderRight: '7px solid  white' }}
           date="2024"
           iconStyle={{ background: '#138781', color: '#fff' }}
           icon={<MdSchool />}
        >
        <h3 className="vertical-timeline-element-title">Mern FullStack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle mt-2"> FITA Academy, Pudhucherry. </h4>   
        </VerticalTimelineElement>

        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'white', color: 'black' }}
           contentArrowStyle={{ borderRight: '7px solid  white' }}
           date="2017-2020"
           iconStyle={{ background: '#138781', color: '#fff' }}
           icon={<MdSchool />}
        >
        <h3 className="vertical-timeline-element-title"> BCA (Computer Application's) </h3>
        <h4 className="vertical-timeline-element-subtitle mt-2"> Thiruvalluvar University, Vellore. </h4>   
        </VerticalTimelineElement>


 
        </VerticalTimeline>


        </div>
        </Fade>
        </>
    )
}