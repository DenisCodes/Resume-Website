import React from 'react'
import '../CSS/bootstrap/css/bootstrap.min.css'
import '../CSS/icofont/icofont.min.css'
import '../CSS/boxicons/css/boxicons.min.css'
import '../CSS/venobox/venobox.css'
import '../CSS/owl.carousel/assets/owl.carousel.min.css'
import '../CSS/aos/aos.css'
import '../CSS/general.css'

const About = () => {
  return (
      <section id="about" className="about">
        <div className="container" >

          <div className="section-title">
            <h2>About</h2>
            <p>A little background on who I am</p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img src="https://cdn.discordapp.com/attachments/900090429054271599/1410666736071737415/me_circle.png?ex=68b1d946&is=68b087c6&hm=eb1cf140f6e461062b19cdb0085cc4c7dfa301222db1a4680b40f9f822128424" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Software Engineer</h3>
              <p className="font-italic">
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> <a href="https://smirnov.gg/">smirnov.gg</a></li>
                    <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> (732) 535-8907</li>
                    <li><i className="icofont-rounded-right"></i> <strong>Location:</strong> New Jersey, USA</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="icofont-rounded-right"></i> <strong>Degrees:</strong> MS in BIS & BS in WIS </li>
                    <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> das96@njit.com</li>
                    <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 28 February 2000</li>
                  </ul>
                </div>
              </div>
              <p>
                I hold a Master’s degree in Business and Information Systems and bring over 4 years of hands-on experience in frontend and backend web development. I specialize in building robust, user-focused applications using technologies like React, Java Spring Boot, Angular, ASP core .net,  AWS/Azure cloud, and Git. I’m actively seeking a full-time Frontend/Full stack Software Engineer role within a dynamic organization that values both strong technical expertise and clear communication. I thrive in fast-paced environments where I can contribute to business growth, take on new challenges, and continue advancing my career.
              </p>
            </div>
          </div>

        </div>
      </section>
  )
}

export default About
