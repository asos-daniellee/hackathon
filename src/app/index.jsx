import React, { Component } from "react";
import Bar from "./components/Bar";
import { UserInfo } from "./components/UserInfo";
import { SubCompetencies } from "./components/SubCompetencies";
import data from "./data";

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
      },
    };
  }

  getCareer() {
    return data.careers.find(({ role }) => role === this.state.userInfo.career);
  }

  getSelectedTopLevelCompetency(topLevelCompetencies) {
    return topLevelCompetencies.find(({ id }) => id === this.state.selected);
  };

  selectTopLevelCompetency = event => {
    this.setState({ selected: event.target.id });
  };

  render() {
    const career = this.getCareer();
    const topLevelCompetencies = career.topLevelCompetencies;
    const selectedTopLevelCompetency = this.getSelectedTopLevelCompetency(topLevelCompetencies);
    const subCompetencies = selectedTopLevelCompetency ? selectedTopLevelCompetency.subCompentencies : undefined;

    return <div className="app">
      <UserInfo {...this.state.userInfo }/>
      <div className="competencies">
        <Bar topLevelCompetencies={topLevelCompetencies} selectTopLevelCompetency={this.selectTopLevelCompetency} />
        {subCompetencies && <SubCompetencies subCompetencies={subCompetencies} />}
      </div>
    </div>;
  }
}
