import React, { Component } from "react";

const className = ".progress-ring__circle";

export class ProgressCircle extends Component {
  progressCircle;
  circumference;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const radius = this.progressCircle.r.baseVal.value;
    this.circumference = radius * 2 * Math.PI;
    const offset = this.circumference - this.props.progress / 100 * this.circumference;
    this.progressCircle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.progressCircle.style.strokeDashoffset = -offset;
    this.progressCircle.style.stroke = this.getProgressColor();
  }

  componentDidUpdate() {
    const radius = this.progressCircle.r.baseVal.value;
    this.circumference = radius * 2 * Math.PI;
    const offset = this.circumference - this.props.progress / 100 * this.circumference;
    this.progressCircle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.progressCircle.style.strokeDashoffset = -offset;
    this.progressCircle.style.stroke = this.getProgressColor();
  }

  getProgressColor() {
    if (this.props.progress >= 75) {
      return "#07c628";
    }
    if (this.props.progress >= 50) {
      return "#ff9300";
    }
    if (this.props.progress >= 0) {
      return "#ff006b";
    }
  }

  render() {
    return <div className="progress">
      <div className="progress-ring__background" />
      <svg
        height="80"
        width="80"
      >
        <circle
          ref={el => this.progressCircle = el}
          className={className}
          stroke="white"
          strokeWidth="4"
          fill="transparent"
          r="37"
          cx="40"
          cy="40"
        />
      </svg>
      <span className="progress-ring__number">{this.props.progress}%</span>
    </div>
  }
}