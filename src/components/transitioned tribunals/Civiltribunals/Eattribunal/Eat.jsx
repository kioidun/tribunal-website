import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/educationappeals.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Eat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >Education Appeals Tribunal</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>N/A</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'></li>
                    </ul>   
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 93 of Basic Education Act No. 14 of 2013 (Revised 2017), Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>7</h3>
           <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>discrimination in relation to colour, gender, age, tribe, disability and religion among others;</li>
                        <li>-denial of examinations/examination certificates;</li>
                        <li>-denial of admission to school;</li>
                        <li>--hindrances to learning (unfair exclusion of learners);</li>
                        <li>--examination malpractices.</li>
                        <li>-deregistration of school;</li>
                        <li>-corporal punishment;</li>
                        <li>-gender based violence (bulling);</li>
                        <li>-encroaching, grabbing and settling in school land;</li>
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div> 
                <h2>Location</h2>
                <h3>Kenya Re towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-edutr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Eat
