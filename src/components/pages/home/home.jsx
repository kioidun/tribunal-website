import React ,{useEffect} from 'react'
import Mainheader from '../../homescroll/mainheader/mainheader'
import Registrarmessage from '../../homescroll/registrarmessage/registrarmessage'
import Teamhome from '../../homescroll/teamhome/teamhome'
import Casefilled from '../../homescroll/casesfilled/casefiled'
import Tribunalstwo from '../../homescroll/tribunalstwo/Tribunalstwo'
import Faq from '../../faqs/Faqs'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
   <>
    <Mainheader data-aos='fade-up' data-aos-duration='2500'/>
    <Registrarmessage data-aos='fade-up' data-aos-duration='2500'/>
    <Teamhome data-aos='fade-up' data-aos-duration='2500'/>
    {/* <Tribunalstwo/> */}
    <Casefilled data-aos='fade-up' data-aos-duration='2500'/>
    {/* <Faq/> */}
   </>
  )
}

export default Home