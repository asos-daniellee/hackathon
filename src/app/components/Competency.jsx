import React from "react";
import { Link } from "react-router-dom";
import { generateKeyPairSync } from "crypto";

export default class Competency extends React.Component {
  getGradesAndCompetencies() {
    console.log("grades:", this.props.grades);
    const grades = this.props.grades;

    return grades.map(({ name, competencies }) => {
      const cids = competencies
        .filter(({ scId }) => this.props.scId === scId)
        .map(({ cid }) => cid);
      const filteredCompetencies = this.props.globalCompetencies.filter(
        ({ cid }) => cids.includes(cid)
      );

      console.log("cids", cids);
      console.log("filteredCompetencies", filteredCompetencies);

      return (
        <div>
          <p>{name}</p>
          <ol>
            {filteredCompetencies.map(competency => (
              <li>{competency.description}</li>
            ))}
          </ol>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="subCompetencies-main">
        <h1 className="subCompetencies-title">{this.props.title}</h1>
        {this.getGradesAndCompetencies()}

        <Link to="/add">
          <button>Add Your Work</button>
        </Link>
        <Link to="/view">
          <button>View Skill Cards</button>
        </Link>
      </div>
    );
  }
}
