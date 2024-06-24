import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/industrialp.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Ipt() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >INDUSTRIAL PROPERTY TRIBUNAL</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Brown Murungi Kairaria-©</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Pauline Mudesh</li>
                        <li className='list_member'>Hon. Betty Chepngetich Bii</li>
                        <li className='list_member'>Hon. Michael Muchemi Ndegwa</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 113 of the Industrial Property Act, 2001, Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>7</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal has appellate jurisdiction which involves hearing appeals from the decisions of the Managing Director of the Kenya Industrial Property Institute (KIPI) regarding different areas of intellectual property namely patents, industrial designs, utility models, technovations and semiconductor technologies.</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Click to View Judgements</h2>
                <h2>Location</h2>
                <h3>Weights & Measures Building, Popo road, off Mombasa Road, South C</h3>
                <h2>Contact</h2>
                <h3>Email:-ipttr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Ipt
