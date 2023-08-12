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
        {projectData.map(project => {
          return (
            <span>
              <Project 
                name={project.name}
                pic={project.pic}
                link={project.link}
                github={project.github}
                description={project.description}
              />
              </span>
          )
        })}

      </div>
    );
  }
}

export default Projects;