import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#"><strong>CODY</strong>TANNER.COM</a>
          </div>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item"><a href="#carousel-header">Home</a></li>
              <li class="nav-item"><a href="#about">About</a></li>
              <li class="nav-item"><a href="#projects">Projects</a></li>
              <li class="nav-item"><a href="#blog">Blog</a></li>
              <li class="nav-item"><a href="#social">Social</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;