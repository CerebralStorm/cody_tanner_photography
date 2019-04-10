import React from 'react'
import ProjectTile from './projects/project_tile'
import BlogTile from './blogs/blog_tile'

import recent1 from '../images/recent1.jpg'
import recent2 from '../images/recent2.jpg'
import recent3 from '../images/recent3.jpg'
import recent4 from '../images/recent4.jpg'
import recent5 from '../images/recent5.jpg'
import recent6 from '../images/recent6.jpg'
import left from '../images/left.png'
import right from '../images/right.png'
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'

class Index extends React.Component {
  render() {
    return (
      <div>
        <div id="carousel-header" className="carousel slide" data-ride="carousel" data-interval="8000">
          <div className="carousel-inner">
            <div className="camera-icon hidden-sm hidden-xs">
              <div className="circle">
                <div className="hexagon">
                  <i className="fa  fa-camera"></i>
                </div>
              </div>
            </div>

            <div className="item active">
              <img src={slide1} alt="" />
            </div>

            <div className="item">
              <img src={slide2} alt="" />
            </div>
          </div>

          <a className="left carousel-control" href="#carousel-header" role="button" data-slide="next">
            <img src={left} alt="Previous" />
          </a>
          <a className="right carousel-control" href="#carousel-header" role="button" data-slide="next">
            <img src={right} alt="Next" />
          </a>
        </div>

        <div id="about" className="content-block content-block-cyan">">
          <div className="container">
            <div className="row">
              <div className="col-8 mx-auto">
                <div>
                  <h1>CodyTanner.com Real Estate Photography</h1>
                  <p>
                    I regularly look at propertis on the MLS. I am blown away at how bad the majority of the photos are. Please don't make that same mistake. If you have good photos of your property, you will have more buyers come visit.
                    With more buyers you will get more offers and will ultimately end up getting a much better price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="projects" className="recent-projects">
          <div className="recent-projects-title">
            Recent Projects
          </div>

          <div className="recent-projects-content content-block-gray">
            <div id="owl-example" className="owl-carousel">
              <ProjectTile />
              <ProjectTile />
              <ProjectTile />
              <ProjectTile />
              <ProjectTile />
            </div>
          </div>
        </div>

        <div id="blog" className="content-block content-block-gray">
          <div className="container">
            <header className="block-heading cleafix">
              <a href="#" className="btn btn-o btn-lg float-right">View All</a>
              <h1>From the Blog</h1>
              <p>Keep up with the latest happenings.</p>
            </header>
            <section className="block-body">
              <div className="row">
                <BlogTile />
                <BlogTile />
                <BlogTile />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;

