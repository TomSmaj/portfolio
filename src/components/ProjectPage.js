import React, { Component } from "react";
import Project from "./Project";
import "../index.css";
const projectData = require("../data/projectData").projectData;

class Projects extends Component {
  constructor() {
    super();
    this.state = {

    }
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {projectData.map(project => {
            return (
              <div className="col">
                <Project
                  name={project.name}
                  pic={project.pic}
                  link={project.link}
                  github={project.github}
                  description={project.description}
                  languages={project.languages}
                  shortname={project.shortname}
                />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Projects;