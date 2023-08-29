import React, { Component } from "react";
import Draggable from 'react-draggable';
// import "./Project.css";
import "../index.css";

class Project extends Component {
    constructor() {
        super();
        this.state = {
 
        }

    };

    componentDidMount = () => {

    };


    render() {
        return (
            <Draggable>
                <div className={"project " + this.props.shortname} style={this.props.topmargin !== '0%' ? {'margin-top':this.props.topmargin} : {}}>
                    <div className="windows95">
                        <div className="row">
                            <div className="header-space" style={{height: "1.5rem"}}>
                            <a className="project-name" href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.name}</a>
                            </div>
                        </div>                
                        <div className="row">
                            <img className="project-pic" src={this.props.pic} />
                        </div>
                        <div className="row">                            
                            <a className="project-github" href={this.props.github} target="_blank" rel="noopener noreferrer">Github repo</a>
                        </div>
                        <div className="row">
                            <div className="project-text">
                                <ul>
                                {this.props.description.map(line => {
                                    return (<li>{line}</li>)
                                })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default Project;