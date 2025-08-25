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
                <h4>M.S. Business and Information Systems</h4>
                <h5>Sep 2022 - May 2024</h5>
                <p><em>New Jersey Institute of Technology, Newark, NJ</em></p>
                 <ul>
                  <li>GPA: 3.5</li>
                  <li>Dean's List</li>
                  <li>Member of Association for Computing Machinery</li>
                  <li>Member of Google Student Developer Club</li>
                  <li>Member of Graduate Student Association</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>B.S. Web and Information Systems</h4>
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
                <h4>NJIT Esports President</h4>
                <h5>Sep 2018 - May 2022</h5>
                <p><em>New Jersey Institute of Technology, Newark, NJ</em></p>
               <ul>
                <li>Built a React-based website to control and update custom animated stream overlays in OBS remotely, improving tournament stream workflows through a self-hosted tool</li>
                <li>Managed and maintained the NJIT Esports Twitch channel, including streaming live tournament events and overseeing stream production</li>
                <li>Organized multiple in-person and online gaming tournaments with over 200 attendees, handling logistics, promotion, and stream coordination</li>
                <li>Negotiated sponsorships and partnerships with Mtn Dew AMP Game Fuel, Andbox, Tespa, and Collision to support club events and operations</li>
                <li>Helped initiate the creation of an Esports academic minor at NJIT and worked with faculty to secure a dedicated training space for university esports teams</li>
              </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
                <h4>Associate Software Engineer </h4>
                <h5>Jan 2023 - Present</h5>
                <p><em>Scholastic, New York, NY</em></p>
                <ul>
                  <li>Developed a reusable React application to manage complex JSON-based assets stored in MongoDB, featuring paginated lists, advanced filtering/sorting, and dynamic forms for asset editing and nested assets grouping</li>
                  <li>Developed a Java Spring Boot API to ingest data from Kafka queues, clean it, and populate Algolia search records</li>
                  <li>Built a Java Spring Boot API to obfuscate Algolia search requests and implemented Redis caching, reducing redundant search query requests</li>
                  <li>Created a modular, reusable React search library that enabled multiple teams to easily configure and integrate tailored search solutions for their unique requirements</li>
                  <li>Utilized Storybook to document and demonstrate seamless integration and configuration of the internal React search library</li>
                  <li>Designed a React form leveraging a Java Spring Boot API to upload, preview, and display thumbnail images and metadata from AWS S3 buckets</li>
                  <li>Enhanced a React eReader using ePubJS to render ePub files and implemented features to attach persistent highlights and notes to DOM elements for an improved consistent reading experience regardless of platform</li>
                  <li>Delivered personalized monthly email reports summarizing accurate usage statistics of Scholastic products for customers and school districts</li>
                  <li>Collaborated directly with Scholastic Stats customers to resolve data inaccuracies and address any usage reporting issues</li>
                  <li>Deployed multiple projects using AWS and provided integration support to other teams adopting reusable applications, promoting cross-team collaboration</li>
                  <li>Established team standards for user stories, code reviews, quality assurance, customer acceptance, and agile best practices ensuring high-quality delivery</li>
                  <li>Onboarded new team members and authored comprehensive documentation to facilitate knowledge transfer and smooth handover of project support</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Full Stack Developer Intern </h4>
                <h5>May 2022 - Dec 2022</h5>
                <p><em>IMM: The eSignature Company, Rahway, NJ</em></p>
                <ul>
                  <li>Upgraded the web admin portal framework, Angular, from versions 5.0 to version 13.0</li>
                  <li>Replaced outdated Angular modules and adjusted implementation to work with new
                    Angular modules</li>
                  <li>Implemented lazy loading for all databases used by the admin portal to dramatically
                    increase load times</li>
                  <li>Created a .net tool for QA to stress test API calls and find memory leaks</li>
                  <li>Managed and deployed apps using Azure DevOps as well as monitoring and maintaining them on Azure Cloud</li>
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
