import React from 'react';
import './NotFound.scss';
import BlueButton from '../Re-usable/Button/BlueButton';
import {Link} from 'react-router-dom';

export default function Page404() {
    return (
        <div>
            <div className="not-found">
                 <div className="container row-alignment">
                     <div className="row ">
                         <div className="col-sm-6">
                            <p className="not-font-size">Hmm… Looks like something went wrong</p>

                            <div className="btn-not-found-display">
                                <div className="button-div-container" >
                                <Link to="/"><BlueButton >GO BACK HOME</BlueButton> </Link>
                                </div>
                                <div className="button-div-container" >
                              <Link><BlueButton >PREVIOUS PAGE</BlueButton> </Link>
                                </div>

                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    )
}
