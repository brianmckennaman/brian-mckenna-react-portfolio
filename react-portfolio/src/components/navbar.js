import { NavLink } from "react-router-dom"
function Navbar(props) {

    var style = {
        navbarMain: {
            backgroundColor: "lightBlue", color: "black", height: "3vw"},
        listItem: { display: "inline" },
        navButtons: { textDecoration: "none", backgroundColor: "lightBlue", color: "black", width: "22vw", height: "3vw", marginLeft: "5px", marginRight: "5px", border: "none" }
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
                    <NavLink to='/apps'>
                        <button style={style.navButtons}>Apps</button></NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink to='/contact'>
                        <button style={style.navButtons}>Contact</button></NavLink>
                </li>
                <li style={style.listItem}>
                    <NavLink to='/resume'>
                        <button style={style.navButtons}>Resume</button></NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar