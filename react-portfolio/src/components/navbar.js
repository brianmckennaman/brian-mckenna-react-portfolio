import { NavLink } from "react-router-dom"
function Navbar(props) {

    var style = {
        navbarMain: {
            backgroundColor: "lightBlue",
            color: "black",
        },
        listItem: { display: "inline" },
        navButtons: { textDecoration: "none", backgroundColor: "lightBlue", color: "black", width: "22vw", marginLeft: "5px", marginRight: "5px", border: "none" }
    }
    return (

        <nav style={style.navbarMain}>
            <ul className="columns-4">
                <li style={style.listItem}>
                    {/* <button style={props.tank ? style.frank : style.betty}>{props.tank ? "About Me" : "about me"}</button> */}
                    <NavLink to='/' style={({ isActive }) => isActive ? { backgroundColor: "red" } : { backgroundColor: "blue" } }>
                        <button style={style.navButtons}>About Me</button></NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink style={style.navButtons} to='/apps'>Apps</NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink style={style.navButtons} to='/contact'>Contact</NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink style={style.navButtons} to='/resume'>Resume</NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar