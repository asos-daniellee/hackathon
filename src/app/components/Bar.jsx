import React from "react";
import {ProgressCircle} from "./ProgressCircle";

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getClassName(id) {
    return this.props.selectedTopLevelCompetency && this.props.selectedTopLevelCompetency.id === id ? "selected-competency" : "";
  }

  generateRating() {
    return this.props.topLevelCompetencies.map(({id, name}) => {
      return <button key={id} id={id} onClick={this.props.selectTopLevelCompetency} className={this.getClassName(id)}>
        <p>{name}</p>
        <ProgressCircle progress={66} />
      </button>
    });
  }

  render() {
    return <div className="bar">{this.generateRating()}</div>;
  }
}
