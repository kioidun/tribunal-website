import React from 'react'
import Image from '../../components/resources/images/legal.avif'
import SectionHead from '../sectionhead/sectionhead'
import {AiFillCrown} from 'react-icons/ai';
import {RxValue} from 'react-icons/rx'
import { values } from '../resources/data/data';
import Card from '../ui/Card'
import './values.css'

const Values = () => {
  return (
    <section className="values">
        <div className="container values_container">
           {/* <div className="values_left">
                <div className="values_image">
                    <img src={Image} alt=''/>
                </div>
           </div> */}
           <div className="values_right">
                <SectionHead className='section_head-values' icon={<RxValue/>} title='THE TRIBUNALS SECRETARIAT'>

                </SectionHead>
                {/* <p> The Tribunal Secretariat is headed by a Registrar who oversees the adminstrative oversight of the support functions to Tribunals through the shared services model.<br>
                </br>
                The Tribunal consists of four main departments: */}
                {/* <br></br>
                - Finance and Account
                <br></br>
                - Supply and Chain Management
                <br></br>
                - Registry Operations
                <br></br>
                - Office Administration */}
                {/* </p> */}
                {/* <div className="values_wrapper">
                    {
                        values.map(({id,icon,title,desc})=>{
                            return <Card key={id} className='values_value'>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div> */}
           </div>
        </div>
    </section>
  )
}

export default Values