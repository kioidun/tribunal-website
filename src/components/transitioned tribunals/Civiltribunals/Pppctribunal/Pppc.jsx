import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/publicprivate.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Pppc() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename'>PUBLIC PRIVATE PARTNERSHIP PETITION COMMITTEE</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Prof. Githu Muigai (Prof)-©</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Mohamed Abbey Mohamed</li>
                        <li className='list_member'>Hon. Eunice Lumallas</li>
                        <li className='list_member'>Hon. Sadick Mustapha Doufa</li>
                        <li className='list_member'>Hon. Irene Moraa Ogamba</li>
                        <li className='list_member'>Hon. Eunice Daritsu Fedha</li>
                        <li className='list_member'>Hon. Janice Kotut</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>It is established under Section 75 (1) of the Public Private Partnerships Act No. 14 of 2021.
</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>it is composed of; a Chairperson; four other persons with such relevant knowledge and experience; two persons possessing relevant knowledge and experience; the Cabinet Secretary shall designate a public officer to serve as the Secretary to the Committee.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal is mandated to determine appeals from any aggrieved person against the decisions by the committee, Directorate or a contracting Authority under this Act.</li>
                        <li>-The Tribunal has the mandate to review the decisions from an aggrieved person against the Committee, Directorate or a Contracting Authority regarding a tender process or project management.
</li>                   
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-ppppctr@court.go.ke
</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Pppc
