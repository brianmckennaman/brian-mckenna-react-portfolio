import { NavLink } from "react-router-dom"
function Navbar(props) {

    var active = ({ isActive }) => isActive ? { backgroundColor: "red" } : { backgroundColor: "lightBlue" }

    var style = {
        navbarMain: { backgroundColor: "lightBlue", color: "black", height: "4vw", position: "sticky", marginBottom: "2vw" },
        listItem: { display: "inline", border: "solid", borderRadius: "6px", marginLeft: "5vw", marginRight: "5vw", fontSize: "3vw", textDecoration: "none", color: "black" },
        navButtons: { backgroundColor: "lightBlue", width: "22vw", height: "3vw", marginLeft: "1px", marginRight: "1px", border: "solid" }
    }

    
    return (

        <nav style={style.navbarMain}>
            <ul>
                <li style={style.listItem}>
                    <NavLink to='/brian-mckenna-react-portfolio' style={({ isActive }) => isActive ? { backgroundColor: "#00bac4" } : { backgroundColor: "lightBlue" } }>About Me
                    </NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink to='/apps' style={({ isActive }) => isActive ? { backgroundColor: "#00bac4" } : { backgroundColor: "lightBlue" } }>Apps
                    </NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink to='/contact' style={({ isActive }) => isActive ? { backgroundColor: "#00bac4" } : { backgroundColor: "lightBlue" } }>Contact
                    </NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink to='/resume' style={({ isActive }) => isActive ? { backgroundColor: "#00bac4" } : { backgroundColor: "lightBlue" } }>Resume
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar