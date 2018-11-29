import React from "react";

export default class Competency extends React.Component {

  getGradesAndCompetencies() {
    console.log("grades:", this.props.grades);
    const grades = this.props.grades;

    return grades.map(({ name, competencies}) => {
      const cids = competencies.filter(({scId}) => this.props.scId === scId).map( ({cid}) => cid);
     const filteredCompetencies = this.props.globalCompetencies.filter( ({cid}) => cids.includes(cid) )

     console.log("cids", cids);
     console.log("filteredCompetencies", filteredCompetencies);

      return <div>
        <p>{name}</p>
        {filteredCompetencies.map( competency => 
        <p>{competency.description}</p>)}
      </div>
    });
  }

  render() {
    return <div className="subCompetencies">
    <h1>{this.props.title}</h1>
    {this.getGradesAndCompetencies()}</div>;
  }
}
