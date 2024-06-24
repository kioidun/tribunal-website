import React from 'react'
import {useRef, useEffect,useState} from 'react'
import HeaderImage from '../../resources/images/gallery4.jpg'
import ChiefJustice from '../../resources/images/chiefjustice.jpeg'
import DeputyChiefJustice from '../../resources/images/deputycj.jpeg'
import ChiefRegistrar from '../../resources/images/mokaya.jpg'
import TribunalsRegistrar from '../../resources/images/tribunalsregistrartwo.jpeg'
import Header from '../../headertwo/Header'
import './leadership.css'
import siera from '../../resources/images/sierra-leone.jpeg'
import energy from '../../resources/images/energyswearing.jpeg'
import chairpersons from '../../resources/images/chairpersons-crj.jpeg'
import news from '../../resources/images/news4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
// const paragraphStyles={
//   WebkitLineClamp: 3,
//   WebkitBoxOrient: 'vertical',
//   overflow: 'hidden',
//   display: '-webkit-box',

// }

const Leadership = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
//   const [isOpen, setIsOpen] = useState(false)
//   const [isOpentwo, setIsOpentwo] = useState(false)
//   const [showReadMoreButton, setShowReadButton] = useState(true)
//   const ref = useRef(null)
//   useEffect(()=>{
//     if(ref.current){
//       setShowReadButton(
//         ref.current.scrollHeight !== ref.current.clientHeight
//       )
//     }
//   },[])
  return (
    <>
      <Header className="img-news" title='Tribunal Events' image={news} >
      Latest Tribunals News and Events
      </Header>
      <section data-aos="fade-up" data-aos-duration='2500' className="events">
        <div data-aos="fade-up" data-aos-duration='2500' className='events-section-div'>
          <div className='event-one'>
            <img src={siera}/>
           
            <h2>Delegation from Sierra Leone</h2>
            <div className='line'></div>
           
            <p>A delegation from Sierra Leone’s Parliament and Judiciary was hosted by the HIV and AIDS Tribunal and it’s partners We’re pleased to share our knowledge and experiences, helping to identify and address existing gaps and strengthen our collective response to HIV&AIDS</p>
          </div>
          <div className='event-two'>
          <img src={energy}/>
         
          <h2>Swearing-in</h2>
          <div className='line'></div>
         
            <p> The Hon Chief Registrar of the Judiciary,presided over her inaugural swearing in of Hon. Doris Mwirigi as a Member of the Energy &  Petroleum Tribunal.</p>
          </div>
          <div className='event-three'>
          <img src={chairpersons}/>
        
          <h2>Interacting with the CRJ</h2>
          <div className='line'></div>
         
            <p>The CRJ underscored the need to implement the appellate mechanism for tribunals to preserve timelines of hearing appeals from Tribunals.</p>
          </div>
        </div>
        {/* <div className="container leader_story-container">
          <div className="leader_section-image">
            <img src={ChiefJustice} alt='' />
          </div>
          <div className="leader_section-content">
            <h1>Chief Justice</h1>
            <p 
            style={isOpen ? null:paragraphStyles} ref={ref}>
            Hon. Justice Martha K. Koome is the Chief Justice. The Chief Justice shall be the Head of the Judiciary and the President of the Supreme Court and
              shall be the link between the Judiciary and the other arms of Government. The Chief Justice is also mandated
              to assign duties to the Deputy Chief Justice, the President of the Court of Appeal, the Principal Judge of the
              High Court and the Chief Registrar of the Judiciary.The Chief Justice is also required to give an annual
              report to the nation on the state of the Judiciary and the administration of justice; and cause the report to be
              published in the Gazette, and a copy thereof sent, under the hand of the Chief Justice, to each of the two Clerks of
              the two Houses of Parliament for it to be placed before the respective Houses for debate and adoption.The Chief Justice
              also exercises general direction and control over the Judiciary.
              Hon. Lady Justice Martha Karambu Koome was appointed the Chief Justice of Kenya in May 2021. Prior to her appointment, Judge Koome was a Judge of Appeal having been appointed in 2012. As a Court of Appeal Judge she served in Nairobi, Nyeri and Malindi.<br></br>
<br></br>
Judge Koome has also Served as a High Court Judge (2003 – 2011) as indicated below:<br></br>

[-] Head of Land and Environment Division of the High Court in Nairobi<br></br>

[-] Resident Judge, High Court in Nakuru & Kitale<br></br>

[-] High Court in Nairobi (Commercial Division & Family Division)<br></br>

She was the Managing Partner at Martha Koome & Company Advocates (1993 -2003) and Legal Associate at Mathenge & Muchemi Advocates (1988 – 1992)The judge has an aggregate of 34 years of experience in the legal profession.

She holds the following academic and professional qualifications:

[-] Master of Laws from the University of London (2010)<br></br>

[-]Bachelor of Laws from the University of Nairobi (1986)<br></br>

[-]Post Graduate Diploma in Law from the Kenya School of Law (1987)<br></br>

[-]Admitted to the Roll of Advocates in 1987<br></br>
            </p>
           
<button className='button_read' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? 'read less...':'read more'}
</button>
          </div>
        </div>
      </section>

      <section className="leader_vision">
        <div className="container leader_vision-container">
          <div className="leader_section-content">
            <h1>Deputy Chief Justice</h1>
            <p   style={isOpentwo ? null:paragraphStyles} ref={ref}>
              Lady Justice Philomena Mbete Mwilu is an advocate of the High Court of Kenya with over 33 years experience
              in the legal profession and holds a Bachelor of Laws (LLB) degree and a Masters of Law degree from the University
              of Nairobi. She was admitted as an advocate of the High Court of Kenya in 1984.

              She was in private legal practice in various law firms in Nairobi for the first seven years following
              her admission to the Bar. Thereafter she ventured into the corporate world working as a Senior Legal Officer in
              insurance; Board Secretary in charge of the day-to-day running of a State Corporation in regulation; the Deputy
              Chairperson of the Energy Tribunal; and later as Director on the Board of the Nairobi Water and Sewerage Company before
              being appointed a Puisne Judge in 2007.Lady Justice Mwilu first served in the Commercial Division of the High Court
              in Nairobi and later the High Court in Eldoret.
            </p>
            <button className='button_read' onClick={()=>setIsOpen(!isOpen)}>{isOpentwo ? 'read less...':'read more'}
</button>

          </div>
          <div className="leader_section-imagetwo">
            <img src={DeputyChiefJustice} alt='' />
          </div>
        </div>
      </section>
      <section className="leader_vision">
        <div className="container leader_vision-container">
          <div className="leader_section-image">
            <img src={ChiefRegistrar} alt='' />
          </div>
          <div className="leader_section-content">
            <h1>Chief Registrar of the Judiciary</h1>
            <p  style={isOpen ? null:paragraphStyles} ref={ref}>
            Hon. Winfridah Boyani Mokaya is the Chief Registrar of the Judiciary. She is an Advocate of the High Court of Kenya with over 27 years’ experience in the legal profession.

Prior to her appointment as the Chief Registrar of the Judiciary, Hon Mokaya served as the first Registrar of the Judicial Service Commission since 2011.

She joined the Judiciary in 1997 as a District Magistrate II (Professional), rising through the ranks to a Senior Principal Magistrate prior to her appointment as the Registrar – JSC in 2011.

Hon Mokaya holds a Bachelor of Laws degree from the University of Nairobi and a Post Graduate Diploma in Law from the Kenya School of Law. She is also a Certified Public Secretary.

She has attended various trainings including Strategic Leadership, Board and Executive Management; Modern administration; Corporate governance; Public Finance; Tax Administration; Human Rights; Child Rights; Legal Aid; Discrimination, Violence, Property Rights and Human Trafficking; International Law and Refugee Protection; Environmental Crime; Drug and Substance Abuse Reduction; Judicial Integrity, Accountability and Rectitude; Anti-Corruption and Economic Crimes; and Promotion and Protection of Judicial Independence in Eastern Africa.

She is a member of the Kenya Magistrates and Judges Association (KMJA), the Kenya Chapter of the International Association of Women Judges (IAWJ-Kenya), the Institute of Certified Public Secretaries (ICPSK) and the East African Magistrates and Judges Association (EAMJA).
            </p>
            <p>
            <button className='button_read' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? 'read less...':'read more'}
</button>
            </p>
          </div>
        </div>
      </section>
      <section className="leader_vision">
        <div className="container leader_vision-container">
          <div id={"section1"} className="leader_section-content">
            <h1>Registrar of Tribunals</h1>
            <p  style={isOpen ? null:paragraphStyles} ref={ref}>
              Hon. Ann Asugah, is an advocate of the High Court of Kenya, with a Masters Degree in Law and an LLB in Law from the University of Nairobi and a postgraduate diploma in Law from the Kenya School of Law. She is a member of Law Society of Kenya, Institute of Certified Secretaries ICPS and International Association of Court Administrators.
              
            </p>
            <button className='button_read' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? 'read less...':'read more'}
            </button>
          </div>
          <div className="leader_section-imagetwo">
            <img src={TribunalsRegistrar} alt='' />
          </div>
        </div> */}
      </section>
    </>
  )
}

export default Leadership