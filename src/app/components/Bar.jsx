import React from "react";

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateRating() {
    return this.props.topLevelCompetencies.map(({id, name}) => (
      <button key={id} id={id} onClick={this.props.selectTopLevelCompetency}>{name}</button>
    ));
  }

  render() {
    return <div>{this.generateRating()}</div>;
  }
}
