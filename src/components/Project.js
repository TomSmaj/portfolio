import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
            <div className="project">
                <div className="windows95">
                    <div className="row">
                        <a className="project-name col" href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.name}</a>
                        <a className="project-github col" href={this.props.github} target="_blank" rel="noopener noreferrer">Github repo</a>
                    </div>
                    <div className="row">
                        <img className="project-pic" src={this.props.pic} />
                    </div>
                    <div className="row">
                        <div className="project-text">
                            {this.props.description.map(line => {
                                return (<p>{line}</p>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;