import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div id="social" className="content-block">
          <div className="container text-center">
            <div className="hexagon"><a href="#"><i className="fa fa-facebook"></i></a></div>
            <div className="hexagon"><a href="#"><i className="fa fa-twitter"></i></a></div>
            <div className="hexagon"><a href="#"><i className="fa fa-google-plus"></i></a></div>
            <div className="hexagon"><a href="#"><i className="fa fa-instagram"></i></a></div>
            <div className="hexagon"><a href="#"><i className="fa fa-pinterest"></i></a></div>
            <div className="hexagon"><a href="#"><i className="fa fa-envelope"></i></a></div>
          </div>
        </div>

        <footer className="content-block content-block-dark">
          <p>&copy; Copyright Photographer 2014. Theme by <a href="https://themewagon.com/" target="_blank"> ThemeWagon</a></p>
        </footer>
      </div>
    );
  }
}

export default Footer;
