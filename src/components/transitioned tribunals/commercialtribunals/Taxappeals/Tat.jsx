import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/tax.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Tat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >TAX APPEALS TRIBUNAL</h2>
            <h2 className='tribenames'> ChairPerson</h2>
            <h3>Hon. Eric Nyongesa Wafula-©</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Oluoch Rodney Odhiambo</li>
                        <li className='list_member'>Hon. Mutuma Robert Mugambi</li>
                        <li className='list_member'>Hon. Mukuha Grace Gathoni</li>
                        <li className='list_member'>Hon. Delilah Kadzo Ngala
</li>
                        <li className='list_member'>Hon. Jephthah Njagi Karingo
</li>
                        <li className='list_member'>Hon. Mayaka Cynthia Boundi</li>
                        <li className='list_member'>Hon. Kiprotich Kibet Abraham</li>
                        <li className='list_member'>Hon. Elisha Njeru</li>
                        <li className='list_member'>Hon. Bernadette Muthira Gitari</li>
                        <li className='list_member'>Hon. Ogaga Gloria Awuor</li>
                        <li className='list_member'>Hon. Ongeti Walter Juma</li>
                        <li className='list_member'>Hon. Ololchike Sankale Spenser</li>
                        <li className='list_member'>Hon. Diriye Abdullahi Mohamed</li>
                        <li className='list_member'>Hon. Terer Boniface Kibiy</li>
                        <li className='list_member'>Hon. Vikiru Timothy Bunyali</li>
                        <li className='list_member'>Hon. Dr. Komolo Erick Onyango</li>
                        <li className='list_member'>Hon. Makau Martin Mutiso James</li>
                        <li className='list_member'>Hon. Kashindi George Ashionoi</li>
                        <li className='list_member'>Hon. Ng’ang’a Eunice Njeri</li>
                        <li className='list_member'>Hon. Muga Christine Anyango</li>
                    </ul>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>This Tribunal is established under Section 3 of the Tax Appeals Tribunal Act No. 40 of 2013, Laws of Kenya.</h3>
            <h2>Number of Members of the Tribunal</h2>
            <h3>A Chairperson, and not less than fifteen (15) but not more than twenty (20) other members with not less than five (5) and not more than nine (9) who shall be Advocates of the High Court of Kenya.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal hears and determines appeals from a person who disputes the decision(s) of the Commissioner (Kenya Revenue Authority) on a tax matter(s) arising under the tax laws.</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgements</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-taxappealstr@court.go.ke or taxtribunalcbc@gmail.com</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Tat
