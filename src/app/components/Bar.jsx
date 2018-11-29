import React from "react";

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  generateRating() {
    const scores = ["score", "score"];
    return scores.map((e, index) => <button key={`score-${index}`}></button>);
  }

  render() {
    return <div>{this.generateRating()}</div>;
  }
}
