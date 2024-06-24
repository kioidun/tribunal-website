import React, { useState,useEffect } from "react";
import Header from "../../headertwo/Header";
import HeaderImage from "../../resources/images/registraroffice.jpg";
// import { registrar } from "../../resources/data";
import shared from "./together.jpg";
import "./team.css";
import { RxValue } from "react-icons/rx";
import { departments } from "../../resources/data/data";
import Card from "../../ui/Card";
import Values from "../../values/Values";
import asugah from'../../resources/images/Asugahtwo.jpg'
import gracedr from "../../resources/images/gracedrthree.jpeg";
import lydiadr from '../../resources/images/lydiaadrthree.jpg'
import miano from '../../resources/images/mianofour.jpeg'
import njeru from '../../resources/images/njrerutwothree.jpg'
import diramu from '../../resources/images/diramuthree.jpg'
import charles from '../../resources/images/charles.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Leaderregistrar1 = require("../../resources/images/Asugah.jpg");
const Leaderregistrar2 = require("../../resources/images/mianofour.jpeg");
const Leaderregistrar3 = require("../../resources/images/njrerutwothree.jpg");
const Leaderregistrar4 = require("../../resources/images/gracedrthree.jpeg");
const Leaderregistrar5 = require("../../resources/images/lydiaadrthree.jpg");
const Leaderregistrar6 = require("../../resources/images/diramuthree.jpg");
const Leaderregistrar7 = require("../../resources/images/mianofour.jpeg");
const Leaderregistrar8 = require("../../resources/images/gracedrthree.jpeg");

