import React, {useState} from 'react'

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
            <input style={style.nameEmailInput} type={"text"} ></input>
            <input style={style.nameEmailInput} type={"text"}></input>
            <input style={style.messageInput} type={"text"}></input>
        </form>
    </section>
    </div>
 )
}

export default Contact