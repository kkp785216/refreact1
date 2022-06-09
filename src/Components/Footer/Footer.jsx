import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
      <div className="footer">
          <img src={Wave} alt="" width="100%"/>
          <div className="f-content">
              <span>kkp785216@gmail.com</span>
              <div className="f-icon">
                  <Insta color='white' width='3rem' height='3rem'/>
                  <Facebook color='white' width='3rem' height='3rem'/>
                  <Github color='white' width='3rem' height='3rem'/>
              </div>
          </div>
      </div>
  )
}

export default Footer