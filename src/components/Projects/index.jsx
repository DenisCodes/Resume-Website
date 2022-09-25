import React from 'react'
import '../CSS/bootstrap/css/bootstrap.min.css'
import '../CSS/icofont/icofont.min.css'
import '../CSS/boxicons/css/boxicons.min.css'
import '../CSS/venobox/venobox.css'
import '../CSS/owl.carousel/assets/owl.carousel.min.css'
import '../CSS/aos/aos.css'
import '../CSS/general.css'

const Projects = () => {
  return (
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My past projects</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-web">Personal</li>
                <li data-filter=".filter-card">Professional</li>
                <li data-filter=".filter-app">App</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="../../images/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="../../images/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox"
                         title="App 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe"
                         className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="../../images/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="../../images/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox"
                         title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe"
                         className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="../../images/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="../../images/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox"
                         title="App 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe"
                         className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="../../images/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="../../images/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox"
                         title="Card 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe"
                         className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="../../images/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="../../images/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox"
                         title="Web 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe"
                         className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="../../images/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="../../images/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox"
                         title="App 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe"
                         className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="../../images/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="../../images/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox"
                         title="Card 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe"
                         className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="../../images/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="../../images/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox"
                         title="Card 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe"
                         className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="../../images/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="../../images/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox"
                         title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe"
                         className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

          </div>

        </div>
      </section>
  )
}

export default Projects
