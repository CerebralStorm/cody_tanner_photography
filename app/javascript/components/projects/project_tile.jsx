import React from 'react'
import recent1 from '../../images/recent1.jpg'

class ProjectTile extends React.Component {
  render() {
    return (
      <div>
        <img src={recent1} alt="" />
        <a href="#">Cartoon de loop</a>
      </div>
    );
  }
}

export default ProjectTile;