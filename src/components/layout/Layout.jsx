import React ,{useState} from "react";
import Home from "../../pages/Home/Home";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import './layout.css';
import Menu from "../Menus/Menu";


const Layout = () =>
{
    const [toggle,setToggle] = useState(true);


    // Change Toggle
    const handleToggle = () =>
    {
        setToggle(!toggle);
    }


    return (
        <div className="sidebar-section">
            <div className={toggle ? "sidebar-toggle  sidebar"  :  "sidebar"}>
                <div className="sidebar-toggle-icons">
                
                <p onClick={handleToggle}>
                    {
                       toggle? (<MdOutlineKeyboardDoubleArrowLeft style={{fontSize:"40px"}} />
                       ) : (<MdOutlineKeyboardDoubleArrowRight style={{fontSize:"40px"}} />)
                    }
                </p>
                </div>
                <Menu toggle={toggle} />
            </div>  
            <div className="container">

                <Home />

            </div>

        </div>
    )
}

export default Layout;