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
        career: Data.careers
      },
      competencies: Data.careers
    };
  }

  render() {
    return (
      <div>
        <UserInfo {...this.state.userInfo} />

        <Bar careers={this.state.competencies} />
      </div>
    );
  }
}
