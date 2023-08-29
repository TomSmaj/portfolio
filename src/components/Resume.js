import React, { Component } from "react";
import Job from "./Job";
import "../index.css";
const employmentData = require("../data/resumeData").employmentData;
const skillsData = require("../data/resumeData").skillsData;

class Resume extends Component {
  constructor() {
    super();
    this.state = {
      "q2": employmentData[0],
      "telus": employmentData[1],
      "toyota": employmentData[2]
    }
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <div className="row" style={{ width: '100%', 'min-height': '100vh' }}>
        <div className="row">
          <div className="col">
            <Job
              title={this.state.q2.title}
              company={this.state.q2.company}
              website={this.state.q2.website}
              dates={this.state.q2.dates}
              description={this.state.q2.description}
            />
          </div>
          <div className="col">
            <Job
              title={this.state.telus.title}
              company={this.state.telus.company}
              website={this.state.telus.website}
              dates={this.state.telus.dates}
              description={this.state.telus.description}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;