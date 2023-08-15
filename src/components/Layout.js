import { Outlet, Link } from "react-router-dom";
// import "./Layout.css";
import "../index.css";

const Layout = () => {
    return (
        <>
            <nav className="nav">
                <div className="navItem windows95">
                    <Link to="/">Projects</Link>
                </div>
                <div className="navItem windows95">
                    <Link to="/resume">Resume</Link>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
