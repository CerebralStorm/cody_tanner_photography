import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div id="top" className="navbar navbar-dark navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <i className="fa fa-bars fa-2x"></i>
            </button>
            <a className="navbar-brand" href="#"><strong>PHOTO</strong>GRAPHER</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="#carousel-header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#social">Social</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;