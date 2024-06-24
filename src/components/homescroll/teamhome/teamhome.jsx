 import React,{useEffect} from 'react'
 import gracedr from '../../resources/images/gracedrthree.jpeg'
// import lydiadr from '../../resources/images/lydiaadrthree.jpg'
// import miano from '../../resources/images/mianofour.jpeg'
// import njeru from '../../resources/images/njrerutwothree.jpg'
// import diramu from '../../resources/images/diramuthree.jpg'
// import { Link, NavLink } from "react-router-dom";
// import $ from 'jquery';
// import {Helmet} from "react-helmet";
import knowyourt from '../../resources/images/qr-code.jpg'
import { Link } from 'react-router-dom'

 import './teamhome.css'
 import Aos from 'aos'
import 'aos/dist/aos.css'

function Teamhome() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
// //   handleClick =()=> {
// //         $(".slider-img").on("click", function () {
// //           $(".slider-img").removeClass("active");
// //           $(this).addClass("active");
// //         });
// //       };

// // let items = document.querySelectorAll('.slider .list .item');
// // let next = document.getElementById('next');
// // let prev = document.getElementById('prev');
// // let thumbnails = document.querySelectorAll('.thumbnail .item');

// // // config param
// // let countItem = items.length;
// // let itemActive = 0;
// // event next click
// // next.onclick = function(){
// //     itemActive = itemActive + 1;
// //     if(itemActive >= countItem){
// //         itemActive = 0;
// //     }
// //     showSlider();
// // }
// //event prev click
// // prev.onclick = function(){
// //     itemActive = itemActive - 1;
// //     if(itemActive < 0){
// //         itemActive = countItem - 1;
// //     }
// //     showSlider();
// // }
// // auto run slider
// // let refreshInterval = setInterval(() => {
// //     next.click();
// // }, 5000)
// // function showSlider(){
// //     // remove item active old
// //     let itemActiveOld = document.querySelector('.slider .list .item.active');
// //     let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
// //     itemActiveOld.classList.remove('active');
// //     thumbnailActiveOld.classList.remove('active');

// //     // active new item
// //     items[itemActive].classList.add('active');
// //     thumbnails[itemActive].classList.add('active');

// //     // clear auto time run slider
// //     clearInterval(refreshInterval);
// //     refreshInterval = setInterval(() => {
// //         next.click();
// //     }, 5000)
// // }

// // click thumbnail
// // thumbnails.forEach((thumbnail, index) => {
// //     thumbnail.addEventListener('click', () => {
// //         itemActive = index;
// //         showSlider();
// //     })
// // })
//   return (
//     <section className='container team-home'>
//     {/* <div className='team-home-heading'>
//         <h1>The Team</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et numquam modi laborum deserunt odit eius illo, quaerat dicta delectus?</p>
//     </div>
//     <div className='team-home__container bd-container'>
//         <div className="team-home__glass">
//             <img className="team-home__img" src={gracedr} alt="" />
//             <div className="team-home__data">
//                 <h3 className='team-home__title'> Grace Omodho </h3>
//                 <span className='team-home__profession'>Deputy Registrar</span>
//             </div>
//             <Link to='/team' className='team-home__button'>Know more</Link>          
//             </div>
//             <div className="team-home__glass">
//             <img className="team-home__img" src={lydiadr} alt="" />
//             <div className="team-home__data">
//                 <h3 className='team-home__title'> Lydia Mbacho </h3>
//                 <span className='team-home__profession'>Deputy Registrar</span>
//             </div>
//             <Link to='/team' className='team-home__button'>Know more</Link>        
//             </div>
//             <div className="team-home__glass">
//             <img className="team-home__img" src={miano} alt="" />
//             <div className="team-home__data">
//                 <h3 className='team-home__title'> CPA Samuel Miano </h3>
//                 <span className='team-home__profession'>Assistant Director Finance</span>
//             </div>
//             <Link to='/team' className='team-home__button'>Know more</Link>          
//             </div>
           

//     </div>
//      <div className='team-home__container bd-container'>
//         <div className="team-home__glass">
//             <img className="team-home__img" src={njeru} alt="" />
//             <div className="team-home__data">
//             <h3 className='team-home__title'> CPA Emmanuel Njeru </h3>
//                 <span className='team-home__profession'>Assistant Director Finance</span>
//             </div>
//             <Link to='/team' className='team-home__button'>Know more</Link>             
//             </div>
//             <div className="team-home__glass">
//             <img className="team-home__img" src={diramu} alt="" />
//             <div className="team-home__data">
//             <h3 className='team-home__title'> Diramu Gollo </h3>
//                 <span className='team-home__profession'>Senior Supply Chain Officer</span>
//             </div>
//             <Link to='/team' className='team-home__button'>Know more</Link>       
//             </div>
//             <div className="team-home__glass">
//             <img className="team-home__img" src={gracedr} alt="" />
//             <div className="team-home_data">
//                 <h3 className='team-home__title'> Charles Mbogo </h3>
//                 <span className='team-home__profession'>Supply Chain Officer</span>
//             </div>
//             <Link to='/team' className='team-home__button'>Know more</Link>           
//             </div>
            
     
           
          
    
          
//     </div> */}

