import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/sportsdisputes.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Sdt() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >SPORTS DISPUTES TRIBUNAL</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. John Morris Ohaga-©
</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Elynah Wanyika Sifuna Shiveka</li>
                        <li className='list_member'>Hon. Jane Njeri Onyango</li>
                        <li className='list_member'>Hon. Ouko Gabriel John Ohanya</li>
                        <li className='list_member'>Hon. Peter Ochieng Anyango</li>
                        <li className='list_member'>Hon. Gichuru Edmond Kiplagat</li>
                        <li className='list_member'>Hon. Allan Mola Owinyi</li>
                        <li className='list_member'>Hon. Murunga Benard Wafula Munyefu</li>
                    </ul>
                    <h2>COURT LINKS</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://bit.ly/3m4xLUx"   target="_blank"> https://bit.ly/3m4xLUx </Link> 
                    </div>
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>It is established under Section 55 of Sports Act No. 25 of 2013 and Section 31 of the Anti-Doping Act No. 5 of 2016
</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>it is composed of; a Chairperson; two members who must be Advocates of the High Court of Kenya with at least 7(seven) years standing and with experience in legal matters related to sports; at least 2(two) and not more than 6(six) other persons who have experience in sport in any capacity of at least 10(ten) years.
</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- In sports related matters,</li>
                        <li>-In doping cases, the Tribunal hears and determines all cases on anti-doping rule violations on the part of athletes and athlete support personnel and matters of compliance of sports organisations as per the Anti- Doping Act. Tribunal shall not have jurisdiction over Appeals involving International Level athletes or arising from the participation in International Events or national crimes related to doping</li>
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-sportstribunal@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Sdt
