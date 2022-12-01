import { useState } from 'react'
import { validateEmail } from '../utils/helpers'

function Contact() {
    var style={
        contactForms: { display: "flex" },
        inputForms: { justifyContent: "flexEnd"},
        nameEmailInput: { width: "50vw"},
        messageInput: { height: "20vw", width: "50vw" }
    }

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        console.log(target, target.value)
        console.log(validateEmail(target.value))
        if (inputType === 'email' && validateEmail(target.value)) {
            setEmail(inputValue);
        }
    };

    const handleBlur = (e) => {
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
        } else if (validateEmail(email)) {
            setErrorMessage('');
            return;
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }
        setEmail('');
    }

 return (
    <div>
    <h1>Send me a message!</h1>
    <section style={style.contactForms}>
        <form style={style.inputForms}>
            <h2>Enter your name</h2>
            <input style={style.nameEmailInput} type={"text"} placeholder="Enter your name" onChange={handleInputChange}></input>
            <h2>Enter your email</h2>
            <input style={style.nameEmailInput} type={"email"} onChange={handleInputChange} placeholder="Enter your email"></input>
            <p>{errorMessage}</p>
            <h2>Leave a comment or message</h2>
            <input style={style.messageInput} type={"text"} placeholder="Leave a message" onChange={handleInputChange}></input>
            <button type='button' onClick={handleFormSubmit}>Send</button>
        </form>
    </section>
    <br></br>
    </div>
 )
}

export default Contact