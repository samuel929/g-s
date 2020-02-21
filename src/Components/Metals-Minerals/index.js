import React from 'react';
import './index.scss';
import Header from './header/index';
import ReUse from '../Re-usable/bottom-nav-three/index';
export default function index() {
    return (

    <div>
        <Header/>
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

        <div className="container">
            <div className="bg-white">
                  <div className="row clearfix no-gutters">
                      <div className="col-md-12 column">
                         <div className="introSection">
                             <div className="container">
                                 <div className="row">
                                    <div className="col-md-10 mx-auto text-center">
                                        <p className="text-lead">
                                        When you want a business partner that speaks your language G&S can help.
                                        </p>
                                    </div>
                                 </div>
                             </div>
                         </div>
                      </div>
                  </div>
            </div>

             <div className="row clearfix no-gutters container-padding" >
                   <div className="col-md-12 column">
                      <div className="bg-white pt-0 marketDetails">
                          <div className="container">
                               <div className="row pb-3">
                                    <div className="col-md-12">
                                       <div className="h4">A partner in value delivery</div>
                                    </div>
                               </div>
                               <div className="row pb-3">
                                    <div className="col-md-6">
                                       <p>From the Pilbara to the Bowen Basin, G&S has played a significant role in the success of mining in Australia for more than twenty-four years. From large-scale design and construction of new mines to machinery overhauls, we have assisted some of the world’s leading mining and resource companies achieve successful operations.</p>
                                    </div>
                                    <div className="col-md-6">
                                      <p>We understand the increased demands facing the bulk commodity industry to minimise cost while increasing productivity and output. That is why we take a personal approach to every project and partner with clients to achieve long-term goals, adding value and (ideally) exceeding expectations every step of the way.</p>
                                    </div>
                               </div>
                          </div>
                      </div>
                   </div>
             </div>
         </div>


         <section className="row clearfix no-gutters paragraph-2-color" >
            <div className="col-md-12 column" >
                <div className="bg-secondary marketDetails secondPara">
                    <div className="container">
                          <div className="row pb-3">
                                <div className="col-md-12">
                                <div class="h4">From pit to port</div>
                                </div>
                          </div>
                          <div className="row pb-3">
                              <div className="col-md-6">
                                <p>We offer a complete life-of-project solution that encompasses structural, mechanical, piping and electrical instrumentation (SMP&EI), manufacturing, engineering and design disciplines, along with the ability to deliver all process and non-process infrastructure, plant and equipment for surface and underground mining operations.</p>
                                <p>We back up our onsite services with comprehensive offsite capabilities including structural, mechanical and electrical manufacturing and overhaul services through</p>
                              </div>
                              <div className="col-md-6">
                              <p>our workshop facilities in Mackay and Biloela in Queensland and Karratha and Newman in the Pilbara region Western Australia.</p>
                              <p>Sound like a ‘one-stop-shop’? It is.</p>
                              <p>For asset owners or JV operators, our pit to port service offering results in a streamlined and more transparent delivery of services.</p>
                              </div>
                          </div>
                    </div>
                </div>
            </div>
         </section>


          <section className="row clearfix no-gutters container-padding" >
             <div className="col-md-12 column">
                <div className="bg-white marketDetails">
                    <div className="container">
                    <div class="row pb-3">
                       <div class="col-md-12">
                          <div class="h4">World-class outcomes delivered safely</div>
                         </div>
                    </div>
                    <div className="row pb-3">
                         <div className="col-md-6">
                             <p>G&S have delivered over 2.5 million man-hours and $500 million on mine construction projects and are a leader in Dragline erection, component manufacture, maintenance and commissioning, having carried out over 2 million man-hours on shutdowns in the last five years, and since 2009 completed over 150 shutdown contracts.</p>
                             <p>As a result of this experience we have established a core team of project managers, supervisors and trades personnel who have worked in the industry for decades, have extensive local knowledge and technical expertise, and a focus on delivering world-class outcomes safely, on time and to budget.</p>
                         </div>
                         <div className="col-md-6">
                           <p>Our experience is extensive, but we are most proud of our ability to form long-term relationships with our clients. Due to our strong client focus and commitment, on numerous projects, we have started out as principal constructors and have gone on to deliver the ongoing operational support and maintenance. This is really what we strive for: building meaningful, trusting partnerships with our clients to deliver mutual success and operational sustainability.</p>
                         </div>
                    </div>
                </div>
               </div>
             </div>
          </section>

          <ReUse/>
    </div>
    )
}
