import { NavLink } from "react-router-dom"
function Navbar(props) {

    var style = {
        navbarMain: {
        backgroundColor: "lightBlue", color: "black", height: "3vw"},
        listItem: { display: "inline" },
        navButtons: { textDecoration: "none", backgroundColor: "lightBlue", color: "black", width: "22vw", height: "3vw", marginLeft: "1px", marginRight: "1px", border: "none" }
    }
    return (

        <nav style={style.navbarMain}>
            <ul className="columns-4">
                <li style={style.listItem}>
                    <NavLink to='/' style={({ isActive }) => isActive ? { backgroundColor: "red" } : { backgroundColor: "lightBlue" } }>
                        <button style={style.navButtons}>About Me</button></NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink to='/apps' style={({ isActive }) => isActive ? { backgroundColor: "red" } : { backgroundColor: "lightBlue" } }>
                        <button style={style.navButtons}>Apps</button></NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink to='/contact' style={({ isActive }) => isActive ? { backgroundColor: "red" } : { backgroundColor: "lightBlue" } }>
                        <button style={style.navButtons}>Contact</button></NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink to='/resume' style={({ isActive }) => isActive ? { backgroundColor: "red" } : { backgroundColor: "lightBlue" } }>
                        <button style={style.navButtons}>Resume</button></NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar