function Header() {
    var style={
        headerMain: { backgroundColor: "lightBlue", display: "flex", justifyContent: "center"}
    }
    return (
        <header style={style.headerMain}>
            <h1>Brian McKenna's Portfolio</h1>
        </header>
    )
}

export default Header