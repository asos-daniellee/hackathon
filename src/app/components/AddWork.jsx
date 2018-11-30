import React from 'react';
import { Link } from "react-router-dom";

export default class AddWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGrade: "Associate",
            checkedValues: {}
        }
    }

    getGradeCompetencies() {
        return this.props.competenciesGrades.map(({ name, competencies }) => {
            const gradeCompetencies = competencies
              .filter(({ tcId, scId }) => tcId === this.props.selectedTopLevelCompetency.id && scId === this.props.selectedSubLevelCompetency.id)
              .map(({ cid }) => this.props.globalCompetencies.find(({ cid: gcid }) => cid === gcid));

            return {
                name,
                competencies: gradeCompetencies
            }
        });
    }

    selectGrade = event => {
      this.setState({ selectedGrade: event.currentTarget.dataset.grade });
    };

    getGradeButtons(gradeCompetencies) {
      return gradeCompetencies.map(({ name }) => <button key={`select-${name}`} data-grade={name} onClick={this.selectGrade} className={this.state.selectedGrade === name ? "grade-button selected" : "grade-button"}>{name}</button>)
    }

    handleCheckboxChange = event => {
      const target = event.target;
      const checkedValues = {
        ...this.state.checkedValues,
        [target.name]: target.checked
      };

      this.setState({ checkedValues });
    };

    getCompetencies(gradeCompetencies) {
        return <ol className="add-work-options">
          {gradeCompetencies
          .filter(({ name }) => name === this.state.selectedGrade)
          .map(({ competencies }) =>
            competencies.map(({ description, cid}) =>
                <li key={`select-${cid}`}>
                    <input className="add-checkbox" type="checkbox" name={cid} checked={this.state.checkedValues[cid]}
                           onChange={this.handleCheckboxChange}/>
                  <span>{description}</span>
                </li>
            ))}
        </ol>;
    }

    updateCompetencies = () => {
        const updatedCompetencies = Object.keys(this.state.checkedValues)
          .map(cid => ({
            cid,
            tcId: this.props.selectedTopLevelCompetency.id,
            scId: this.props.selectedSubLevelCompetency.id
          }));
      this.props.updateCompetencyEvidence(updatedCompetencies);
    };


    
    render() {
        const gradeCompetencies = this.getGradeCompetencies();

        return (
          <div className="subCompetencies-main">
              <h1 className="subCompetencies-title">{this.props.selectedSubLevelCompetency.name}</h1>
            <div className="add-work">
              <h2>WHICH SKILLS DO YOU WANT TO PROVE?</h2>
              { this.getGradeButtons(gradeCompetencies) }
              { this.getCompetencies(gradeCompetencies) }
              <Link className="center" to="/"><button type="submit" className="button-add" onClick={this.updateCompetencies}>Submit</button></Link>
            </div>
          </div>
        )
    }
}