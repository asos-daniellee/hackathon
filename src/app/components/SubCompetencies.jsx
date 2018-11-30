import React from "react";
import Competency from "./Competency";

export default class SubCompetencies extends React.Component {
  getSubCompetency() {
    const grades= this.props.competenciesGrades;
    const globalCompetencies = this.props.globalCompetencies;
  
    return this.props.subCompetencies.map(({ id, name }) => (
      <Competency
        scId={id}
        globalCompetencies={globalCompetencies}
        grades={grades}
        title={name}
        key={id}
        level={this.props.level}
        selectSubLevelCompetency={this.props.selectSubLevelCompetency}
      />
    ));
  }

  render() {
    return <div>{this.getSubCompetency()}</div>;
  }
}
