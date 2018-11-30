import React, { Component } from "react";
import Bar from "./Bar";
import { UserInfo } from "./UserInfo";
import AddWork from "./AddWork";
import ViewWork from "./ViewWork";
import SubCompetencies from "./SubCompetencies";
import data from "../data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopLevel: "",
      selectedSubLevel: "",
      userInfo: {
        name: "Joe Bloggs",
        jobTitle: "Associate", //Data.careers.role
        email: "joe.bloggs@asos.com",
        level: "Associate",
        lineManager: "Jane Smith",
        career: "QA"
      },
      competencyEvidence: []
    };
  }

  getCareer() {
    return data.careers.find(({ role }) => role === this.state.userInfo.career);
  }

  getSelectedTopLevelCompetency(topLevelCompetencies) {
    return topLevelCompetencies.find(({ id }) => id === this.state.selectedTopLevel);
  }

  getSelectedSubLevelCompetency(topLevelCompetencies) {
    const topLevelCompetency = this.getSelectedTopLevelCompetency(topLevelCompetencies);
    return topLevelCompetency && topLevelCompetency.subCompetencies.find(({ id }) => id === this.state.selectedSubLevel);
  }

  selectTopLevelCompetency = event => {
    this.setState({ selectedTopLevel: event.currentTarget.id });
  };

  selectSubLevelCompetency = event => {
    this.setState({ selectedSubLevel: event.currentTarget.dataset.id });
  };

  getPage({ globalCompetencies, competenciesGrades, subCompetencies, selectedSubLevelCompetency, selectedTopLevelCompetency }) {
    const returnSubCompetencies = () => {
      return subCompetencies && (
        <SubCompetencies
          level={this.state.userInfo.level}
          globalCompetencies={globalCompetencies}
          competenciesGrades={competenciesGrades}
          subCompetencies={subCompetencies}
          selectSubLevelCompetency={this.selectSubLevelCompetency}
        />
      )
    };
    if (this.props.location.pathname === "/") {
      return returnSubCompetencies();
    }
    if (this.props.location.pathname === "/view") {
      return <ViewWork />;
    }
    if (this.props.location.pathname === "/add") {
      if (selectedSubLevelCompetency) {
        return <AddWork
          selectedTopLevelCompetency={selectedTopLevelCompetency}
          selectedSubLevelCompetency={selectedSubLevelCompetency}
          competenciesGrades={competenciesGrades}
          globalCompetencies={globalCompetencies}
          updateCompetencyEvidence={this.updateCompetencyEvidence}
        />;
      } else {
        return returnSubCompetencies();
      }
    }
  }

  updateCompetencyEvidence = (evidence) => {
    const updatedCompetencyEvidence = [
        ...this.state.competencyEvidence,
      ...evidence
    ];

    this.setState({ competencyEvidence: updatedCompetencyEvidence });
  };

  calculatePercentages(topLevelCompetencies, competenciesGrades) {
    const careerCompetencies = competenciesGrades
      .find(({ name }) => name === this.state.userInfo.jobTitle).competencies;
    const careerSubCompetencyIds = careerCompetencies.map(({scId}) => scId);
    // const careerCompetencyIds = careerCompetencies.map(({cid}) => cid);
    // console.log(careerCompetencyIds);
    return topLevelCompetencies.map(({ id: tcId, subCompetencies }) => {
      // const totalSubCompetencies = subCompetencies.filter(({ id }) =>
      //   careerSubCompetencyIds.includes(id));

      const subCompetencyStatus = subCompetencies.map(({ id }) => {
        const relaventEvidence = this.state.competencyEvidence.filter(({ scId: escId }) => escId === id);
        const relaventCareerCompetencyIds = careerCompetencies.filter(({ scId: cscId }) => cscId === id);

        return relaventEvidence.length === relaventCareerCompetencyIds.length;
      });
      const finished = subCompetencyStatus.filter(value => value);

      return {
        tcId,
        percentage: finished.length / subCompetencyStatus.length * 100
      }
    });
  }

  render() {
    const career = this.getCareer();
    const topLevelCompetencies = career.topLevelCompetencies;
    const selectedTopLevelCompetency = this.getSelectedTopLevelCompetency(
      topLevelCompetencies
    );
    const selectedSubLevelCompetency = this.getSelectedSubLevelCompetency(
      topLevelCompetencies
    );
    const subCompetencies = selectedTopLevelCompetency
      ? selectedTopLevelCompetency.subCompetencies
      : undefined;
    const competenciesGrades = career.grades;
    const globalCompetencies = data.competencies;
    const percentages = this.calculatePercentages(topLevelCompetencies, competenciesGrades);

    return (
      <div className="app">
        <UserInfo {...this.state.userInfo} />
        <div className="competencies">
          <Bar
            topLevelCompetencies={topLevelCompetencies}
            selectTopLevelCompetency={this.selectTopLevelCompetency}
            selectedTopLevelCompetency={selectedTopLevelCompetency}
            percentages={percentages}
          />
          {this.getPage({ globalCompetencies, competenciesGrades, subCompetencies, selectedSubLevelCompetency, selectedTopLevelCompetency })}
        </div>
      </div>
    );
  }
}
