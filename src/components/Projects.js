import React, { Component } from "react";
import Project from "./Project";
import "./Projects.css";
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
      <div className="main-section">
        {projectData.map(project => {
            return(
            <div className = "row">                
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
    );
  }
}

export default Projects;