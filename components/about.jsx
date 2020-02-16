import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends React.Component {
  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName="react-transition"
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppearTimeout={500}>

        <div className='about-page'>
          <div className='about-content'>
            <h1 className='section-title'>About Me</h1>
            <br/>
  					I'm an engineer with a relentless curiousity and passion for building things.
            <br/><br/>
  					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            <br/><br/>
            By combining my analytical and problem-solving
            skills from engineering with my programming and web development knowledge,
  					I believe I will be able to make a significant contribution to any team or company.
          </div>

          <img className='portrait' src='images/about_picture.jpg'></img>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
