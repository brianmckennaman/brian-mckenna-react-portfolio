import { NavLink } from "react-router-dom"
function Navbar() {

    var active = ({ isActive }) => isActive ? { backgroundColor: "red" } : { backgroundColor: "lightBlue" }
    // ({ isActive }) => isActive ? { backgroundColor: "#00bac4" } : { backgroundColor: "lightBlue" }

    var style = {
        navbarMain: { backgroundColor: "lightBlue", color: "black", height: "5%", position: "sticky", marginBottom: "2vw" },
        listItem: { display: "inline", marginLeft: "5vw", marginRight: "5vw", fontSize: "3vw", textDecoration: "none", color: "black" },
        navButtons: { backgroundColor: "lightBlue", width: "22vw", height: "3vw", marginLeft: "1px", marginRight: "1px", border: "solid", textDecoration: "none", color: "blue", borderRadius: "6px", borderWidth: "2px" }
    }

    
    return (

        <nav style={style.navbarMain}>
            <ul>
                <li style={style.listItem}>
                    <NavLink to='/brian-mckenna-react-portfolio' style={style.navButtons}>About Me
                    </NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink to='/apps' style={style.navButtons}>Apps
                    </NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink to='/contact' style={style.navButtons}>Contact
                    </NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink to='/resume' style={style.navButtons}>Resume
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar