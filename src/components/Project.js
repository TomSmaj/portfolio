import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Project.css";
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
                <Card className="border-0 windows95" style={{background: "#bdbdbd"}}>
                    <Card.Img variant="top" src={this.props.pic}/>
                    <Card.Body>
                        <a href={this.props.link}><Card.Title>{this.props.name}</Card.Title></a>
                        <Card.Text>
                            {this.props.description.map(line => {
                                return (<p className="card-text">{line}</p>)
                            })}
                        </Card.Text>
                        {/* <a href={this.props.github}><Button variant="primary">Github repo</Button></a> */}
                        <a href={this.props.github}>Github repo</a>
                    </Card.Body>
                </Card>
        );
    }
}

export default Project;