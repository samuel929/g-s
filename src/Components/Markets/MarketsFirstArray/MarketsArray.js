import  Group1 from '../metals-minerals.jpg';
import Group2 from '../infrastructure.jpg';
import Group3 from '../industrial.jpg';
import {Link} from 'react-router-dom';

const market=[
  {
   img:Group1,
   heading5:'METALS & MINERALS',
   paragraph:'We offer a complete life-of-project solution that encompasses structural, mechanical.',
   url:'/metals-minerals',
   btnName:'VIEW MORE'
  },
  {
    img:Group2,
    heading5:'INFASTRUCTURE',
    paragraph:'Within the resources, industrial and commercial sectors, we offer capability in the construction',
    url:"/projects",
    btnName:'VIEW MORE'
  },
  {
    img:Group3,
   heading5:'INDUSTRIAL',
   paragraph:'We offer tailored made solutions to heavy industry with specific experience.',
   url:"/news",
   btnName:'VIEW MORE'
  }
]


export default market;





