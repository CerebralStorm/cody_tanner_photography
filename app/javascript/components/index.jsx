import React from 'react'

import recent1 from '../images/recent1.jpg'
import recent2 from '../images/recent2.jpg'
import recent3 from '../images/recent3.jpg'
import recent4 from '../images/recent4.jpg'
import recent5 from '../images/recent5.jpg'
import recent6 from '../images/recent6.jpg'

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
              <img src="img/slide1.jpg" alt="" />
            </div>

            <div className="item">
              <img src="img/slide2.jpg" alt="" />
            </div>
          </div>

          <a className="left carousel-control" href="#carousel-header" role="button" data-slide="next">
            <img src="img/left.png" alt="Previous" />
          </a>
          <a className="right carousel-control" href="#carousel-header" role="button" data-slide="next">
            <img src="img/right.png" alt="Next" />
          </a>
        </div>

        <div id="about" className="content-block content-block-cyan">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <h1>Cody Tanner Photography</h1>
                <p>
                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis.
                </p>
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
                    <div>
                        <img src={recent1} alt="" />
                        <a href="#">Cartoon de loop</a>
                    </div>
                    <div>
                        <img src={recent2} alt="" />
                        <a href="#">In to the snow</a>
                    </div>
                    <div>
                        <img src={recent3} alt="" />
                        <a href="#">girl in sunset</a>
                    </div>
                    <div>
                        <img src={recent4} alt="" />
                        <a href="#">Tools</a>
                    </div>
                    <div>
                        <img src={recent5} alt="" />
                        <a href="#">Sunrise in west</a>
                    </div>
                    <div>
                        <img src={recent6} alt="" />
                        <a href="#">girl in sunset</a>
                    </div>
                    <div>
                        <img src={recent4} alt="" />
                        <a href="#">Lorem Ipsum</a>
                    </div>
                </div>
            </div>
        </div>



        <div id="blog" className="content-block content-block-gray">
            <div className="container">
                <header className="block-heading cleafix">
                    <a href="#" className="btn btn-o btn-lg pull-right">View All</a>
                    <h1>From the Blog</h1>
                    <p>Keep up with the latest happenings.</p>
                </header>
                <section className="block-body">
                    <div className="row">
                        <div className="col-sm-4 blog-post">
                            <img src="img/bike_water1-1000x600.jpg" alt="Design Your Mind" />
                            <a href="#"><h2>Design Your Mind</h2></a>
                            <div className="date">3 Nov, 2014</div>
                        </div>
                        <div className="col-sm-4 blog-post">
                            <img src="img/mac_glasses1-1000x600.jpg" alt="Winter Is Comming" />
                            <a href="#"><h2>Winter Is Comming</h2></a>
                            <div className="date">3 Nov, 2014</div>
                        </div>
                        <div className="col-sm-4 blog-post">
                            <img src="img/road-1000x600.jpg" alt="The Illustration" />
                            <a href="#"><h2>The Illustration</h2></a>
                            <div className="date">3 Nov, 2014</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    );
  }
}

export default Index;

