import React from 'react'
import SectionHead from '../sectionhead/sectionhead'
import {FaQuestion} from 'react-icons/fa';
import {faqs} from '../resources/data/data'
import Faq from '../faq/Faq';
import './faqs.css'

const Faqs = () => {
  return (
   <section className="faqs">
    <div className="container faqs_container">
        <SectionHead className="faqs_container-sectionhead" icon ={<FaQuestion/>} title="FAQs"></SectionHead>
        <div className="faqs_wrapper">
            {
                faqs.map(({id,question,answer,url})=>{
                    return <Faq key={id} question={question} answer={answer} url={url}/>
                })
            }
        </div>
    </div>
   </section>
  )
}

export default Faqs