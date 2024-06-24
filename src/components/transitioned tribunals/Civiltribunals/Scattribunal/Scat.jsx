import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/statecorporations.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Scat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >STATE CORPORATIONS APPEALS TRIBUNAL</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3></h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'></li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>It is established under Section 22 of the State Corporation Act Cap 446, Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>of members of the Tribunal • it is composed of three members inclusive of the Chairperson.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li> Hears appeals from any party who is aggrieved by a disallowance or surcharge by the Inspector-General of State Corporations.</li> 
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Re- insurance Plaza, 7th Floor, Aga Khan Walk/ Taifa road</h3>
                <h2>Contact</h2>
                <h3>Email:-info@scat.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Scat
