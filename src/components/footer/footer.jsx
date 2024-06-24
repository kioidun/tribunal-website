import React from 'react'
import {Link} from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import Logo from '../resources/images/logo.png'
import {MdEmail} from 'react-icons/md'
import './footer.css'


const Footer = () => {
  return (
   <footer>
    <div className="container footer_container">
        <article>
            <Link to='/' className='logo'> 
                <img src={Logo} alt='footer logo'/>
            </Link>
            <p>
            The Judiciary derives its mandate from the Constitution of Kenya, Article 159. 
            It exercises judicial authority given to it, by the people of Kenya and delivers justice according to t
            he Constitution and other laws. The Judiciary is expected to handle disputes in a just manner, with a view to 
            protecting the rights and liberties of all, thereby facilitating the attainment of the ideal rule of law.
            </p>
            <div className='footer_socials'>
                <a href="https://linkedin.com" target="_blank" rel='noreferrer noopener'>
                    <FaLinkedin/>
                </a>
                <a href="https://www.facebook.com/Tribunals-Secretariat-110292528397473/?ref=pages_you_manage" target="_blank" rel='noreferrer noopener'>
                    <FaFacebookF/>
                </a>
                <a href="https://twitter.com/ortsecretariat?s=11&t=28HbU7ZjlcXsn_Ca9C4Ajw" target="_blank" rel='noreferrer noopener'>
                    <AiOutlineTwitter/>
                </a>
                <a href="https://instagram.com/ort_secretariat?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel='noreferrer noopener'>
                    <AiFillInstagram/>
                </a>
            </div>
        </article>
        <article className='our_partners'>
            <h4>OUR PARTNERS</h4>
            <Link to='https://www.ncaj.go.ke/' target="_blank">NCAJ</Link>
            <Link to='https://www.odpp.go.ke/' target="_blank">ODPP</Link>
            <Link to='http://kenyalaw.org/kl/' target="_blank">Kenya Law</Link>
            <Link to='https://www.statelaw.go.ke/' target="_blank">State Law Office</Link>
            <Link to='https://prisons.go.ke/' target="_blank">Kenya Prisons Service</Link>
            <Link to='https://kenyapolice.go.ke/' target="_blank">Kenya Police Service</Link>
            <Link to='https://lsk.or.ke/' target="_blank">Law Society Of Kenya</Link>
            

        </article>
        {/* <article>
            <h4>Insights</h4>
            <Link to='/s'>Cases</Link>
            <Link to='/s'>Events</Link>
            <Link to='/s'>Social </Link>
            <Link to='/s'>Community</Link>
            <Link to='/s'>Faqs</Link>

        </article> */}
        <article>
            <h4>Get in touch</h4>
            <Link to="https://www.facebook.com/Tribunals-Secretariat-110292528397473/?ref=pages_you_manage" target="_blank">Facebook</Link>
            <Link to="https://twitter.com/ortsecretariat?s=11&t=28HbU7ZjlcXsn_Ca9C4Ajw" target="_blank">Twitter</Link>
            <Link to="https://instagram.com/ort_secretariat?igshid=MzMyNGUyNmU2YQ==" target="_blank">Instagram</Link>
            <Link to='/s'>Whatsapp</Link>
            <Link to= 'mailto:ortsecretariat@gmail.com' target='_blank' rel='noreferrer noopener'>Email</Link>
            <Link to="tel:0730181895" target='_blank'>Click to call</Link>

        </article>
    </div>
    <div className="footer_copyright">
        <small>2023 The Judiciary Of Kenya &copy; All rights reserved</small>

    </div>
   </footer>
  )
}

export default Footer