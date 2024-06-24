import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/competition.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Competition() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >Competition Tribunal
ChairPerson</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Daniel Ochieng Ogola</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Valentine Mwende</li>
                        <li className='list_member'>Hon. Odongo Mark Okeyo</li>
                        <li className='list_member'>Hon. Hillary Marrimoi</li>
                        <li className='list_member'>Hon. Raymond Nyamweya</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 71 of the Competition Act No. 12 of 2010, Cap 504, Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>it is composed of a Chairperson and not less than two members and not more than four other members.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>-Matters referred to it for review of the Competition Authority’s decision on mergers and acquisition under the Act;</li>
                        <li>-Appeals from the decisions of the Authority;</li>
                        <li>-Any other matter arising under the Act;</li>
                        <li>-Any other matter referred to it by a competent court of law;</li>
                      
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3></h3>Kenya Re-Towers, 10th Floor, Upper Hill

                <h2>Contact</h2>
                <h3>Email:-cttr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Competition
