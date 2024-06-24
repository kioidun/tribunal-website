import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/capitalmarket.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Cmt() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >CAPITAL MARKETS TRIBUNAL</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Paul Lilan-©</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Constance Gikonyo</li>
                        <li className='list_member'>Hon. Godwin Wangongu</li>
                        <li className='list_member'>Hon. Paul Wanga</li>
                        <li className='list_member'>Hon. Josephine A. Eboko </li>
                    </ul>

                    <h2>COURT LINKS</h2>
                    <h4>https://bit.ly/3m4xLUx</h4>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Capital Markets Tribunal is established under Section 35A of the Capital Market Act No. 17 of 1989, Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>The Tribunal is composed of six members inclusive of the Chairperson</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal hears and determines appeals from any person aggrieved by any directions or decisions given by the authority or by the Investor Compensation Fund Board relating to;</li>
                        <li>- refusing to grant a license;</li>
                        <li>- imposing limitations or restrictions on a licence;</li>
                        <li>- suspending or revoking a licence;</li>
                        <li>- refusing to approve a public offer to securities;</li>
                        <li>- refusing to admit a security to the official list of a securities exchange;</li>
                        <li>- suspending trading of a security on a securities exchange;</li>
                        <li>- requiring the removal of a security from the official list of a securities exchange;</li>
                        <li>- refuse to grant compensation to an investor who has suffered pecuniary loss resulting from failure of a licenced stock broker or dealer;</li>
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Embankment Plaza, 3rd Floor Longonot Road, Upper Hill</h3>
                <h2>Contact</h2>
                <h3>Email:- cmt@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Cmt
