import React from "react";

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateRating() {
    return this.props.competencies.topLevelCompetencies.map( ({id, name}) => (
      <button key={id}>{name}</button>
    ));
  }

  render() {
    return <div>{this.generateRating()}</div>;
  }
}
