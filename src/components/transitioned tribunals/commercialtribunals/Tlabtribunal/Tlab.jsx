import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/transport.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Tlab() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >TRANSPORT LICENSING APPEALS BOARD</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Adrian Kamotho Njenga-©</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Joseph Mcdonald Oduor</li>
                        <li className='list_member'>Hon. Maryan Hajir Abdikadir</li>
                        <li className='list_member'>Hon. Lilian Waithira Muiruri</li>
                        <li className='list_member'>Hon. James Nthiooi Ngomeli</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>This Tribunal is established under Section 38 and 39 of the National Transport and Safety Authority Act No. 33 of 2012 (Revised on 2014), Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>The Appeals Board shall consist of a chairperson and four other members appointed by the Cabinet Secretary.
</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- To hear appeals against decisions of the National Transport and Safety Authority (NTSA) relating to: issuance of a license; revoking a license; and suspending a license</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Transcom House, 2nd Floor, Room 227, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-ceo.tlab@gmail.com, tlabtr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Tlab
