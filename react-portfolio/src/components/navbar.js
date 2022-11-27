function Navbar(props) {

    var style = {
        navbarMain: { backgroundColor: "blue", color: "black" },
        betty: {backgroundColor: "blue", color: "red", width: "50vw"},
        horizontal: { display: "inline"}
    }
    return (

        <nav style={style.navbarMain}>
            <ul className="columns-4">
                <li style={style.horizontal}>
                    <button style={props.tank ? style.frank : style.betty}>{props.tank ? "About Me" : "about me"}</button>
                </li>
                <li style={style.horizontal}>
                    <button>Apps</button>
                </li>
                <li style={style.horizontal}>
                    <button>Contact</button>
                </li>
                <li style={style.horizontal}>
                    <button>Resume</button>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar