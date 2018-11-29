import React from "react";

// export const SubCompetencies = ({ subCompetencies }) => {
//   console.log(subCompetencies)
//   return subCompetencies.map( ({id, name}) => {
//     <div key={id}>{name}</div>
//   });
// }

export default class SubCompetencies extends React.Component {
  
  getSubCompetency() {
    console.log(this.props.subCompetencies);
    return this.props.subCompetencies.map( ({id, name}) => 
      <div key={id}>{name}</div>
    )
    };
  
  
  render() {
    return (
    <div>
    {this.getSubCompetency()}
    </div>
    )
  }
}
