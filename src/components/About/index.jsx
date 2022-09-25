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
              <img src="https://cdn.discordapp.com/attachments/109730701175222272/1011700946188898339/profile-img-big.png" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>frontend Developer</h3>
              <p className="font-italic">
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 28 February 2000</li>
                    <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                    <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> (732) 535-8907</li>
                    <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Metuchen : New Jersey, USA</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 22</li>
                    <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Graduate</li>
                    <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> das96@njit.com</li>
                    <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                  </ul>
                </div>
              </div>
              <p>
                I am a Business and Information Systems Masters student with 2+ years of experience using frontend web
                development technologies like React, Redux, Docker, Angular, and Git to deliver cutting-edge robust
                products. As an experienced professional, I am looking for a Frontend Software Engineer role in a
                dynamic organization that values my communication and technical skills while providing a scope for
                further career development. I am interested in a fast-paced position where I can help to grow the
                company, achieve corporate goals, that gives me opportunities to further myself, and take on more
                responsibilities.
              </p>
            </div>
          </div>

        </div>
      </section>
  )
}

export default About
