function Navbar(props) {

    var style = {
        navbarMain: { backgroundColor: "blue", color: "black",},
        listItem: { display: "inline"},
        navButtons: {backgroundColor: "blue", color: "red", width: "20vw", marginLeft: "10px", marginRight: "10px"}
    }
    return (

        <nav style={style.navbarMain}>
            <ul className="columns-4">
                <li style={style.listItem}>
                    {/* <button style={props.tank ? style.frank : style.betty}>{props.tank ? "About Me" : "about me"}</button> */}
                    <button style={style.navButtons}>About Me</button>
                </li>
                <li style={style.listItem}>
                    <button style={style.navButtons}>Apps</button>
                </li>
                <li style={style.listItem}>
                    <button style={style.navButtons}>Contact</button>
                </li>
                <li style={style.listItem}>
                    <button style={style.navButtons}>Resume</button>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar