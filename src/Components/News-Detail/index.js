import React from 'react'
import Image from '../img/Raw.png';
import GreenButton from '../Re-usable/Button/GreenButton';
import Bottom from '../Re-usable/Suggest/index';
import Header from './header';
export default function index() {
    return (
        <div >
            <Header/>
            <div className="container" style={{padding:'80px'}}>
          
               
                <div style={{display:'flex',justifyContent:'center'}} >
                 <p style={{fontSize:'22px',color:'#213B71'}}>G&S Engineering (G&S), recently reached the 10th year of our partnership with the RACQ CQ Rescue Helicopter that provides aeromedical and emergency helicopter rescue services to people across the Central Queensland region including into the Bowen Basin.</p>
                </div>
               
            

    
            
            <div style={{display:'flex',marginTop:'40px',flexWrap:'wrap'}}>
                <div className="col-sm-6">
                            <p style={{fontSize:'16px',color:'grey',lineHeight:'normal'}}><small>G&S Engineering Managing Director Mick Crowe said that the health, safety and wellbeing of our people is the first priority at G&S and supporting community activities with a safety and wellbeing orientation is something he is personally passionate about. “The RACQ CQ Rescue Helicopter is a community service that I am very committed to. It is one of the most worthy charities you can contribute to, but also one you hope you never ever have to call on,” Mr Crowe said.
                                <br/>
                                <br/>
                                “G&S continues to support this charity as our largest sponsorship because it enables anyone in our community, workers, residents and visitors, to access emergency health services when they are most in need of help,” he said.“The thought of such a vital, life-saving service not being there if our people ever need it is just unimaginable.” 
                                <br/>
                                <br/>
                                RACQ CQ Rescue CEO Ian Rowan stated that the service cost more than $8.65 million annually to keep operational and a large portion of this money comes from community donations and sponsorships. “The reality is we rely heavily on sponsorships and donations so the community’s help is vital to keeping the helicopter available 24 hours a day, seven days a week 
                                </small>
                                </p>
                    </div>
                        <div className="col-sm-6" >
                            <img src={Image} className="d-block img-fluid"/>
                        </div>
             </div>

             <div className="row" style={{paddingTop:'10px'}}>
                 <div className="container">
                      <p style={{color:'grey',fontSize:'16px',lineHeight:'16px',paddingLeft:'10px',paddingRight:'10px'}}><small>helicopter available 24 hours a day, seven days a week and ready to respond to emergencies at a moment’s notice, anywhere, anytime,” said Mr Rowan. “We are incredibly fortunate to have such vital, ongoing support from our partners like G&S Engineering which ensures we can have a world-class aeromedical helicopter service on our doorstep and available to anyone throughout Central Queensland in times of crisis.”</small></p>
                 </div>
             </div>
                 


                        <div style={{display:'flex',justifyContent:'space-between',paddingTop:'30px',flexWrap:'wrap'}}>
                        <p style={{color:'#64BC4D'}}><b>To find out more about the RACQ CQ Rescue Service or to make a donation.</b></p>
                         <GreenButton>FIND OUT MORE</GreenButton>
                        </div>

        
            </div>
            <Bottom/>
        </div>
    )
}
