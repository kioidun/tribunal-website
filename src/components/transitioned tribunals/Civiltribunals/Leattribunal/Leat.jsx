import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/legalandeducation.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Leat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' > LEGAL EDUCATION APPEALS TRIBUNAL</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3> Hon. Rose W.N Mbanya-©</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'> Hon. Stephen Gitonga</li>
                        <li className='list_member'>Hon. Raphael Kigamwa</li>
                        <li className='list_member'>Hon. Eunice Arwa</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 29(1) of the Legal Education Act No.27 of 2012, [ Rev. 2015] Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>it is composed of; • a Chairperson,one person who shall be an Advocate of the High Court of Kenya of at least seven years standing,three persons who demonstrate legal competence; and • a Registrar who shall be an advocate of the High Court with at least five years’ experience.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal hears appeals made to it by any aggrieved person against the decisions of the Council of Legal Education or any committee or officer of the Council or any matter relating to the Legal Education Act. Appeals from a decision of the Council to;</li>
                        <li>-Refuse to grant a license;</li>
                        <li>-Impose conditions;</li>
                        <li>-isolation and quarantine based on HIV status;</li>
                        <li>-Suspend or revoke a license</li>
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-leat@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Leat
