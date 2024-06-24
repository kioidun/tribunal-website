import React from 'react'
import Header from '../../headertwo/Header'
import HeaderImage from '../../resources/images/contacttwo.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import EmailForm from '../../email/Email'
import {Link} from 'react-router-dom'
import {contactsall} from '../../resources/data/data'
import Card from '../../ui/Card'

import './contacts.css'

const Contacts = () => {
  return (
   <>
   <Header className="contact_page-title" title = 'Get In Touch' image={HeaderImage}>
   
   </Header>
   <section className="contact">
    <div className="container contact_container">
      <div className='left_side-contact'>
      <div className="contact_wrapper">
      <EmailForm/>
      </div>
      </div>
      <div className='right_side-contact'>
      
       <h2>Address</h2>
       <h4>P.0 Box 30041-00100<br></br>Nairobi</h4>
       <h2>Telephone</h2>
       <h4>+254-730181895/91</h4>
       <h2>Location</h2>
       <h4>Tribunals Secretariat | Milimani Annex, 4 th Floor | Upper Hill Close</h4>
       
       <button>Click to View All Tribunal Contacts</button>
      </div>
      
      
    </div>
   
    {/* <div className="contact_all">
    <h2 className='tribunalcontact'>Tribunals Contacts</h2>
            {
               contactsall.map(({id,image,name,telephone,email,address,location})=>{
                    return(
                        <div className='backgroundcontact' key={id}>
                         
                           <div className='textshow'>
                           <h2 >{name}</h2>
                           <div className='contacts_headings'>
                             <h3 className='contacts_headings-h3' >Email: </h3>
                            <h4>{email}</h4>
                           </div>
                           <div className='contacts_headings'>
                           
                            <h3 className='contacts_headings-h3' >Telephone: </h3>
                            <h4>{telephone}</h4>
                            </div>
                            <div className='contacts_headings'>
                            <h3  className='contacts_headings-h3' > Address: </h3> 
                            <h4>{address}</h4>
                            </div>
                            <div className='contacts_headings'>
                            <h3 className='contacts_headings-h3'> Location: </h3> 
                            <h4>{location}</h4>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div> */}
   </section>
   </>
  )
}

export default Contacts