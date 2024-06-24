import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/businesspremises.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Bprt() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >Business Premises Rent Tribunal</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Cyprian Mugambi Ngutari
</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Chege Charles Gakuhi</li>
                        <li className='list_member'>Hon. James Wahome Ndegwa</li>
                        <li className='list_member'>Hon. Patricia May</li>
                        <li className='list_member'>Hon. Andrew Muma</li>
                       
{/* 
                        <li className='list_member'>Hon. Jackson Rop
</li> */}
                        <li className='list_member'>Hon. Mike M. Makori
</li>
                        <li className='list_member'>Hon. Joyce Akinyi Osodo</li>
                      
                        <li className='list_member'>Hon. Patrick Kiprotich Kitur</li>
                        <li className='list_member'>Hon. Joyce W. Murigi</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>Business Premises Rent Tribunal is established under section 11 of the Landlord and Tenants (Shops, Hotels & Catering Establishments) Act, Cap.301 Laws of Kenya.
</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>a Chairperson, and not less than fifteen (15) but not more than twenty (20) other members with not less than five (5) and not more than nine (9) shall be the Advocates of the high Court.
</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>-To protect the Tenant from arbitrary eviction and exploitation</li>
                        <li>-To ensure that the Landlord gets returns from his investments</li>
                        <li>-Timely hearing and determination of tenancy disputes in controlled tenancies</li>
                        <li>-To create a conducive environment for business to thrive</li>
                        <li>-To handle termination of tenancies in business premises under controlled tenancies.</li>
                        <li>-to issue orders for levying distress in business premises under controlled tenancies.</li>
                     
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-bprttr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Bprt
