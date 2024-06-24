import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/microandsmallenterprises.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Mset() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >MICRO AND SMALL ENTERPRISES TRIBUNAL</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Dr. Bett Jackson Kiprotich-©</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Robert Katina-(vc)</li>
                        <li className='list_member'>Hon. Joseph Maloba Were
</li>
                        <li className='list_member'>Hon. Annete Gikuya</li>
                        <li className='list_member'>Hon. Alvin Kibet Kirui</li>
                        <li className='list_member'>Hon. Joseph Korir Biwott</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 54 of the Micro and Small Enterprises Act, 2012, Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>it is composed of; a Chairperson and a Vice-Chairperson, an Advocate of the High Court of Kenya, with experience of not less than seven years, two Advocates with expertise in micro and small enterprises matters; and, two persons who have demonstrated exemplary competence in the field of micro and small enterprises management.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- Dispute involving micro and small enterprises;</li>
                        <li>-Commercial disputes involving micro and small enterprises;</li>
                        <li>-Failure to comply with the terms and conditions of allocation of worksites;</li>
                        <li>-Election and management of associations;</li>
                        <li>-Failure to comply with the constitution or rules of a micro and small enterprise association or umbrella organisation;</li>
                        <li>-Unprocedural and illegal allocation, subdivision, subletting of a micro and small enterprise worksite;</li>
                        <li>-Mismanagement and misappropriation of funds;</li>
                        <li>-Any other dispute acceptable by the Tribunal;</li>
                        <li>-Appeals from decisions made by the Micro and small Enterprises Authority</li>
                        <li>-Appeals arising from decisions by the Registrar and/or the CEO of the Authority.</li>
                        <li>-certifying documents;</li>

                        <li>-giving directions on point of law, or matters of unusual importance or complexity referred to it by the Micro and Small Enterprises Authority.</li>
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-msetr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Mset
