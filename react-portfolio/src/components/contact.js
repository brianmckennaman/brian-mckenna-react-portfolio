function Contact() {
    var style={
        contactForms: { display: "flex" },
        inputForms: { justifyContent: "flexEnd"},
        nameEmailInput: { width: "50vw"},
        messageInput: { height: "20vw", width: "50vw" }
    }
 return (
    <div>
    <h1>Send me a message!</h1>
    <section style={style.contactForms}>
        <form style={style.inputForms}>
            <h2>Enter your name</h2>
            <input style={style.nameEmailInput} type={"text"} ></input>
            <h2>Enter your email</h2>
            <input style={style.nameEmailInput} type={"text"}></input>
            <h2>Leave a comment or message</h2>
            <input style={style.messageInput} type={"text"}></input>
        </form>
    </section>
    </div>
 )
}

export default Contact