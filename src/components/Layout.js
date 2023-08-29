import { Outlet, Link } from "react-router-dom";
// import "./Layout.css";
import "../index.css";

const Layout = () => {
    return (
        <>
            <div className="nav">
                <div className="navItemList">
                <div className="container">
                    <div className="row">
                        <div className="navItem windows95" style={{'max-width': '50%'}}>
                            <Link to="/">Projects</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="navItem windows95" style={{'max-width': '50%'}}>
                            <Link to="/resume">Resume</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="main-container">
                <Outlet />
            </div>
        </>
    )
};

export default Layout;
