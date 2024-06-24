import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/nationalcivilaviation.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Ncaart() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >NATIONAL CIVIL AVIATION ADMINISTRATIVE REVIEW TRIBUNAL</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Dr. Njaramba Gichuki-©</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Valentine Khaminwa Vice Chair</li>
                        <li className='list_member'>Hon. Peter Muholi-Tribunal Deputy Registrar</li>
                        <li className='list_member'>Hon. Hassan Issack</li>
                        <li className='list_member'>Hon. John Kiplagat Kiili</li>
                        <li className='list_member'>Hon. John Ekale</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 66 of the Civil Aviation Act No. 21 of 2013 (Revised in 2014).</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3> it is composed of; a Chairperson; a Deputy Registrar of the Judiciary; and Four other persons with management and technical experience of not less than ten years in the field of civil aviation.
</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- grant variation, suspension, revocation, denial or imposition of limitation a license, a certificate or approval the Act or regulation;</li>
                        <li>-any fees to be paid under the Act or regulation;</li>
                        <li>-consumer protection: rights violation, deceptive practice, ticket refund, baggage liability, fight delay;</li>
                        <li>-Enforcement actions including denial or delayed services</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Transcom House, 3rd Floor, Ngong Road</h3>
                <h2>Contact</h2>
                <h3>Email:-ncaartr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Ncaart
