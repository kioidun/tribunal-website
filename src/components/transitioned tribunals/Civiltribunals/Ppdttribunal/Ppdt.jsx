import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/politicalparties.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Ppdt() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >POLITICAL PARTIES DISPUTES TRIBUNAL</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Ms. Desma Atieno Nungo-©</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Mutubwa Wilfred Akhonya</li>
                        <li className='list_member'>Hon. Kiragu Gad Gathu</li>
                        <li className='list_member'>Hon. Theresa Jepkemei Chepkwony</li>
                        <li className='list_member'>Hon. Musau Stephen</li>
                        <li className='list_member'>Hon. Muzna Mohamed Yusuf Jin</li>
                        <li className='list_member'>Hon. Abdirahman Adan Abdikadir</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Political Parties Disputes Tribunal is established under Section 39 of the Political Parties Act No. 11 of 2011, Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>t is composed of; a Chairperson; six other persons, 3 (three) of whom shall be Advocates of the High Court of Kenya of seven years standing and 3 (three) other professionals with outstanding governance, administrative, social, political, economic and other record; a Vice-Chairperson shall be appointed from among the three advocates as stated above.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- Members of a Political Party;</li>
                        <li>-A member of a political party and a political party;</li>
                        <li>-Political parties;</li>
                        <li>-An independent candidate and a political party;</li>
                        <li>-Coalition partners;</li>
                        <li>-Appeals from the decisions of the Registrar of political parties under the Act;</li>
                        <li>-Disputes arising out of party primaries.</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Milimani Law Courts, ground Floor, Chamber 31, P.O.BOX 47382</h3>
                <h2>Contact</h2>
                <h3>Email:-ppdttr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Ppdt
