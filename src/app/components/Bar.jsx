import React from "react";

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateRating() {
    const topLevelCompetencies = this.props.competencies.map(
      obj => obj
    );

    return topLevelCompetencies.map((competency, index) => (
      <button key={`score-${index}`}>{competency.name}</button>
    ));
  }

  render() {
    return <div>{this.generateRating()}</div>;
  }
}
