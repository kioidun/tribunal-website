import React from "react";
import { Link } from "react-router-dom";
import "./tribunalstwo.css";
import knowyourt from '../../resources/images/knowytribunals.jpeg'
import HeroSlider, {Slide} from 'hero-slider'
import Carousel from '../../carousel/Carousel'
import { registry } from "../../carousel/Datatwo";


const registrytwo = "https://i.imgur.com/idjXzVQ.jpg"
const registrythree = "https://i.imgur.com/8DYumaY.jpg"
const registryfour = "https://i.imgur.com/8IuucQZ.jpg"

const Tribunalstwo = () => {
  return (
    <>
      <section className="tribunalstwo_container">
        <div className="tribunalstwo_container-left_box">
          <h2>Tribunals in Kenya</h2>
          <h3>
            Kenya has over 38 Tribunals established by various Acts of
            Parliament.<br></br>Tribunals are specialized bodies vested with
            Judicial power to determine disputes as stipulated in Article 159 of
            the Constitution and enabling legislation. <br></br>
            Scan belowto Know Your Tribunals
          </h3>
          {/* <img className="knowyt" src={knowyourt}/> */}
        </div>
        <div className="tribunalstwo_container-right_box">
             <Carousel images ={registry}/>
            {/* <HeroSlider
                slidingAnimation ="left-to-right"
                orientation ="horizontal"
                initialSlide={1}
                onBeforeChange={(previousSlide,nextSlide)=>{

                }}
                onChange={nextSlide =>console.log("onChange",nextSlide)}
                onAfterChange = {nextSlide=> console.log("onAfterChange",nextSlide)}
                style={{
                    backgroundColor:'rgba(0,0,0,0.33)'
                }}
                settings={{
                    slidingDuration:250,
                    slidingDelay:100,
                    shouldAutoplay:true,
                    shouldDispalyButtons:true,
                    autoplayDuration: 5000,
                    height:"100vh",

                }}
            >
                <Slide
                    background={{
                        backgroundImage: knowyourt,
                        backgroundAttachment: "fixed"
                    }}
                
                />
                   <Slide
                    background={{
                        backgroundImage: registrytwo,
                        backgroundAttachment: "fixed"
                    }}
                
                />
                   <Slide
                    background={{
                        backgroundImage: registrythree,
                        backgroundAttachment: "fixed"
                    }}
                
                />
                   <Slide
                    background={{
                        backgroundImage: registryfour,
                        backgroundAttachment: "fixed"
                    }}
                
                /> */}
            {/* </HeroSlider> */}
          {/* <div className="tribunalstwo_container-box_content">
            <h3>Business Premises Rent Tribunal</h3>
            <div className="tribunal_empty-div"></div>
            <p>
              Business Premises Rent Tribunal is established under section 11 of
              the Landlord and Tenants (Shops, Hotels & Catering Establishments)
              Act, Cap.301 Laws of Kenya.
            </p>
          </div>
          <div className="tribunalstwo_container-box_content">
            <h3>Energy And Petroleum Tribunal</h3>
            <div className="tribunal_empty-div"></div>
            <p>
              The Energy and Petroleum Tribunal is established under Section 25
              of the Energy Act, No. 1 of 2019, Laws of Kenya.
            </p>
          </div>
          <div className="tribunalstwo_container-box_content">
            <h3>Cooperative Tribunal</h3>
            <div className="tribunal_empty-div"></div>
            <p>
              This Tribunal is established under Section 77 of the Cooperative
              Societies Act No. 490 (Revised in 2012), Laws of Kenya.
            </p>
          </div>
          <div className="tribunalstwo_container-box_content">
            <h3>Capital Markets Tribunal</h3>
            <div className="tribunal_empty-div"></div>
            <p>
              The Capital Markets Tribunal is established under Section 35A of
              the Capital Market Act No. 17 of 1989, Laws of Kenya.
            </p>
          </div>
          <div className="tribunalstwo_container-box_content">
            <h3>Industrial Property Tribunal</h3>
            <div className="tribunal_empty-div"></div>
            <p className="font-face-gm">
              The Tribunal is established under Section 113 of the Industrial
              Property Act, 2001, Laws of Kenya.
            </p>
          </div>
          <div className="tribunalstwo_container-box_content">
            <h3>Sports Disputes Tribunal</h3>
            <div className="tribunal_empty-div"></div>
            <p>
              It is established under Section 55 of Sports Act No. 25 of 2013
              and Section 31 of the Anti-Doping Act No. 5 of 2016
            </p>
          </div> */}
        </div>
      </section>
      {/* <div className="tribunalstwo_hthree">
        <Link
          to={`/tribunals`}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          {" "}
          <h3>Know your Tribunals</h3>
        </Link>
      </div> */}
    </>
  );
};

export default Tribunalstwo;
