import React from 'react'
import '../CSS/bootstrap/css/bootstrap.min.css'
import '../CSS/icofont/icofont.min.css'
import '../CSS/boxicons/css/boxicons.min.css'
import '../CSS/venobox/venobox.css'
import '../CSS/owl.carousel/assets/owl.carousel.min.css'
import '../CSS/aos/aos.css'
import '../CSS/general.css'

const Resume = () => {
  return (
      <section id="resume" className="resume">
        <div className="container aos-init aos-animate" data-aos="fade-up">

          <div className="section-title">
            <h2>Resume</h2>
            <p>Overview of my current resume</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Denis Smirnov</h4>

                <ul>
                  <li>Metuchen, NJ</li>
                  <li>(732) 535-8907</li>
                  <li>das96@njit.edu</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>B.S. in Web and Information Systems</h4>
                <h5>Sep 2018 - May 2022</h5>
                <p><em>New Jersey Institute of Technology, Newark, NJ</em></p>
                <ul>
                  <li>GPA: 3.5</li>
                  <li>Dean's List</li>
                  <li>Member of Association for Computing Machinery</li>
                  <li>Member of Google Student Developer Club</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>M.S. Business and Information Systems</h4>
                <h5>Sep 2022 - May 2024</h5>
                <p><em>New Jersey Institute of Technology, Newark, NJ</em></p>
              </div>
              <div className="resume-item">
                <h4>NJIT Esports President</h4>
                <h5>Sep 2019 - May 2022</h5>
                <p><em>New Jersey Institute of Technology, Newark, NJ</em></p>
                <ul>
                  <li>Assisted in the creation of an esports minor for New Jersey Institute of Technology as well as the
                    creation of a training space for university esports teams</li>
                  <li>Created a React website to animate stream overlays and automate dynamic updates remotely</li>
                  <li>Met with and negotiated sponsorships with MNT DEW AMP Game Fuel, Andbox, Tespa, and Collision</li>
                  <li>Hosted and organized multiple video game tournaments with over 200 attendees</li>
                  <li>Increased organization revenue from events by 200%</li>
                  <li>Improved online event attendance by 30% over the lockdown</li>
                  <li>Created and maintained the NJIT Esports twitch channel</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Experience</h3>
              <div className="resume-item">
                <h4>Full Stack Developer Intern </h4>
                <h5>May 2022 - Present</h5>
                <p><em>IMM: The eSignature Company, Rahway, NJ</em></p>
                <ul>
                  <li>Upgraded the web admin portal framework, Angular, from versions 5.0 to version 13.0</li>
                  <li>Replaced outdated Angular modules and adjusted implementation to work with new
                    Angular modules</li>
                  <li>Implemented lazy loading for all databases used by the admin portal to dramatically
                    increase load times</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Frontend Web Developer Intern</h4>
                <h5>Jan 2022 - May 2022</h5>
                <p><em>Eco-Enterprise, New York, NY</em></p>
                <ul>
                  <li>Updated Python Flask and React app to make an admin portal with better access to client responses
                    and data</li>
                  <li>Created a replacement for Typeform to dynamically create custom solutions, cutting costs by over
                    15%</li>
                  <li>Built a dynamic form creator/editor with a simple intuitive UI for users to dynamically generate
                    a solution form that is stored as a JSON file using a REST API</li>
                  <li>Constructed a dynamic form viewer to fetch a form's JSON file from the REST API, dynamically
                    rendering the solution form with the ability to save and load old user inputs</li>
                  <li>Built a dynamic form creator/editor with a simple intuitive UI for users to dynamically generate
                  a solution form that is stored as a JSON file using a REST API</li>
                  <li>Produced an admin portal with a CSV downloader, tables to display data, the ability to group data
                    in folders, and a dashboard to view high-level statistics</li>
                  <li>Worked as part of a team using Github to collaborate and presented progress to management in
                    weekly meetings</li>
                  <li>Were awarded first place at the associated capstone presentation</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Research Assistant</h4>
                <h5>Sep 2019 - Mar 2020</h5>
                <p><em>Social Interaction Lab, Newark, NJ</em></p>
                <ul>
                  <li>Drafted templates and conducted interviews for user interaction research</li>
                  <li>Cleaned, organized, graphed, and analyzed data from interview</li>
                  <li>Presented research findings and developments at weekly meetings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Resume
