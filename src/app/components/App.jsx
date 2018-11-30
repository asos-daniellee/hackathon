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
      selected: "",
      userInfo: {
        name: "Joe Bloggs",
        jobTitle: "Engineer", //Data.careers.role
        email: "joe.bloggs@asos.com",
        level: "Implement",
        lineManager: "Jane Smith",
        career: "QA"
      }
    };
  }

  getCareer() {
    return data.careers.find(({ role }) => role === this.state.userInfo.career);
  }

  getSelectedTopLevelCompetency(topLevelCompetencies) {
    return topLevelCompetencies.find(({ id }) => id === this.state.selected);
  }

  selectTopLevelCompetency = event => {
    this.setState({ selected: event.currentTarget.id });
  };

  getPage({ globalCompetencies, competenciesGrades, subCompetencies }) {
    if (this.props.location.pathname === "/") {
      return subCompetencies && (
        <SubCompetencies
          globalCompetencies={globalCompetencies}
          competenciesGrades={competenciesGrades}
          subCompetencies={subCompetencies}
        />
      )
    }
    if (this.props.location.pathname === "/view") {
      return <ViewWork />;
    }
    if (this.props.location.pathname === "/add") {
      return <AddWork />;
    }
  }

  render() {
    const career = this.getCareer();
    const topLevelCompetencies = career.topLevelCompetencies;
    const selectedTopLevelCompetency = this.getSelectedTopLevelCompetency(
      topLevelCompetencies
    );
    const subCompetencies = selectedTopLevelCompetency
      ? selectedTopLevelCompetency.subCompentencies
      : undefined;
    const competenciesGrades = career.grades;
    const globalCompetencies = data.competencies;

    return (
      <div className="app">
        <UserInfo {...this.state.userInfo} />
        <div className="competencies">
          <Bar
            topLevelCompetencies={topLevelCompetencies}
            selectTopLevelCompetency={this.selectTopLevelCompetency}
            selectedTopLevelCompetency={selectedTopLevelCompetency}
          />
          {this.getPage({ globalCompetencies, competenciesGrades, subCompetencies })}
        </div>
      </div>
    );
  }
}
