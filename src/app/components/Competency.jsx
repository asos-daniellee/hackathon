import React from "react";
import { Link } from "react-router-dom";
import { generateKeyPairSync } from "crypto";

export default class Competency extends React.Component {
  getGradesAndCompetencies() {
    const grades = this.props.grades;
    console.log("level", this.props.level);

    return grades.map(({ name, competencies }) => {
      const cids = competencies
        .filter(({ scId }) => this.props.scId === scId)
        .map(({ cid }) => cid);
      const filteredCompetencies = this.props.globalCompetencies.filter(
        ({ cid }) => cids.includes(cid)
      );

      return (
        <div key={`grade-${name}`} className="subCompetencies-text">
          <p>{name}</p>
          {this.props.level != name ?
          <ol className="greyout">
            {filteredCompetencies.map(competency => (
              <li>{competency.description}</li>
            ))}
          </ol> :
          <ol>
          {filteredCompetencies.map(competency => (
            <li key={`text-${competency.cid}`}>{competency.description}</li>
          ))}
        </ol>
          }
        </div>
      );
    });
  }

  render() {
    return (
      <div className="subCompetencies-main">
        <h1 className="subCompetencies-title">{this.props.title}</h1>
        <h3 className="subCompetencies-skills">SKILLS</h3>
        {this.getGradesAndCompetencies()}


        <div>
        <Link to="/add">
          <button data-id={this.props.scId} onClick={this.props.selectSubLevelCompetency} className="button-add">Add Your Work</button>
        </Link>
        <Link to="/view">
          <button className="button-view">View Skill Cards</button>
        </Link>
        </div>
      </div>
    );
  }
}
