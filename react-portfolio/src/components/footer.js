function Footer() {

    var style = {
        footer: { backgroundColor: "lightBlue", color: "black", display: "flex", justifyContent: "center"},
        footerText: { font: "Sans-Serif", display: "inline" },
    }
    return (
        <footer style={style.footer}>
            <div>
                <p style={style.footerText}>
                    <a href="https://github.com/brianmckennaman">Github</a>
                </p>
                <p style={style.footerText}>
                    <a href="https://www.linkedin.com/in/brian-mckenna-a17b1b139/">Linkedin</a>
                </p>
                <p style={style.footerText}>
                    <a href="https://twitter.com/OverlordHype">Twitter</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer