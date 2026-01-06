import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-copyright">© 2025 StrykeX. All rights reserved.</span>
        </div>
        <div className="footer-right">
          <div className="footer-contact-item">
            <svg className="footer-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zm1 2.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor"/>
            </svg>
            <span className="footer-contact-text">+91 6377959992</span>
          </div>
          <div className="footer-contact-item">
            <svg className="footer-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zm1 2.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor"/>
            </svg>
            <span className="footer-contact-text">+91 6377959992</span>
          </div>
          <div className="footer-contact-item">
            <svg className="footer-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm0 1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2V4a1 1 0 0 1 1-1zm0 9.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v-6.5L8.5 9.8a.5.5 0 0 1-.5 0L2.5 6.5V12.5z" fill="currentColor"/>
            </svg>
            <span className="footer-contact-text">Sambhav@stryke.tech</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

