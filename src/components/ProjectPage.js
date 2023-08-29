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
        <div className="container" style={{'min-width': '85vw', 'min-height':'100vh'}}>
          <div className="row" style={{width: '100%', 'min-height': '100vh'}}>
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
                    topmargin={project.topmargin}          
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