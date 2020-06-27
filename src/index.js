import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

gsap.registerPlugin(ScrollTrigger);
/*const tl = gsap.timeline({
  scrollTrigger:{
    trigger: '.box_1',
    start: "center bottom",
    end: "center top",
    opacity:1,
    markers: true,
    duration: 3,
    scrub: true,
  }
})
*/


gsap.to('.box_1', {
  scrollTrigger:{
    trigger:'.box_1',
    scrub: true,
    start:  'center bottom',
  },
  opacity:1
  })

  const tl = gsap.timeline(
    {scrollTrigger: {
      trigger:'.box_2',
      scrub: true,
      pin: true,
      start: 'top top',
      end: '+500%'
    }}
  )

  tl.from('.box_2',{
    autoAlpha:0
    })

    
serviceWorker.unregister();