// {/* <div className="slider-images">
//         <div className="slider-img">
//           <img src={gracedr} alt="1" />
//           <h1>Mike</h1>
//           <div className="details">
//             <h2>Mike</h2>
//             <p>web3 Developer</p>
//           </div>
//         </div>
//         <div className="slider-img">
//           <img src={lydiadr} alt="2" />
//           <h1>samite</h1>
//           <div className="details">
//             <h2>samite</h2>
//             <p>wordpress Developer</p>
//           </div>
//         </div>
//         <div className="slider-img">
//           <img src={miano} alt="3" />
//           <h1>hashi</h1>
//           <div className="details">
//             <h2>hashi</h2>
//             <p>java Developer</p>
//           </div>
//         </div>
//         <div className="slider-img active">
//           <img src={njeru} alt="4" />
//           <h1>kaity</h1>
//           <div className="details">
//             <h2>kaity</h2>
//             <p>web Developer</p>
//           </div>
//         </div>
//         <div className="slider-img">
//           <img src={diramu} alt="5" />
//           <h1>lauren</h1>
//           <div className="details">
//             <h2>lauren</h2>
//             <p>php Developer</p>
//           </div>
//         </div>
//         <div className="slider-img">
//           <img src={miano} alt="6" />
//           <h1>ryan</h1>
//           <div className="details">
//             <h2>ryan</h2>
//             <p>seo Developer</p>
//           </div>
//         </div>
//         <div className="slider-img">
//           <img src={gracedr} alt="7" />
//           <h1>dakes</h1>
//           <div className="details">
//             <h2>dakes</h2>
//             <p>sql Developer</p>
//           </div>
//         </div>
//         <Helmet>
//       <script>
//      $(document).ready(function ($) {
//     document.getElementsByClassName("slider-img").addEventListener("click", function () {
//       document.getElementsByClassName("slider-img").classList.remove("active");
//       $(this).classList.add("active");
//     })
//   })
// </script>

//       </Helmet>
//       </div> */}

// <div className="slider">
      
//         <div  className="list">
//             <div  className="item active">
//                 <img src="image/img1.png"/>
//                 <div  className="content">
//                     <p>design</p>
//                     <h2>Slider 01</h2>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
//                     </p>
//                 </div>
//             </div>
//             <div  className="item">
//                 <img src="image/img2.jpg"/>
//                 <div  className="content">
//                     <p>design</p>
//                     <h2>Slider 02</h2>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
//                     </p>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src="image/img3.jpg"/>
//                 <div  className="content">
//                     <p>design</p>
//                     <h2>Slider 03</h2>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
//                     </p>
//                 </div>
//             </div>
//             <div className="item">
//                 <img src="image/img4.jpg"/>
//                 <div  className="content">
//                     <p>design</p>
//                     <h2>Slider 04</h2>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
//                     </p>
//                 </div>
//             </div>
//             <div className="item">
//                 <img src="image/img5.jpg"/>
//                 <div  className="content">
//                     <p>design</p>
//                     <h2>Slider 05</h2>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
//                     </p>
//                 </div>
//             </div>
//         </div>

//         <div  className="arrows">
//             <button id="prev"></button>
//             <button id="next"></button>
//         </div>
        
//         <div  className="thumbnail">
//             <div  className="item active">
//                 <img src={gracedr}/>
//                 <div  className="content">
                   
//                 </div>
//             </div>
//             <div  className="item">
//                 <img src={miano}/>
//                 <div  className="content">
                  
//                 </div>
//             </div>
//             <div  className="item">
//                 <img src={njeru}/>
//                 <div  className="content">
                   
//                 </div>
//             </div>
//             <div  className="item">
//                 <img src={lydiadr}/>
//                 <div  className="content">
                 
//                 </div>
//             </div>
//             <div  className="item">
//                 <img src={miano}/>
//                 <div  className="content">
                 
//                 </div>
//             </div>
//         </div>
//     </div>

  
//     </section>
//   )
// }
return(
    <section data-aos='fade-up' data-aos-duration='2500' className='all-tribunals-section'>
         <h1 >The Tribunals</h1>
        <div className='all-tribunals'>
          
        <div  className='image_tribunal'>
            <img src={knowyourt}/>
        </div>
      <div  className='info_tribunal'>
         
            <p>There are over 38 Tribunals in Kenya established under various Acts of Parliament. The Registrar of Tribunals oversees a secretariat that manages the operations of 26 Tribunals, which have transitioned to the Judiciary, with more expected to follow<br></br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit explicabo tempora harum fuga quasi deserunt odit similique cum sapiente repudiandae, natus labore maxime beatae facilis magnam corrupti ea sint esse?<br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex ad in aliquam natus? Officiis quasi vitae fugiat aperiam ratione, provident alias facere, possimus, impedit corporis qui nulla perspiciatis? Aut, earum ab, libero facere quia accusamus nihil a, nam odio nemo nesciunt ea in dolores iste tempore quidem incidunt praesentium.</p>
            <div className='button-top'>
             <Link className="button-link" to="https://tinyurl.com/knowyourtribunals"   target="_blank"> Click to Know your Tribunal </Link> 
             </div>
        </div>
       
        </div>
    </section>
)}

 export default Teamhome