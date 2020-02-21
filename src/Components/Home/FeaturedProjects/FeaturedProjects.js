import React from 'react'
import './FeaturedProjects.scss';
import Layer1 from '../../img/Layer-27.png';
import Khumani from '../../img/Khumani.jpg';
import Renald from '../../img/Renald.jpg';
import BlueButton from '../../Re-usable/Button/BlueButton';
export default function Section4() {
    return (
        <section>
            <div className="container featured-project-padding">
              <h1 className="m-4 text-center">FEATURED PROJECTS</h1>

            <div className="row">
                

    

                <div className="col">
                    <ul className="nav nav-tabs">  
                            <li className="nav-item">
                                <a className="nav-link"  style={{color:'grey'}} data-toggle="tab" href="#home">KHUMANI</a>
                            </li>
                        
                            <li className="nav-item">
                                <a className="nav-link" style={{color:'grey'}} data-toggle="tab" href="#menu1">KIBALI</a>
                            </li>
                        
                            <li className="nav-item">
                                    <a className="nav-link" style={{color:'grey'}} data-toggle="tab" href="#menu2">RENALD DIAMOND PROJECT</a>
                            </li>
                    </ul>




                 <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br/>
                             <div class=" mb-3" >
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                            <img src={Layer1} class="card-img" alt="..."/>
                                               </div>
                                                <div class="col-md-6">
                                                   <div class="card-body card-margins" >
                                                           <h6 class="card-title card-text-colors-size">PROJECT: SHUT DOWN</h6>
                                                               <div className="card-text-size">Caval Ridge Dragline 17 Major<br/> Shutdown</div>
                                                               <br/>
                                                         <div class="card-text text-muted">Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.</div>
                                                        <div className="button-margins" >
                                                         <BlueButton >DOWNLOAD</BlueButton>
                                                     </div>
                                            </div>   
                                     </div>
                               </div>
                          </div>
                  </div>

                    <div id="menu1" className="container tab-pane fade">
                         <div class=" mb-3" >
                                <div class="row no-gutters">
                                              <div class="col-md-6 second-tab-margin" >
                                                    <img src={Renald} class="card-img" alt="..."/>
                                                 </div>
                                                  <div class="col-md-6">
                                                     <div class="card-body card-margins" >
                                                          <h6 class="card-title  card-text-colors-size" >PROJECT: SHUT DOWN</h6>
                                                                 <div className="card-text-size">Caval Ridge Dragline 17 Major<br/> Shutdown</div>
                                                               <br/>
                                                            <div class="card-text text-muted">Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.</div>
                                                                <div className="button-margins">
                                                                <BlueButton >DOWNLOAD</BlueButton>
                                                                </div>
                                                    </div> 
                                       </div>
                                 </div>
                         </div>
                    </div>

                    <div id="menu2" className="container tab-pane fade"><br/>
                            <div class=" mb-3" >
                                        <div class="row no-gutters">
                                            <div class="col-md-6">
                                                    <img src={Khumani} class="card-img" alt="..."/>
                                                    </div>
                                                    <div class="col-md-6">
                                                       <div class="card-body card-margins" >
                                                          <h6 class="card-title" style={{color:'#213B71',fontSize:'13px'}}>PROJECT: SHUT DOWN</h6>
                                                          <div class="card-text text-muted">Caval Ridge Dragline 17 Major<br/> Shutdown</div>
                                                          <br/>
                                                          <div class="card-text text-muted">Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.</div>
                                                        <div className="button-margins">
                                                        <BlueButton >DOWNLOAD</BlueButton>
                                                        </div>
                                                </div> 
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div> 


              </div>
            </div>
       </div>
 </section>
    )
}

