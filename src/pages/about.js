import picture from "../assets/mypicture.jpg"
function AboutMe(props) {
    var styles= {
        body: { display: "flex", flexWrap: "wrap", justifyContent: "center"},
        container: { display: "flex", width: "80vw", marginBottom: "1vw", background: "lightBlue", color: "black", justifyContent: "center", borderRadius: "10px"},
        image: { height: "30vw", width: "50vw", borderRadius: "20px", border: "solid"}
    }
return (
    
    <div style={styles.body}>
        <img src={picture} alt='portfolio image' style={styles.image }></img>
        <div style={styles.container}>
        <h1>Hello! My name is Brian McKenna, a junior full-stack developer. Thanks for checking out my portfolio! Here, you can see some of the apps I have developed. I decided to become a developer because I have always had an interest in computers and coding, and wanted to explore the possiblities of what coding can do, especially in a time when technology is so integral to our lives.</h1>
        </div>
    </div>
)
}

export default AboutMe