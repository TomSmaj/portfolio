import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar">
                <Link className="navbar-projects" to="/projects">
                    <p>Projects</p>
                </Link>
                <Link className="navbar-resume" to="/resume">
                    <p>Resume</p>
                </Link>
            </nav>
        );
    }
}

export default Navbar;