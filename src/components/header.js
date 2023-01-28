function Header() {
    var style={
        headerMain: { backgroundColor: "lightBlue", display: "flex", justifyContent: "center", fontFamily: "Papyrus", fontWeight: "bold", fontSize: "3vw"}
    }
    return (
        <header style={style.headerMain}>
            <h1>Brian McKenna's Portfolio</h1>
        </header>
    )
}

export default Header