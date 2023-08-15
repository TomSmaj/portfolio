import React, { Component } from "react";
import Project from "./Project";
import "./Projects.css";
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
    console.log(projectData);
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