function Navbar(props) {

    var style = {
        navbarMain: { backgroundColor: "lightBlue", color: "black",},
        listItem: { display: "inline"},
        navButtons: {backgroundColor: "lightBlue", color: "black", width: "23vw", marginLeft: "5px", marginRight: "5px", border: "none"}
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