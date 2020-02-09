import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <ReactCSSTransitionGroup
          transitionName="react-transition"
          transitionAppear={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppearTimeout={500}>
        <p className="title">Brad Cook</p>
        <p className="description">Software Developer (Junior)</p>

        <div className="home-icons">
          <a href="http://github.com/bcGoesTurbo">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a href="http://linkedin.com/in/momajd">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a href="http://facebook.com/momajd">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a href="mailto:mo.a.majd@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}