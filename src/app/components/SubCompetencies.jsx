import React from "react";
import Competency from "./Competency";

export default class SubCompetencies extends React.Component {
  getSubCompetency() {
    const grades= this.props.competenciesGrades;
    const globalCompetencies = this.props.globalCompetencies;
    console.log(this.props.subCompetencies);
    console.log("competenciesGrades:", this.props.competenciesGrades);
  
    return this.props.subCompetencies.map(({ id, name }) => (
      <Competency scId={id} globalCompetencies={globalCompetencies} grades={grades} title={name} key={id}></Competency>
      //<div className="subCompetencies" key={id}>{name}</div>
    ));
  }

  render() {
    return <div>{this.getSubCompetency()}</div>;
  }
}
