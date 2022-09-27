import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import '../CSS/bootstrap/css/bootstrap.min.css'
import '../CSS/icofont/icofont.min.css'
import '../CSS/boxicons/css/boxicons.min.css'
import '../CSS/venobox/venobox.css'
import '../CSS/owl.carousel/assets/owl.carousel.min.css'
import '../CSS/aos/aos.css'
import '../CSS/general.css'

const Skills= () => {
  return (
      <section id="skills" className="skills section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Skills</h2>
            <p>My tech stack</p>
          </div>

          <div className="row skills-content">

            <div className="col-lg-6">

              <div className="progress">
                <span className="skill">React.js <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <LinearProgress variant="determinate" value={70} />
                </div>
              </div>

              <div className="progress">
                <span className="skill">Angular.js <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <LinearProgress variant="determinate" value={60} />
                </div>
              </div>

              <div className="progress">
                <span className="skill">HTML & CSS <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <LinearProgress variant="determinate" value={90} />
                </div>
              </div>

            </div>

            <div className="col-lg-6">

              <div className="progress">
                <span className="skill">ASP.NET Core <i className="val">40%</i></span>
                <div className="progress-bar-wrap">
                  <LinearProgress variant="determinate" value={40} />
                </div>
              </div>

              <div className="progress">
                <span className="skill">Github/Azure DevOps <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <LinearProgress variant="determinate" value={90} />
                </div>
              </div>

              <div className="progress">
                <span className="skill">Azure Cloud <i className="val">55%</i></span>
                <div className="progress-bar-wrap">
                  <LinearProgress variant="determinate" value={55} />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
  )
}

export default Skills
