import picture from "../assets/mypicture.jpg"
function AboutMe(props) {
    var styles= {
        body: { display: "flex", flexWrap: "wrap", justifyContent: "center"},
        container: { display: "flex", width: "80vw", marginBottom: "1vw", marginTop: "1vw", background: "lightBlue", color: "black", justifyContent: "center", borderRadius: "10px"},
        image: { height: "30vw", width: "50vw", borderRadius: "20px", border: "solid"},
        textBody: { padding: "2vw" }
    }
return (
    
    <div style={styles.body}>
        <img src={picture} alt='portfolio image' style={styles.image }></img>
        <div style={styles.container}>
        <h2 style={styles.textBody}>Hello! My name is Brian McKenna, a junior full-stack developer. Thanks for checking out my portfolio! Here, you can see some of the apps I have developed. I am familiar with languages and technologies consistant with the MERN stack (Mongo, Express, React, Node) as well as other web design languages such as HTML, CSS, and JavaScript. I have created projects in an Agile scrum-style enviornment, and have deployed apps via Github Pages and Heroku. </h2>
        </div>
    </div>
)
}

export default AboutMe