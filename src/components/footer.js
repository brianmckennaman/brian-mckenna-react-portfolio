function Footer() {

    var style = {
        footer: { backgroundColor: "lightBlue", color: "black", display: "flex", justifyContent: "center", height: "8vw"},
        footerText: { font: "Sans-Serif", display: "inline", marginLeft: "2vw", marginRight: "2vw", color: "blue", fontSize: "3vw", textDecoration: "none" },
    }
    return (
        <footer style={style.footer}>
            <h2>Check out my other links!
            <div>
                <p style={style.footerText}>
                    <a style={style.footerText} href="https://github.com/brianmckennaman">Github</a>
                </p>
                <p style={style.footerText}>
                    <a style={style.footerText} href="https://www.linkedin.com/in/brian-mckenna-a17b1b139/">Linkedin</a>
                </p>
                <p style={style.footerText}>
                    <a style={style.footerText} href="https://twitter.com/OverlordHype">Twitter</a>
                </p>
            </div>
            </h2>
        </footer>
    )
}

export default Footer