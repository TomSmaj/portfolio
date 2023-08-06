import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <>
            <nav className="nav">
                <div className="navItem">
                    <Link to="/">Projects</Link>
                </div>
                <div className="navItem">
                    <Link to="/resume">Resume</Link>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
