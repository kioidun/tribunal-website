import React from "react";
import Header from "../../headertwo/Header";
import HeaderImage from "../../resources/images/about-stones.jpg";
import StoryImage from "../../resources/images/legal.avif";
import VisonImage from "../../../imagestwo/ourvision.jpg";
import OurMission from "../../../imagestwo/ourmission.jpg";
import "./about.css";
import { useRef, useEffect, useState } from "react";
import YouTube from "react-youtube";

// const paragraphStyles={
//     WebkitLineClamp: 5,
//     WebkitBoxOrient: 'vertical',
//     overflow: 'hidden',
//     display: '-webkit-box',
  
//   }

const About = () => {

 

  return (
    <>
    <Header title="About Us" image={HeaderImage}></Header>
<div className="youtube">
 
<iframe  src="https://www.youtube.com/embed/RwpcA51F0Jg?si=s39bDdU9iQpuYRGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
  
  </>
  
  )
}

// _onReady(event) {
//   event.target.pauseVideo();
// }
//  const [isOpen, setIsOpen] = useState(false)
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
//   return (
//     <>
//       <Header title="About Us" image={HeaderImage}></Header>
//       <section className="about_story">
//         <div className="about-story-container">
//             <div className="about-img">
//             <img src={StoryImage}></img>
//             </div>
//             <div className="about-paragraph">
//                 <h1>Our story</h1>
//             <p  style={isOpen ? null:paragraphStyles} ref={ref}>
//             Article 159 (1) judicial authority vests in and is to be excised by the courts and
// tribunals established by or under the Constitution, while Article 169 (1) defines
// subordinate courts under the judiciary to include local tribunals as may be
// established by an Act of Parliament. Unlike under the previous constitutional
// dispensation where tribunals were part and parcel of the Executive arm of
// Government, under the current constitutional framework tribunals that are involved in
// dispute resolution are part of the judiciary.<br></br>
// To implement the provisions of the Constitution touching on the tribunals and to
// transition existing tribunals seamlessly from the previous order into the judiciary, in
// November 2014 the former Chief Justice, the Hon. Dr. Willy Mutunga, established
// the Judiciary Working Committee on the Transition and Restructuring of Tribunals
// (JWC-T). The Committee, chaired by the Hon. Mr. Justice Kathurima M’Inoti, JA.,
// was made up of ten members, with the Chief Registrar of the Judiciary, Ann Amadi
// as the Secretary. The primary mandate of the Committee was to advice the Judiciary
// and Judicial Service Commission on the appropriate transition process and
// mechanisms of tribunals in a manner that gives full effect to the constitutional
// requirements.<br></br>

// After a comprehensive situational analysis, evaluation of the existing legal and
// legislative framework and engagement with tribunals and other stakeholders, key
// among them the Committee on the Review of the rationale for the establishment of
// Tribunals appointed by the Hon the Attorney General, Prof. Githu Muigai in June
// 2014, JWC-T is now pleased to present the report of its findings and
// recommendations. </p>
//               <button className='button_read' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? 'read less...':'read more'}
// </button>
//             </div>
//         </div>
        /* <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Article 159 (1) judicial authority vests in and is to be excised
              by the courts and tribunals established by or under the
              Constitution, while Article 169 (1) defines subordinate courts
              under the judiciary to include local tribunals as may be
              established by an Act of Parliament. <br></br>
              Unlike under the previous constitutional dispensation where
              tribunals were part and parcel of the Executive arm of Government,
              under the current constitutional framework tribunals that are
              involved in dispute resolution are part of the judiciary. To
              implement the provisions of the Constitution touching on the
              tribunals and to transition existing tribunals seamlessly from the
              previous order into the judiciary, in November 2014 the former
              Chief Justice, the Hon. Dr. Willy Mutunga, established the
              Judiciary Working Committee on the Transition and Restructuring of
              Tribunals (JWC-T). <br></br>
              The Committee, chaired by the Hon. Mr. Justice Kathurima M’Inoti,
              JA., was made up of ten members, with the Chief Registrar of the
              Judiciary, Ann Amadi as the Secretary. The primary mandate of the
              Committee was to advice the Judiciary and Judicial Service
              Commission on the appropriate transition process and mechanisms of
              tribunals in a manner that gives full effect to the constitutional
              requirements.<br></br>
              After a comprehensive situational analysis, evaluation of the
              existing legal and legislative framework and engagement with
              tribunals and other stakeholders, key among them the Committee on
              the Review of the rationale for the establishment of Tribunals
              appointed by the Hon the Attorney General, Prof. Githu Muigai in
              June 2014, JWC-T is now pleased to present the report of its
              findings and recommendations.
            </p>

            <p>
              In Kenya, Article 1(3) (c) of the Constitution recognizes the
              Judiciary and independent tribunals as State organs to which
              sovereign power is delegated by the people of Kenya. By virtue of
              Article 159 (1), judicial authority vests in and is to be
              exercised by the courts and tribunals established by or under the
              Constitution. Article 169 (1) defines subordinate courts under the
              judiciary to include local tribunals as may be established by an
              Act of Parliament
            </p>
          </div>
        </div>
    

     
        <div className="container about_story-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              An independent institution of excellence in the delivery of
              justice to all.
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisonImage} alt="" />
          </div>
        </div>
    
      
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={OurMission} alt="" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              To administer justice in a fair, timely, accountable and
              accessible manner, uphold the rule of law, advance indigenous
              jurisprudence and protect the constitution.
            </p>
            <p></p>
          </div>
        // </div> */
      // </section>
  
  


export default About;
