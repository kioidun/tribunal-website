import React,{useEffect} from "react";
import asugah from '../../resources/images/Asugah.jpg'
import "./registrarmessage.css";

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { PiArrowSquareOutBold } from "react-icons/pi";

function Registrarmessage() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section data-aos="fade-up" data-aos-duration='2500' className="container registrar-message">
      {/* <div className="registrar-message-main-div">
      <div className="registrar-message-main-div_left">
            <h1>Registrar Of Tribunals</h1>
            <h2>Hon. Ann Asugah</h2>
            <p className="first-p">Here we can put a message or a quote.Here we can put a message or a quote.Here we can put a message or a quote.Here we can put a message or a quote.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odit amet deleniti nisi sed aliquam omnis magnam doloribus esse numquam. Nisi ipsa est repellendus animi sunt atque nobis nemo quibusdam maxime quam eos quas qui beatae tempora reprehenderit assumenda facere impedit, consequatur accusamus odit ipsum voluptatum laborum exercitationem. Itaque, minima.</p>
       <h3>Ann Asugah</h3>
        </div>
        <div  className="registrar-message-main-div_right">
            <img src={asugah}/>
        </div>
       
      </div> */}

      <div className="read-more">
        <div className="read-more-caption">
            <h1>Find out more</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, earum omnis. Libero dignissimos reiciendis voluptates incidunt culpa, illo iure dicta.</p>
        </div>
      
          <div className="read-more-options-left">
            <div className="content">
            <div className='content-link'>
            
                    <Link className='link-teams-color' to="/about"  > <PiArrowSquareOutBold /> About Us </Link> 
                    </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, ab! Modi, nulla est. Reiciendis dolorem laborum aliquid magni odit repellat rerum asperiores, quisquam ratione aperiam commodi iusto quia fuga. Provident.</p>
            </div>
            <div className="content">
            <div className='content-link'>
           
                    <Link className='link-teams-color' to="/contact" ><PiArrowSquareOutBold /> Contacts </Link> 
                    </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, repellat perspiciatis? Libero, sunt! Earum rem, non quod fuga dolore a, iusto fugit, eius nihil sit voluptates optio sint aliquam quibusdam?</p>
         </div>
          </div>
          <div className="read-more-options-right">
          <div className="content">
          <div className='content-link'>
         
                    <Link className='link-teams-color' to="/team"   > <PiArrowSquareOutBold /> The Team  </Link> 
                    </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, ab! Modi, nulla est. Reiciendis dolorem laborum aliquid magni odit repellat rerum asperiores, quisquam ratione aperiam commodi iusto quia fuga. Provident.</p>
            </div>
           
            <div className="content">
            <div className='content-link'>
           
                    <Link className='link-teams-color' to="/leadership"   > <PiArrowSquareOutBold /> Events </Link> 
                    </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, repellat perspiciatis? Libero, sunt! Earum rem, non quod fuga dolore a, iusto fugit, eius nihil sit voluptates optio sint aliquam quibusdam?</p>
          </div>
         
</div>
  
      </div>
    </section>
  );
}

export default Registrarmessage;
