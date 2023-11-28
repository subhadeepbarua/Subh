import React from 'react'
import {Link} from 'react-router-dom';
import './footer.css'
import call from '../../assets/call.png'
import linkedIn from '../../assets/linkedIn.png'
import whatsapp from '../../assets/whatsapp.png'
import gmail from '../../assets/gmail.png'
import github from '../../assets/github.png'
import twitter from '../../assets/twitter.png'
const Footer = () => {
  return (
    <footer>
     <section className='footerContainer'>
      <div className='footerBox'>
  
  <Link to='https://twitter.com/SubhadeepBarua5' target='_blank' className="social-link" onmouseover="showNumber(this)" onmouseout="hideNumber(this)">
    <img className='footerSocialImg' src={twitter} alt='twitter' />
  </Link>
  <div className="social-link" onmouseover="showNumber(this)" onmouseout="hideNumber(this)">
    <img className='footerSocialImg' src={call} alt='call' />
    <div className="socialInfo">7001250876</div>
  </div>
  <div className="social-link" onmouseover="showNumber(this)" onmouseout="hideNumber(this)">
    <img className='footerSocialImg' src={gmail} alt='gmail' />
    <div className="socialInfo">subhadipbarua944@gmail.com</div>
  </div>
  <Link to='https://github.com/subhadeepbarua' target='_blank' className="social-link" onmouseover="showNumber(this)" onmouseout="hideNumber(this)">
    <img className='footerSocialImg' src={github} alt='github' />
  </Link>

  <div className="social-link" onmouseover="showNumber(this)" onmouseout="hideNumber(this)">
    <img className='footerSocialImg' src={whatsapp} alt='whatsapp' />
    <div className="socialInfo">8142021253</div>
  </div>
  <Link to='https://www.linkedin.com/in/subhadeep-barua-0bb114211/' target='_blank' className="social-link" onmouseover="showNumber(this)" onmouseout="hideNumber(this)">
    <img className='footerSocialImg' src={linkedIn} alt='linkedIn' />
  </Link>

</div>

      <div className='footerBelow'>
        <div className='footerBottom'>
          <h1>Made By Subhadeep</h1>
          </div>
      </div>
     </section>
  </footer>
  )
}

export default Footer
