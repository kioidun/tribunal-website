import React ,{useEffect}from 'react'
import knowyourt from '../../resources/images/knowytribunals.jpeg'
import constitutionthree from '../../resources/images/constitutionthreee.jpg'
import legal from '../../../imagestwo/educationappeals.jpg'
import './mainheader.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Mainheader() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='mainheader_two'>
     {/* <Drift appId='gp2ax4kmr8ci'/> 
    <div className='mainheader_two-image'>
             <img src={constitutionthree}/>
               <img src={legal}/>  
         </div>
         <div className='mainheader_two-texts'>
             <h1> TRIBUNALS ADMINISTRATION IN KENYA</h1>
             <h2>Article 159 (1) of the Constitution of Kenya, </h2>
            <p> "Judicial authority vests in and is to be exercised by courts and <b className='big-bold'>tribunals</b> established by or under the Constitution."</p>
        
             <img className="knowyt" src={knowyourt}/> 
         </div> */}

         <div className='divider-section'>
          <div className='divider-section-left'>
              <img src={legal}/>  
          </div>
          <div className='divider-section-right'>
          <h1> TRIBUNALS ADMINISTRATION IN KENYA</h1>
             <h2>Article 159 (1) of the Constitution of Kenya, </h2>
            <p> "Judicial authority vests in and is to be exercised by courts and <b className='big-bold'>tribunals</b> established by or under the Constitution."</p>
          </div>
         </div>
        
 
    </section>
  )
}

export default Mainheader