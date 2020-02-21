import React from 'react'
import './Toolbar.css';
import Logo from '../G-sbrandlogo.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import {Link} from 'react-router-dom';
import Dra from './dra-logo.png';
 const Toolbar=(props)=> {
    return (
        <header className="toolbar">
               <div className="spacer"></div>

            <nav className="toolbar__navigation">
                <div className="tool__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>

                <div className="toolbar__logo"><a href="/" style={{marginLeft:'10px',marginTop:'5px'}}><img src={Logo} /></a></div>
               <div className="spacer"></div>


                 <div className="toolbar_navigation-items">
                     <ul >
                         <li><Link to="/" href="#">HOME</Link></li>
                         <li><Link to="/about" href="#">ABOUT</Link></li>
                         <li><Link to="/markets" href="#">MARKETS</Link></li>
                         <li><Link to="/" href="#">SERVICES</Link></li>
                         <li><Link to="projects" href="#">PROJECTS</Link></li>
                         <li><Link to="/careers" href="#">CAREERS</Link></li>
                         <li><Link to="/news" href="#">NEWS</Link></li>
                         <li><Link to="contact-us" href="#">CONTACT US</Link></li>

                     </ul>
                 </div>
            </nav>
        </header>
    )
}

export default Toolbar