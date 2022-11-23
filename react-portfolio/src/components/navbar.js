function Navbar(props) {

    var styles = {
        frank: { backgroundColor: "red", color: "blue", width: "50vw" },
        betty: {backgroundColor: "blue", color: "red", width: "50vw"}
    }
    return (

        <nav className="py-2">
            <ul className="columns-4">
                <li>
                    <button style={props.tank ? styles.frank : styles.betty}>{props.tank ? "About Me" : "about me"}</button>
                </li>
                <li>
                    <button>Apps</button>
                </li>
                <li>
                    <button>Contact</button>
                </li>
                <li>
                    <button>Resume</button>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar