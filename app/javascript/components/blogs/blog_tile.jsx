import React from 'react'

class BlogTile extends React.Component {
  render() {
    return (
      <div className="col-md blog-post">
        <img src={this.props.blog.image} alt="" />
        <a href="#"><h2>{this.props.blog.title}</h2></a>
        <div className="date">{this.props.blog.createdAt}</div>
      </div>
    );
  }
}

export default BlogTile;