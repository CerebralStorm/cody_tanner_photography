import React from 'react'
import recent1 from '../../images/recent1.jpg'

class BlogTile extends React.Component {
  render() {
    return (
      <div className="col-md blog-post">
        <img src={recent1} alt="" />
        <a href="#"><h2>Design Your Mind</h2></a>
        <div className="date">3 Nov, 2014</div>
      </div>
    );
  }
}

export default BlogTile;