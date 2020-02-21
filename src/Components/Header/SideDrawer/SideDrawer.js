import React from 'react'
import './SideDrawer.css';
import {Link} from 'react-router-dom'
export default function SideDrawer(props) {

    let drawerClasses='side-drawer';
    if(props.show){
   drawerClasses='side-drawer open'
}    

return (
        <nav className={drawerClasses} >
           <ul>
              <li><Link  to="/"href="#">HOME</Link></li>  
              <li><Link to="/about" href="#">ABOUT</Link></li>     
              <li><Link to="/markets" href="#">MARKETS</Link></li>     
              <li><Link to="/services" href="#">SERVICES</Link></li>     
              <li><Link to="/projects" href="#">PROJECTS</Link></li>     
              <li><Link to="/careers" href="#">CAREERS</Link></li>     
              <li><Link to="/news" href="#">NEWS</Link></li>     
              <li><Link to="/contact-us" href="#">CONTACT US</Link></li>     

        </ul>  
        </nav>
    )
}
