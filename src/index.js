import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn,faFacebook,faYoutube,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faPhone,faLocationArrow,faSortDown,faMapMarker } from '@fortawesome/free-solid-svg-icons';
import * as serviceWorker from './serviceWorker';

library.add(faCheckSquare, faLocationArrow,faPhone,faSortDown,faMapMarker,faLinkedinIn,faFacebook,faYoutube,faTwitter)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
