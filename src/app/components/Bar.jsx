import React from "react";
import {ProgressCircle} from "./ProgressCircle";
import { Link } from "react-router-dom";

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
      return <Link to="/"><button key={id} id={id} onClick={this.props.selectTopLevelCompetency} className={this.getClassName(id)}>
        <p>{name}</p>
        <ProgressCircle progress={66} />
      </button></Link>
    });
  }

  render() {
    return <div className="bar">{this.generateRating()}</div>;
  }
}
