import React, {useState} from 'react'

import '../CSS/bootstrap/css/bootstrap.min.css'
import '../CSS/icofont/icofont.min.css'
import '../CSS/boxicons/css/boxicons.min.css'
import '../CSS/venobox/venobox.css'
import '../CSS/owl.carousel/assets/owl.carousel.min.css'
import '../CSS/aos/aos.css'
import '../CSS/general.css'

const Hero = () => {

  return (
      <section id="hero" className="d-flex flex-column justify-content-center">
          <div className="container">
              <h1>Denis Smirnov</h1>
              <div className="typecontainer">
                  <div class="typewriter">
                      <p>I am a <pb>Developer </pb></p>
                  </div>
              </div>
              <div className="social-links">
                  <a href="https://www.instagram.com/shots_of_smirnov/" className="instagram"><i
                      className="bx bxl-instagram"></i></a>
                  <a href="https://github.com/DenisCodes" className="github"><i className="bx bxl-github"></i></a>
                  <a href="https://www.linkedin.com/in/denis-smirnov-0521b2165/" className="linkedin"><i
                      className="bx bxl-linkedin"></i></a>
                  <a href="mailto: smirnovadenis@gmail.com" className="envelope"><i className="bx bx-envelope"></i></a>
              </div>
          </div>
      </section>
  )
}

export default Hero
