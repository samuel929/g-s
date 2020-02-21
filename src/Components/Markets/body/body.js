import React from 'react'
import ButtonBlue from '../../Re-usable/Button/BlueButton';
import MarketsCard from '../MarketsFirstArray/MarketsArray';
import BottomSection from '../MarketsFirstArray/MarketArray';

import {Link} from 'react-router-dom';
import './body.scss';

export default function body() {
    return (
        <section>
             <div className="container">

                 <div className="row justify-content-center m-3" style={{padding:'50px'}}>
                     <div className="col-sm-12 container-div" >
                     <p className="markets-p">
                         We offer a complete life-of-project solution that encompasses structural,
                      mechanical, piping and electrical instrumentation (SMP&EI),
                       manufacturing, engineering and design disciplines, 
                     along with the ability to deliver all process and non-process infrastructure, 
                     plant and equipment for surface and underground mining operations.</p>
                    
                     </div>
                 </div>
                    
                    <div className="row m-3" style={{display:'flex',justifyContent:'center'}}>
                        {
                            MarketsCard.map(item=>(
                                <div className="col-sm-4 " >
                                    <div  className="market-card-width">
                                            <img src={item.img} className='card-img-top' alt='...'/>
                                            <div className="card-body">
                                              <h5 className="card-title card-heading-5" >{item.heading5}</h5>
                                                <p className="card-text paragraph-card-text text-center" >{item.paragraph}</p>
                                               <div className="btn__container" >
                                                    <Link to={`${item.url}`}> <ButtonBlue>{item.btnName}</ButtonBlue></Link>
                                              </div>
                                        </div>
                                </div>
                            </div>
                            ))
                        }
                        
                    </div>

                   
                         <div className="container" >
                                <div className="row">                                                                    
                                        {
                                            BottomSection.map(item=>(
                                                <div className="col-6  bottom-cards " >
                                                        <div  className="market-card-width">
                                                            <img src={item.img} class="card-img-top" alt="..."/>
                                                            <div class="card-body">
                                                                <h5 class="card-title card-heading-5" >{item.heading}</h5>
                                                                <p class="card-text  paragraph-card-text text-center">{item.paragraph}</p>
                                                                <div className="btn__container">
                                                            <Link><ButtonBlue >VIEW MORE</ButtonBlue></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            ))
                                        }
                                </div>
                         </div>


                

             </div>
             
        </section>
    )
}


