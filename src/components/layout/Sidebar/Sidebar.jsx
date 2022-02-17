import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Link className="navbar-link" to={"/"}>Todos</Link>
            <Link className="navbar-link"  to={"/user"}>User</Link>
        </div>
    )
}

export default Sidebar;