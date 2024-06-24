import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import './faq.css'

const Faq = ({question,answer,url}) => {
    const[isAnswerShowing,setIsAnswerShowing] = useState(false)
  return (
    <article className="faq" onClick={()=>setIsAnswerShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
        <button className="faq_icon">
            {
                isAnswerShowing ? <AiOutlineMinus/>:<AiOutlinePlus/>
            }
            </button>
       
        </div>
        <div className="color_link">
        {isAnswerShowing && <Link to={`${url}`} >{answer}</Link>}
        </div>
       
    </article>

  )
}

export default Faq