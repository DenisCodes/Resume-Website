import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import '../CSS/bootstrap/css/bootstrap.min.css'
import '../CSS/icofont/icofont.min.css'
import '../CSS/boxicons/css/boxicons.min.css'
import '../CSS/venobox/venobox.css'
import '../CSS/owl.carousel/assets/owl.carousel.min.css'
import '../CSS/aos/aos.css'
import '../CSS/general.css'

const Footer = () => {

  return (
      <div>
      <footer id="footer">
        <div className="container">
          <h3>Denis Smirnov</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/shots_of_smirnov/" className="instagram"><i
                className="bx bxl-instagram"></i></a>
            <a href="https://github.com/DenisCodes" className="github"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/denis-smirnov-0521b2165/" className="linkedin"><i
                className="bx bxl-linkedin"></i></a>
            <a href="mailto: smirnovadenis@gmail.com" className="envelope"><i
                className="bx bx-envelope"></i></a>
          </div>
          <div className="copyright">
            &copy; Copyright <strong><span>Denis Smirnov</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
      </div>

  )
}

export default Footer
