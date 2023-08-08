import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Project.css";

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
                <Card style={{ width: '36rem' }}>
                    <Card.Img variant="top" src={this.props.pic} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                        {this.props.description.map(line => {
                            return (<li className="card-text">{line}</li>)
                        })}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Project;