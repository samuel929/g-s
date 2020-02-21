import React from 'react';
import './Block-elements.scss';
import YellowButton from '../../Re-usable/Button/YellowButton';
import GreenButton from '../../Re-usable/Button/GreenButton';
import BlueButton from '../../Re-usable/Button/BlueButton';  
import {Link} from 'react-router-dom';
  
export default function Section2() {
    return (
        <section className="intro-section">
             <div className="container">
  
                   <div className="introSection">
                        <div className="container">
                            <div className="row">
                                 <div className="col-md-10 mx-auto text-center">
                                     <p className="lead">
                                     From electrical and mechanical component overhauls for surface and underground equipment through to billion-dollar mine and port construction projects, G&S Engineering offer comprehensive services that encompass the project lifestyle from construction, through maintenance and optimization to final decommissioning and deconstruction.
                                     </p>
                                 </div>
                            </div>
                        </div>
                   </div>


                   <div className="row row-margin-home" >
   
                        <div className="col-md-4">
                            <div className="parent">
                                <div className="card--yellow "/>
                                    <div className="card-body">
                                        <div>
                                         <h6 className="card-title">SERVICES</h6>
                                         <h6 className=" mb-4 service-font " >Calibre agrees to sell<span className="g-s-yellow"> G&S Engineering</span> to<span className="g-s-yellow" > DRA</span></h6>
                                         </div>
                                         <Link to="/services"><YellowButton className="btn-style">READ MORE</YellowButton>   </Link>   
                                    </div>                                     
                             </div>
                        </div>

                        <div className="col-md-4">
                            <div className="parent">
                               <div className=" card--green"/>
                                   <div className="card-body">
                                        <div className="content">
                                        <h6 className="card-title ">ABOUT US</h6>   
                                        <h6 className=" mb-4 service-font" ><span className="get-to-know-color" >Get to know </span>us a little better</h6>                                    
                                        </div>
                                      <Link to="/about"><GreenButton className="btn-style">VIEW ABOUT US</GreenButton>   </Link>      
                                 </div>
                             </div>
                        </div>

                        <div className="col-md-4">
                            <div className="parent">
                                <div className=" card--blue"/>
                                        <div className="card-body">
                                            <div className="content">
                                                <h6 className="card-title ">CAREERS</h6>   
                                                <h6 className=" mb-4 service-font" >Become one of the team,<span className="color-blue">join us</span></h6>                                      
                                            </div>
                                          <Link to="/careers"><BlueButton >VIEW ABOUT US</BlueButton> </Link>  
                                    </div>
                                </div>
                         </div>

                   </div>


             </div>
        </section>
    )
}



