import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Project from './project';

export default class Projects extends React.Component {

  constructor() {
    super();
    this.state = {filterItem: "all"};
  }

  updateFilter(e) {
    this.setState({filterItem: e.target.textContent.toLowerCase()});
  }

  render () {
    let filters = ["All", "Javascript",
                    "React", "jQuery", "HTML5"];

    let filterItems = (
      filters.map(filter => {
        let filterClass = this.state.filterItem === filter.toLowerCase() ? (
          "filter-item-underlined") : ("filter-item");

        return (<span key={filter} onClick={this.updateFilter.bind(this)}
                className={filterClass}>
                  {filter}
                </span>);
        })
      );

    let filterItemsWithSeparator = [];
    for (let i = 0; i < filterItems.length; i++) {
      if (i !== 0) { filterItemsWithSeparator.push(<span key={i}> / </span>); }
      filterItemsWithSeparator.push(filterItems[i]);
    }

    return (
      <ReactCSSTransitionGroup
        transitionName="react-transition"
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppearTimeout={500}>
        <div className="projects-page">
          <h1 className="section-title">Projects</h1>

          <div className="filter-container">
            {filterItemsWithSeparator}
          </div>

          <Project title="Star Wars Clicky Game" url="https://starwars-clicky-game.herokuapp.com/"
            filter={this.state.filterItem}
            technologies={["javascript", "html5"]}
            imageUrl="images/SWclickyGame.png"
            description="A memory game using React, the application will
              render different images to the screen on click events." />

          <Project title="Sports Scrapper" url="https://sports-scraper-app.herokuapp.com/"
          filter={this.state.filterItem}
          technologies={["javascript", "html5"]}
          imageUrl="images/sports-scrapper.png"
          description="<Description goes here>." />

        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
