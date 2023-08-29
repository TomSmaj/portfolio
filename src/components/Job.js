import React, { Component } from "react";
import Draggable from 'react-draggable';
import "../index.css";

class Job extends Component {
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
                <div className={"job"}>
                    <div className="windows95">
                        <div className="row">
                            <div className="header-space" style={{ height: "1.5rem" }}>
                                <a className="company-name" href={this.props.website} target="_blank" rel="noopener noreferrer">{this.props.company}</a>
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="job-title">{this.props.title}</h3>
                        </div>
                        <div className="row">
                            <div className="job-dates">{this.props.dates}</div>
                        </div>
                        <div className="row">
                            <div className="job-description">
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

export default Job;