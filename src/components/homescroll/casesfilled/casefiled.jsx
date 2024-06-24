import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoLockClosedSharp } from "react-icons/io5";
import { useState, useEffect } from 'react'
import {useSpring, animated} from 'react-spring';
import "./casefiled.css";

import Aos from 'aos'
import 'aos/dist/aos.css'

function Casefilled() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
//   const [valueDisplays, setValueDisplay] = useState('.num');
//   const [interval, setValueInterval] = useState('5000');
// let valueDisplays = document.querySelectorAll('.num')
// let interval = 5000;

// useEffect(()=>{

// })

// valueDisplays.forEach((valueDisplay)=>{
//   let startValue = 0;
//   let endValue= parseInt(valueDisplay.getAttribute("data-val"));

//   let duration= Math.floor(interval /endValue)
//   let counter = setInterval(function (){
//     startValue +=1;
//     valueDisplay.textContent=startValue;
//     if(startValue == endValue){
//       clearInterval(counter)
//     }
//   },duration)
// })

function Number({n}){
  const {number} = useSpring({
    from:{number:0},
    number:n,
    delay:200,
    config:{mass:1,tension:20,friction:10}
  });
  return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
}

  return (
    <section  class="wrapper">
      <h1 data-aos='fade-up' data-aos-duration='2500'>cases filed</h1>
      <div data-aos='fade-up' data-aos-duration='2500' className="wrapper-two">
      <div className="container case-filed">
        <div className="i">
          <FaFileAlt />
        </div>
        <span className="num" data-val="400">
          <Number n={100000}/>
        </span>
        <span className="text">Cases filed</span>
      </div>
      <div className="container case-filed">
        <div className="i">
          <MdOutlinePendingActions />
        </div>
        <span className="num" data-val="400">
        <Number n={5000}/>
        </span>
        <span className="text">Cases pending</span>
      </div>
      <div className="container case-filed">
        <div className="i">
          <IoLockClosedSharp />
        </div>
        <span className="num" data-val="400">
        <Number n={50000}/>
        </span>
        <span className="text">Cases closed</span>
      </div>
      </div>
    </section>
  );
}

export default Casefilled;
