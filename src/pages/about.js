import picture from "../assets/mypicture.jpg"
function AboutMe(props) {
    var styles= {
        container: { display: "flex", width: "80vw", marginBottom: "1vw", background: "lightBlue", color: "black", justifyContent: "center", borderRadius: "10px"},
        image: { height: "30vw", width: "50vw", borderRadius: "20px", border: "solid"}
    }
return (
    
    <div>
        <img src={picture} alt='portfolio image' style={styles.image }></img>
        <div style={styles.container}>
        <h1>Hello! My name is Brian McKenna, a junior full-stack developer. Thanks for checking out my portfolio! Here, you can see some of the apps I have developed, get in touch with my via my contact links, and checkout my other social links.</h1>
        </div>
    </div>
)
}

export default AboutMe