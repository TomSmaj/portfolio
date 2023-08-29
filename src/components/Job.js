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
                            {/* <div className="header-space" style={{ height: "1.5rem" }}> */}
                            {/* <div className="header-space"> */}
                                <a className="company-name" href={this.props.website} target="_blank" rel="noopener noreferrer"><h4>{this.props.company}</h4></a>
                            {/* </div> */}
                        </div>
                        <div className="row">
                            <h4 className="job-title">{this.props.title}</h4>
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