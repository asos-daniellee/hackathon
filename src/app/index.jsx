import React, { Component } from "react";
import { UserInfo } from "./components/UserInfo";
import data from "./data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Joe Bloggs",
        jobTitle: "Engineer",
        email: "joe.bloggs@asos.com",
        level: "Implement",
        lineManager: "Jane Smith"
      }
    }
  }

  render() {
    return <div ><UserInfo {...this.state.userInfo }/></div>;
  }
}
