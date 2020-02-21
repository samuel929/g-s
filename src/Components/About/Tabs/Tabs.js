import React from 'react'
import art1 from './artboard-1.svg';
import art2 from './artboard-2.svg';
import art3 from './artboard-3.svg';
import art4 from './artboard-4.svg';
import art5 from './artboard-5.svg';

import './Tabs.scss';

import leader from './LeadershipArray/leadArray';
import BlueButton from '../../Re-usable/Button/BlueButton';
import CircleData from './CirclesArray/CirclesArray';
import Picture from '../../img/Picture1-images/Picture1.png';

import valueCircle from './ValueCircleArray/ValueCircleArray';

export default function Section2() {
    return (
        <div className="tabs ">
            <div >
                <ul className="nav nav-tabs inPageMenu bg-light">
                    <li className="nav-item">
                    <a  className="nav-link active tab-color" data-toggle="tab" href="#home">LEADERSHIP</a>
                    </li>
                    <li className="nav-item">
                    <a  className="nav-link tab-color" data-toggle="tab" href="#menu1">OVERVIEW</a>
                    </li>
                    <li className="nav-item">
                    <a  className="nav-link tab-color" data-toggle="tab" href="#menu2">SUSTAINABILITY</a>
                    </li>
                </ul>

            
                <div className="tab-content">

                    <div id="home" className=" tab-pane active"><br/>

                        <div  className="tab-height" >
                            <div className="pb-5">
                               <div className="row clearfix no-gutters">
                                    <div className="col-md-12 column">
                                        <div className="introSection">
                                              <div className="container">
                                                  <div className="row">
                                                      <div className="col-md-10 mx-auto text-center">
                                                          <div>
                                                              <p className="leads">
                                                              G&S has a clear and effective leadership structure that drives continuous improvement in all areas of our company, across our two operating business units; Maintenance and Construction.
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                        
                        <div  className="section2-tab" >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-10 mx-auto text-center">
                                            <div className="services">
                                                <p className="heading-color-icon">
                                              <b> These business units are supported by our Group Services:</b> 
                                                </p>
                                            </div>
                                        </div>
                                    </div> 
                                  
                                      
                                      
                                   <div className="row py-1">
                                      <div className="col-12 col-md-10 mx-auto">
                                           <div className="row py-4">
                                                <div className="col-6 col-md text-center">
                                                    <div className="icon-round">
                                                         <span>
                                                            <img src={art1} className="img-rounded img-fluid"/>
                                                         </span>
                                                    </div>
                                                    <div className="txt">
                                                    Health, Safety and Environment
                                                    </div>
                                                </div>
                                                <div className="col-6 col-md text-center">
                                                     <div className="icon-round">
                                                         <span>
                                                         <img src={art2} className="img-rounded img-fluid"/>
                                
                                                         </span>
                                                       </div>
                                                       <div className="txt">
                                                       Human Resources
                                                    </div>
                                                    </div>
                                                <div className="col-6 col-md text-center">
                                                      <div className="icon-round">
                                                          <span>
                                                          <img src={art3} className="img-rounded img-fluid"/>
                
                                                             </span>
                                                       </div>
                                                       <div className="txt">
                                                       Finance, Supply, Logistics and Information Services
                                                    </div>
                                                    </div>
                                                <div className="col-6 col-md text-center">
                                                        <div className="icon-round">
                                                             <span>
                                                             <img src={art4} className="img-rounded img-fluid"/>
     
                                                             </span>
                                                        </div>
                                                        <div className="txt">
                                                        Marketing and Communications
                                                    </div>
                                                    </div>
                                                <div className="col-6 col-md text-center">
                                                    <div className="icon-round">
                                                            <span>
                                                            <img src={art5} className="img-rounded img-fluid"/>
     
                                                             </span>
                                                    </div>
                                                    <div className="txt">
                                                    Health, Safety and Environment
                                                    </div>
                                                </div>
                                           </div>
                                      </div>
                                   </div>
                           </div> 
                       </div>
  
                          <div  className="leadership-height">
                          <h1  className="leadership-heading-color text-center" style={{marginTop:'50px'}}>THE LEADERSHIP TEAM</h1>

                              <div className="container aligning-text" >


                                   {
                                    leader.map(item=>(
                                        <div className="row " >
                                              <div className="col-md-12 flexing-column">
                                                  <div  className="img-container-div">
                                                   <img src={item.img} className="img-styling  img-leader-box-shadowing"/>
                                                  </div>

                                                  <div className="col-md-10">
                                                     <h6 className="heading-color-align margin-leader"  >{item.title}</h6>
                                                      <h1 className="align-leaders-name  margin-leader" >{item.name}</h1>
                                                      <p className="text-color-pixel  margin-leader">{item.body}</p>
                                                  </div>

                                             </div>  
                                        </div>
                                    ))

                                   } 
                                
                              </div>
                        </div>
                    </div>



                    <div id="menu1" className=" tab-pane fade"><br/>

                    {/*TOP*/}

                      
                        <div className="row clearfix no-gutters">
                            <div className="col-md-12 column">
                               <div className="introSection">
                                   <div className="container">
                                       <div className="row">
                                           <div className="col-md-10 mx-auto text-center">
                                               <p className="lead">G&S has a clear and effective leadership structure that drives continuous improvement in all areas of our company, across our two operating business units; Maintenance and Construction.</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                            </div>
                                                 
                            
                            </div> 
                            
                            
                            
                            <section  className=" m-3  container-height" >
                           <div className="container">   
                           <div className="row" style={{padding:'50px'}}> 
                           <div className="col-md-6" style={{paddingLeft:'35px'}}>
                                   <img src={Picture} className="img-fluid img-box"/>
                                </div> 
                                <div className="col-md-6 "style={{paddingLeft:'50px'}}>
                                    <div style={{marginLeft:'40px',marginTop:'90px'}}>
                                        <p style={{color:'#213B71',fontSize:'13px'}}><b>PEOPLE</b></p>
                                        <p style={{fontSize:'20px'}}>
                                           Our success is driven by the<br/>
                                           determination and passion of our<br/>
                                           people.
                                        </p>
                                        <p style={{fontSize:'13px',paddingRight:'20px'}} className="text-muted">
                                        Throughout our history we know our people make a difference. Our team is talented, client-focused and empowered to respond safely, efficiently and decisively.
                                      </p>                                    
                                            <div style={{paddingTop:'20px'}}>
                                            <BlueButton>LEADERSHIP</BlueButton>
                                          </div>
                                    </div>
                                </div>
                                </div>
                             </div>
                       </section> 
                        
                    {/*END*/}

                        <div  className="container-background" style={{paddingBottom:'50px'}} >

                             <div className="container">
                                    <h1 className="aligning-everything p-4" >VALUES</h1>

                                    <div className="row">
                                      <div className="col p-3">
                                          <p className="values-text" style={{color:'#7C7C7C',padding:'10px'}} ><b>G&S is built on the foundations of honesty and integrity. 
                                              Our core values are the basis of our culture and driver of <br/> our strategies</b></p>
                                      </div>
                                 </div>

                                    <div className="row row-container row-padding" >
                       <div className="col-6 col-md text-center">
                             <div className="icon-round">
                                   <span>
                                    <img src={art1} className="img-rounded img-fluid"/>
                                   </span>
                                   <h5 className="pt-md-5 pb-5 pb-md-0" style={{color:'#989899'}}>Safety and wellbeing is our first consideration</h5>
                             </div>
                       </div>
                       <div className="col-6 col-md text-center">
                                <div className="icon-round">
                                        <span>
                                        <img src={art2} className="img-rounded img-fluid"/>
                                        </span>
                                        <h5 className="pt-md-5 pb-5 pb-md-0" style={{color:'#989899'}}>We work as a team</h5>
                                    </div>
                       </div>
                       <div className="col-6 col-md text-center">
                               <div className="icon-round">
                                     <span>
                                     <img src={art3} className="img-rounded img-fluid"/>
                                    </span>
                                    <h5 className="pt-md-5 pb-5 pb-md-0" style={{color:'#989899'}}>We listen and communicate</h5>

                              </div>
                       </div>
                       <div className="col-6 col-md text-center">
                                <div className="icon-round">
                                      <span>
                                      <img src={art4} className="img-rounded img-fluid"/>
                                       </span>
                                       <h5 className="pt-md-5 pb-5 pb-md-0" style={{color:'#989899'}}>We go the extra yard</h5>

                                </div>
                       </div>
                       <div className="col-6 col-md text-center">
                            <div className="icon-round">
                                       <span>
                                       <img src={art5} className="img-rounded img-fluid"/>
                                       </span>
                                       <h5 className="pt-md-5 pb-5 pb-md-0" style={{color:'#989899'}}>We don't walk past because we care</h5>

                            </div>
                       </div>
                     </div>
                                 
                                

                                 
                             

                             </div>
                                  
                        </div> 


                      <section  className=" m-3  container-height" >
                           <div className="container">   
                           <div className="row" style={{padding:'50px'}}> 
                                
                                <div className="col-md-6">
                                    <div style={{marginLeft:'40px',marginTop:'90px'}}>
                                        <p style={{color:'#213B71',fontSize:'13px'}}><b>CULTURE</b></p>
                                        <p style={{fontSize:'20px'}}>
                                            G&S is succesful,sustainable and<br/>
                                            an enjoyable place to work, through<br/>
                                            a commitment to our core values<br/>
                                            and the passion of our people.
                                        </p>
                                        <p style={{fontSize:'13px',paddingRight:'20px'}} className="text-muted">
                                        Our teams are made up of people who are committed to their own and others safety and wellbeing. People who want to deliver the highest possible standards and successful outcomes for our clients. We foster a culture of making the workplace enjoyable through a positive approach and a desire to have fun at work.                                        </p>
                                        <div style={{paddingTop:'20px'}}>
                                            <BlueButton>CAREERS</BlueButton>
                                          </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                   <img src={Picture} className="img-fluid img-box"/>
                                </div>   
                             </div>
                             </div>
                       </section>   

                   </div>
                </div>
            </div>
        </div>
    )
}
