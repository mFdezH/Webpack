import _ from 'lodash';
//import './hello_litelement.js';
import './useless-button.js'


 function component() {
   const element = document.createElement('div');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());