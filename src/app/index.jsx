import React, { Component } from "react";
import Bar from "./components/Bar";
import { UserInfo } from "./components/UserInfo";
import data from "./data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  getCompetencies() {
    return data.careers.find(({role}) => this.state.userInfo.career);
  }

  render() {

    return (
      <div>
        <UserInfo {...this.state.userInfo} />

        <Bar competencies={this.getCompetencies()} />
      </div>
    );
  }
}
