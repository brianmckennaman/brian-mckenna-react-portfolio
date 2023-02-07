import githubPicture from '../assets/github.png'
import linkedinPicture from '../assets/linkedin.png'
import twitterPicture from '../assets/twitter.webp'
import twitchPicture from '../assets/twitch.png'
function Footer() {

    var style = {
        footer: { backgroundColor: "lightBlue", color: "black", display: "flex", justifyContent: "center", height: "10%" },
        footerText: { font: "Sans-Serif", display: "inline", marginLeft: "2vw", marginRight: "2vw", color: "blue", fontSize: "3vw", textDecoration: "none" },
        linkContainer: { display: "flex", justifyContent: "center" },
        linkImage: { height: "5vw", width: "5vw"}
    }
    return (
        <footer style={style.footer}>
            <h1>Check out my other links!
            <div style={style.linkContainer}>
                <a href="https://github.com/brianmckennaman"><img style={style.linkImage} src={githubPicture}></img></a>
                <a href="https://www.linkedin.com/in/brian-mckenna-a17b1b139/"><img style={style.linkImage} src={linkedinPicture}></img></a>
                <a href='https://twitter.com/overlordhyperion'><img style={style.linkImage} src={twitterPicture}></img></a>
                <a href='https://www.twitch.tv/overlordhyperion'><img style={style.linkImage} src={twitchPicture}></img></a>
            </div>
            </h1>
        </footer>
    )
}

export default Footer