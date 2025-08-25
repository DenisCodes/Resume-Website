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
              <img src="https://media.licdn.com/dms/image/v2/D4E03AQGz11nd5ioSDQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726961346138?e=1758758400&v=beta&t=ly3RkDCtpFDr78QiuxPiHZOq52waaoaKrNMSpiRVrnQ" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Software Engineer</h3>
              <p className="font-italic">
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> <a href="http://smirnov.plus/">smirnov.plus</a></li>
                    <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> (732) 535-8907</li>
                    <li><i className="icofont-rounded-right"></i> <strong>Location:</strong> New Jersey, USA</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Graduate</li>
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
