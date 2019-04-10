import React from 'react'
import recent1 from '../../images/recent1.jpg'

class ProjectTile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.project.image} alt="" />
        <a href="#">{this.props.project.name}</a>
      </div>
    );
  }
}

export default ProjectTile;