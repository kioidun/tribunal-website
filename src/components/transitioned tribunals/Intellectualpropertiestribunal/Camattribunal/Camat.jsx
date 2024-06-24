import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/camata.png'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Camat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >Communication And Multimedia Appeals Tribunal</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Rosemary Wacera Kuria</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Ruth Adhiambo Okowa</li>
                        <li className='list_member'>Patience Nyange</li>
                        <li className='list_member'>Timothy Tororey</li>
                        <li className='list_member'>Vivienne Atieno</li>
                        <li className='list_member'>Dr. Solomon Wambua Kitonyi</li>
                        <li className='list_member'>Tiberius Nyangau Manyura
</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 102 of the Kenya Information and communication Act No. 2 of 1998, Laws of Kenya</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>the Tribunal shall consist of not more than seven members inclusive of the Chairperson</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>-Complaints from an aggrieved person against any publications or conduct of a journalist or media enterprise;</li>
                        <li>-Appeals from an aggrieved person against decisions and/or actions of the Media council or the Communications Authority of Kenya (‘the Authority);</li>
                        <li>-Complaints by any citizen who is aggrieved by an action or decision of licensees who are telecommunications service providers under the Kenya Information and Communications Act.</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-camat@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Camat
