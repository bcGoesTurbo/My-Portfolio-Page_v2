import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar">
        <li className="logo"><Link to="#">
          <i className="fa fa-code" aria-hidden="true"></i> M <span style={{fontStyle: "italic", color: "#676666"}}></span>
        </Link></li>
        <ul className="nav-items">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><div id="resume" href="resume.pdf">Resume</div></li>
        </ul>
      </div>
    );
  }
}