function Registrar() {


  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index)=>{
    setToggleState(index)
  }

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <Header title="" image={HeaderImage}>
        <p className="title-head">
          The Tribunals Secretariat was establiished through a Judicial Service
          Commission Resolution of February 2017. The Secretariat coordinates
          the work and the transition of tribunals to the Judiciary. The
          Tribunals offer a more affordable, accessible, specialized and
          expedited Judicial process.
        </p>
      </Header>

      
      <h2 className="registrar-departments">The Tribunals Departments</h2>
      <div data-aos="fade-up" data-aos-duration='2500' className="department_wrapper">
        {departments.map(({ id, icon, title, desc }) => {
          return (
            <Card key={id} className="values_value">
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{desc}</small>
            </Card>
          );
        })}
      </div>
     
      <div data-aos="fade-up" data-aos-duration='2500' className="shared-section">
        <h1>Shared Model</h1>
        <div className="shared">
        <div className="shared_picture">
          <img src={shared} />
        </div>
        <div className="shared_content">
          <p>
            {" "}
            The Office of the Registrar of Tribunals (ORT) was established in
            February 2017 through a resolution of the the Judicial Service
            Commission pursuant to Article 161(3) of the Constitution. The ORT
            is charged with the responsibility of coordinating corporate support
            services to all tribunals using the shared services model. These
            Corporate Services are Registry, Financial, Supply Chain Management,
            ICT and Communication Services. The common characteristic of these
            tribunals is that they do not have enough case load to warrant full
            time judicial panels and full-fledged registries. This concept
            allows for standardization of services across registries
          </p>
          <p>
            The Secretariat shall provide shared services and facilities to
            tribunals for efficient utilization of scarce resources. The
            infrastructure shall provide for adequate office space,court
            rooms,chambers,board rooms, registries, resource centers, employee
            welfare facilities, ICT infrastructure, vehicles, parking facilities
            among others.{" "}
          </p>
        </div>
        </div>
      </div>

      {/* <div className="department_wrapper">
        {departments.map(({ id, icon, title, desc }) => {
          return (
            <Card key={id} className="values_value">
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{desc}</small>
            </Card>
          );
        })}
      </div> */}
      {/* registrars */}

      {/* <Values /> */}
      <div></div>
      <h1 data-aos="fade-up" data-aos-duration='2500' className="admin">ADMINISTRATION</h1>
      <div  data-aos="fade-up" data-aos-duration='2500' className="services__container container grid">
        
        <div className="services__content">
          <div>
            <img src={asugah} className="uil uil-web-grid services__icon"/>
            <h3 className="services__title">Registrar <br/> Hon. Ann Asugah</h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(1) }>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 1 ? "services__modal active-modal": "services__modal" }>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Registrar</h3>
              <p className="services__modal-description">
              The Registrar Tribunals is appointed by the Judicial Service Commission under Article 161 (3) of the Constitution and is responsible to the Chief Registrar in the performance of the duties of that office. The Registrar oversights the Tribunal Secretariat to ensure it efficiently and effectively supports tribunals in the dispensation of justice by mainstreaming judiciary best practices and programs in tribunals. Currently, ORT oversees 25 tribunals that have transited to the Judiciary by facilitating human, infrastructural, financial  and supply chain related activities to ensure optimal performance by tribunals.
              </p>

              {/* <ul className="services__modal-services grid">
                <li className="services__modal-service">
               <i className="uil uil-check-circle services__modal-icon"></i>
               <p className="services__modal-info">
                web page Dev
               </p>
                </li>

                <li className="services__modal-service">
               <i className="uil uil-check-circle services__modal-icon"></i>
               <p className="services__modal-info">
               backend dev
               </p>
                </li>

                <li className="services__modal-service">
               <i className="uil uil-check-circle services__modal-icon"></i>
               <p className="services__modal-info">
               front-end dev
               </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img src={lydiadr} className="uil uil-arrow services__icon"/>
            <h3 className="services__title"> Deputy Registrar <br/> Hon. Lydia Mbacho</h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(2) }>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 2 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Deputy Registrar</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae excepturi minima architecto saepe repellat odio explicabo dolore, quod nemo similique fuga libero veritatis dolor harum obcaecati, maxime quisquam modi laborum in rerum ut nihil voluptatum. Libero inventore voluptatem aperiam sequi!
              </p>

              {/* <ul className="services__modal-services grid">
                <li className="services__modal-service">
               <i className="uil uil-check-circle services__modal-icon"></i>
               <p className="services__modal-info">
                web page Dev
               </p>
                </li>

                <li className="services__modal-service">
               <i className="uil uil-check-circle services__modal-icon"></i>
               <p className="services__modal-info">
               backend dev
               </p>
                </li>

                <li className="services__modal-service">
               <i className="uil uil-check-circle services__modal-icon"></i>
               <p className="services__modal-info">
               front-end dev
               </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img src={gracedr} className="uil uil-edit services__icon"/>
            <h3 className="services__title">Deputy Registrar <br/>Hon. Grace Omodho</h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(3) }>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 3 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title"> Deputy Registrar</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae excepturi minima architecto saepe repellat odio explicabo dolore, quod nemo similique fuga libero veritatis dolor harum obcaecati, maxime quisquam modi laborum in rerum ut nihil voluptatum. Libero inventore voluptatem aperiam sequi!
              </p>

              {/* <ul className="services__modal-services grid">
                <li className="services__modal-service">
               <i className="uil uil-check-circle services__modal-icon"></i>
               <p className="services__modal-info">
                web page Dev
               </p>
                </li>

                <li className="services__modal-service">
               <i className="uil uil-check-circle services__modal-icon"></i>
               <p className="services__modal-info">
               backend dev
               </p>
                </li>

                <li className="services__modal-service">
               <i className="uil uil-check-circle services__modal-icon"></i>
               <p className="services__modal-info">
               front-end dev
               </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="the-team">
        <div className="the-team-heading">
        
        </div>
        <div className="card__container bd-container">
          <div className="team-left">
            <div className="the-team-left-info">
              <img className="the-team-image" src={asugah} alt="" />
              <div className="the-team-data">
                <h3 className="the-team-title">Hon Ann Asugah </h3>
                <span className="the-team-profession">Registrar Tribunals</span>
              </div>
            </div>
            <div className="vl"></div>
            <div className="team-info-paragraph">
              <p>
              The Registrar Tribunals is appointed by the Judicial Service Commission under Article 161 (3) of the Constitution and is responsible to the Chief Registrar in the performance of the duties of that office. The Registrar oversights the Tribunal Secretariat to ensure it efficiently and effectively supports tribunals in the dispensation of justice by mainstreaming judiciary best practices and programs in tribunals. Currently, ORT oversees 25 tribunals that have transited to the Judiciary by facilitating human, infrastructural, financial  and supply chain related activities to ensure optimal performance by tribunals.
              </p>
            </div>
          </div>{" "}
          <div className="team-left">
            <div className="the-team-left-info">
              <img className="the-team-image" src={lydiadr} alt="" />
              <div className="the-team-data">
                <h3 className="the-team-title">Hon Lydia Mbacho </h3>
                <span className="the-team-profession">Deputy Registrar Tribunals</span>
              </div>
            </div>
            <div className="vl"></div>
            <div className="team-info-paragraph">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                atque aliquid molestiae iste sed earum obcaecati non quam eos
                qui! Vero optio tempora eveniet cumque, quaerat ullam quas
                similique officiis?
              </p>
            </div>
          </div>
        </div>
        <div className="card__container bd-container">
          <div className="team-left">
            <div className="the-team-left-info">
              <img className="the-team-image" src={gracedr} alt="" />
              <div className="the-team-data">
                <h3 className="the-team-title">Hon Grace Omodho </h3>
                <span className="the-team-profession">Deputy Registrar Tribunals</span>
              </div>
            </div>
            <div className="vl"></div>
            <div className="team-info-paragraph">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                atque aliquid molestiae iste sed earum obcaecati non quam eos
                qui! Vero optio tempora eveniet cumque, quaerat ullam quas
                similique officiis?
              </p>
            </div>
          </div>{" "}
          <div className="team-left">
            <div className="the-team-left-info">
              <img className="the-team-image" src={miano} alt="" />
              <div className="the-team-data">
                <h3 className="the-team-title"> CPA Samuel Miano </h3>
                <span className="the-team-profession">Assistant Director Finance</span>
              </div>
            </div>
            <div className="vl"></div>
            <div className="team-info-paragraph">
              <p>
              The Finance and Accounts department is tasked with budget
              preparations as well as expenditure management for the tribunals.The department is also responsible for the management of revenue
              collected in the tribunals.
              <br></br>
              In addition,general deposit managemnet is another crucial
              responsibility within the department. The department is divided
              into two sections.
              <br></br>- Budget Preparations and expenditure management. <br></br>
              -Revenue and general deposit management.
              </p>
            </div>
          </div>
        </div>
        <div className="card__container bd-container">
          <div className="team-left">
            <div className="the-team-left-info">
              <img className="the-team-image" src={njeru} alt="" />
              <div className="the-team-data">
                <h3 className="the-team-title"> CPA Emmanuel Njeru </h3>
                <span className="the-team-profession">Assistant Director Finance</span>
              </div>
            </div>
            <div className="vl"></div>
            <div className="team-info-paragraph">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                atque aliquid molestiae iste sed earum obcaecati non quam eos
                qui! Vero optio tempora eveniet cumque, quaerat ullam quas
                similique officiis?
              </p>
            </div>
          </div>{" "}
          <div className="team-left">
            <div className="the-team-left-info">
              <img className="the-team-image" src={diramu} alt="" />
              <div className="the-team-data">
                <h3 className="the-team-title">Diramu Gollo </h3>
                <span className="the-team-profession">Senior Supply Chain Officer</span>
              </div>
            </div>
            <div className="vl"></div>
            <div className="team-info-paragraph">
              <p>
              -Acquiring quality goods, services and works for the Tribunals at the lowest possible cost
to ensure value for money to the Judiciary
-Disposal of idle and obsolescent assets for the Tribunals.
 -Maintaining and updating of the online Asset Register as and when required
-Generating quarterly statutory reports for the procurement awards
-Liaison with both internal and external customers of the supply chain management at
Tribunals to ensure their satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="card__container bd-container">
          <div className="team-left">
            <div className="the-team-left-info">
              <img className="the-team-image" src={charles} alt="" />
              <div className="the-team-data">
                <h3 className="the-team-title"> Charles Mbogo </h3>
                <span className="the-team-profession">Supply Chain Officer</span>
              </div>
            </div>
            <div className="vl"></div>
            <div className="team-info-paragraph">
              <p>
              -Acquiring quality goods, services and works for the Tribunals at the lowest possible cost
to ensure value for money to the Judiciary
-Disposal of idle and obsolescent assets for the Tribunals.
 -Maintaining and updating of the online Asset Register as and when required
-Generating quarterly statutory reports for the procurement awards
-Liaison with both internal and external customers of the supply chain management at
Tribunals to ensure their satisfaction.
              </p>
            </div>
          </div>{" "}
          <div className="team-left">
            <div className="the-team-left-info">
              <img className="the-team-image" src={gracedr} alt="" />
              <div className="the-team-data">
                <h3 className="the-team-title"> Grace Nyambura </h3>
                <span className="the-team-profession">Office Administrator</span>
              </div>
            </div>
            <div className="vl"></div>
            <div className="team-info-paragraph">
              <p>
              Office administration is essential for ensuring smooth operations and effective resource management
within an organization. This department is responsible for handling administrative support tasks such
as managing phone calls, emails, correspondence, and document filing, as well as coordinating
appointments, meetings, and travel arrangements. Additionally, office management duties include
procuring office supplies, maintaining a clean and safe environment, and overseeing the functionality
and maintenance of office equipment.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <h2 className="shared_heading-heading">Registrar Hon. Ann Asugah</h2>
      <div className="shared">
        <div className="shared_picture">
          <img src={Leaderregistrar1} />
        </div>
        <div className="shared_content-registrar">
          <p>
            {" "}
            The Office of the Registrar of Tribunals (ORT) was established in
            February 2017 through a resolution of the the Judicial Service
            Commission pursuant to Article 161(3) of the Constitution. The ORT
            is charged with the responsibility of coordinating corporate support
            services to all tribunals using the shared services model. These
            Corporate Services are Registry, Financial, Supply Chain Management,
            ICT and Communication Services. The common characteristic of these
            tribunals is that they do not have enough case load to warrant full
            time judicial panels and full-fledged registries. This concept
            allows for standardization of services across registries
          </p>
          <p>
            The Secretariat shall provide shared services and facilities to
            tribunals for efficient utilization of scarce resources. The
            infrastructure shall provide for adequate office space,court
            rooms,chambers,board rooms, registries, resource centers, employee
            welfare facilities, ICT infrastructure, vehicles, parking facilities
            among others.{" "}
          </p>
        </div>
      </div> */}

      {/* Assistand Director Mr Miano */}

      {/* Assistant Director Finance Mr Njeru */}

      {/* <div className="teams">
  <div className="leftside">
  <img src={Leaderregistrar2} />
  
  </div>
  <div className="rightside">
  <h4>Mr Samuel Miano</h4>
  <p>
              {" "}
              The Finance and Accounts department is tasked with budget
              preparations as well as expenditure management for the tribunals.
              <br></br>
              The department is also responsible for the management of revenue
              collected in the tribunals.<br></br>
              In additio,general deposit managemnet is another crucial
              responsibility within the department. The department is divided
              into two sections.
              <br></br>- Budget Preparations and expenditure management. -
              Revenue and general deposit management.
            </p>
  </div>
</div>









      <h2 className="shared_heading-heading">Assistant Director Finance</h2>
      <div className="finance_department">
        <div className="finance_respomnsibility_left">
          <div className="finance_picture">
            <img src={Leaderregistrar2} />
          </div>
          <div className="shared_content-finance-right">
            <h4>Mr Samuel Miano</h4>
            <p>
              {" "}
              The Finance and Accounts department is tasked with budget
              preparations as well as expenditure management for the tribunals.
              <br></br>
              The department is also responsible for the management of revenue
              collected in the tribunals.<br></br>
              In additio,general deposit managemnet is another crucial
              responsibility within the department. The department is divided
              into two sections.
              <br></br>- Budget Preparations and expenditure management. -
              Revenue and general deposit management.
            </p>
          </div>
        </div>
     
      </div>

      <div className="finance_respomnsibility_right">
          <div className="finance_picture_two">
            <img src={Leaderregistrar3} />
          </div>
          <div className="shared_content-finance-right">
            <h4>Mr Emmanuel Njeru</h4>
            <p>
              The Finance and Accounts department is tasked with budget
              preparations as well as expenditure management for the tribunals.
              <br></br>
              The department is also responsible for the management of revenue
              collected in the tribunals.<br></br>
              In additio,general deposit managemnet is another crucial
              responsibility within the department. The department is divided
              into two sections.
              <br></br>- Budget Preparations and expenditure management. -
              Revenue and general deposit management.
            </p>
          </div>
        </div>

        <h2 className="shared_heading-heading">Tribunals Deputy Registrar's</h2>
      <div className="registry_department">
      <div className="shared_respomnsibility_left">
        <div className="finance_picture">
          <img src={Leaderregistrar5} />
        </div>
        <div className="shared_content-finance-left">
          <h4>Lydia Mbacho</h4>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur, autem nostrum aspernatur ducimus nam natus sint! Fuga voluptate ex omnis? Aperiam, dolorem sapiente eaque laboriosam doloribus unde! Amet, itaque!
        </p>
        </div>
      </div>
      <div className="shared_respomnsibility_right">
        <div className="finance_picture_two">
          <img src={Leaderregistrar4} />
        </div>
        <div className="shared_content-finance-right">
          <h4>Grace Omodho</h4>
          <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ea dolor ut nisi dolores voluptates perferendis iusto laboriosam ducimus veniam deserunt error. Illo molestiae fugit inventore temporibus vitae suscipit vel.
         </p>
        </div>
      </div>
      </div> 



      <h2 className="shared_heading-heading">Supply chain Management </h2>
      <div className="supply_department">
      <div className="shared_respomnsibility_left">
        <div className="finance_picture">
          <img src={Leaderregistrar6} />
        </div>
        <div className="shared_content-finance-left">
          <h4>Diramu Gollo</h4>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur, autem nostrum aspernatur ducimus nam natus sint! Fuga voluptate ex omnis? Aperiam, dolorem sapiente eaque laboriosam doloribus unde! Amet, itaque!
        </p>
        </div>
      </div>
      <div className="shared_respomnsibility_right">
        <div className="finance_picture_two">
          <img src={Leaderregistrar7} />
        </div>
        <div className="shared_content-finance-right">
          <h4>Charles Mbogo</h4>
          <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ea dolor ut nisi dolores voluptates perferendis iusto laboriosam ducimus veniam deserunt error. Illo molestiae fugit inventore temporibus vitae suscipit vel.
         </p>
        </div>
      </div>
      </div>

      <h2 className="shared_heading-heading">Office Administration</h2>
      <div className="shared">
        <div className="shared_picture">
          <img src={Leaderregistrar8} />
        </div>
        <div className="shared_content-admin">
           <h4 className="office-Admin">Grace Nyambura</h4> 
          <p>
            {" "}
            The Office of the Registrar of Tribunals (ORT) was established in
            February 2017 through a resolution of the the Judicial Service
            Commission pursuant to Article 161(3) of the Constitution. The ORT
            is charged with the responsibility of coordinating corporate support
            services to all tribunals using the shared services model. These
            Corporate Services are Registry, Financial, Supply Chain Management,
            ICT and Communication Services. The common characteristic of these
            tribunals is that they do not have enough case load to warrant full
            time judicial panels and full-fledged registries. This concept
            allows for standardization of services across registries
          </p>
          <p>
            The Secretariat shall provide shared services and facilities to
            tribunals for efficient utilization of scarce resources. The
            infrastructure shall provide for adequate office space,court
            rooms,chambers,board rooms, registries, resource centers, employee
            welfare facilities, ICT infrastructure, vehicles, parking facilities
            among others.{" "}
          </p>
        </div>
      </div>  */}
      {/* Deputy Registrar */}

      {/* Supply chain */}

      {/* <div className="registrar">
        {registrar.map(({ id, image, name, job, socials }) => {
          return (
            <div className="registrarone" key={id}>
              <div className="imgbx">
                <img src={image}></img>
              </div>
              <div className="content">
                <div className="details">
                  <h2>
                    {name}
                    <br></br>
                    <span>{job}</span>
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      {/* <div className="ebook">
      <iframe style={{width:'900px',height:'500px'}} src='https://online.pubhtml5.com/gsvh/eigd/'  seamless='seamless' scrolling='no' frameborder='0' allowtransparency='true' allowfullscreen='true' ></iframe>
      </div> */}
      {/* <h2 className="shared_heading">Tribunals Journal</h2>
      <div style={{position:"relative",padding:"max(30%,34px)",width:"100%",height:"0"}}><iframe style={{position:"absolute",border:"none",width:"100%",height:"100%",left:"0",top:"0"}} src="https://online.fliphtml5.com/yuixm/dgzq/index.html"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div> */}
    </>
  );
}

export default Registrar;
