import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/nationalenvironment.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Net() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >NATIONAL ENVIRONMENT TRIBUNAL</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Emmanuel Mumia-Ag. C
</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Ronald O. Allamano</li>
                        <li className='list_member'>Hon. Winnie Tsuma</li>
                        <li className='list_member'>Hon. Duncan Mwangi Kuria</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The National Environment Tribunal is established under Section 125 of the Environmental Management and Coordination Act (EMCA) of 1999, Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>it is composed of; a Chairperson; an Advocate of the High Court of Kenya; a Lawyer with professional qualification in environmental law; and three persons with demonstrated competence in environmental matters including but not limited to land, energy, mining, water, forestry, wildlife and maritime affairs.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- Hearing appeals on environmental matters</li>
                        <li>-Giving NEMA directions on complex maters</li>
                        <li>-Power to appoint Environmental Assessors</li>
                        <li>-Hearing and determination of appeals on forestry matters</li>
                        <li>-Hearing and determination of appeals on wildlife matters</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Ministry of Environment Department of Resource Surveys and Remote Sensing (DRSRS, Popo Road, South C (Belle Vue).</h3>
                <h2>Contact</h2>
                <h3>Email:-nettr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Net
