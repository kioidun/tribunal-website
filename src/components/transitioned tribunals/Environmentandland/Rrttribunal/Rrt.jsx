import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/rentrestriction.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Rrt() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >RENT RESTRICTION TRIBUNAL
</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Hillary K. Korir-©
</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Janice Kagendo Ikingi-(vc)</li>
                        <li className='list_member'>Hon. Lorna Lusina</li>
                        <li className='list_member'>Hon. Michael Sande Dallah</li>
                        <li className='list_member'>Hon. Yusuf Abdi Juma</li>
                        <li className='list_member'>Hon. Dorothy Nyaga</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 4 of the Rent Restriction Act Cap 296, Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>it is composed of the Chairperson and a Vice- chairperson and a panel of members distributed across 10 regions in Kenya.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- to determine disputes between Landlords and Tenants for dwelling houses which have standard rent not exceeding Kshs. 2,500;</li>
                        <li>-to make provisions for regulating the increase of rent, right of possession, the exaction of premiums and fixing of standard rents in relation to controlled residential premises and for other purposes incidental thereto or connected with the relationship of Landlord and Tenant of a dwelling house;</li>
                        <li>-to resolve disputes between landlords and tenants of controlled residential tenancies in relation to service charge, repairs of house, recovery or rent arrears, refund of deposits, eviction, recovery of possession;</li>
                        <li>-assessment and determination of standard rents of residential premises;</li>
                        <li>-investigation of complaints where the provisions of the Rent Restriction Act have been flouted.</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Crescent House, Moktar Daddah Street
</h3>
                <h2>Contact</h2>
                <h3>Email:-rrttr@ court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Rrt
