import React, { Component } from "react";
import Draggable from 'react-draggable';
// import "./Project.css";
import "../index.css";

class Project extends Component {
    constructor() {
        super();
        this.state = {
            pos: { x: 0, y: 0 },
            dragging: false,
            rel: null // position relative to the cursor
        }

    };

    componentDidMount = () => {

    };


    render() {
        return (
            <Draggable>
                <div className={"project " + this.props.shortname}>
                    <div className="windows95">
                        <div className="row">
                            <div className="header-space" style={{height: "1.5rem"}}>

                            </div>
                        </div>                
                        <div className="row">
                            <img className="project-pic" src={this.props.pic} />
                        </div>
                        <div className="row">
                            <a className="project-name col" href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.name}</a>
                            <a className="project-github col" href={this.props.github} target="_blank" rel="noopener noreferrer">Github repo</a>
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
            </Draggable>
        );
    }
}

export default Project;