import { useState } from 'react'
import { validateEmail } from '../utils/helpers'

function Contact() {
    var styles={
        body: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
        nameEmailInput: { width: "50vw", height: "5vw", fontSize: "3vw"},
        messageInput: { height: "20vw", width: "50vw", fontSize: "3vw" },
        errMessage: { color: "red"},
        sendButton: { height: "5vw", width: "8vw", fontSize: "3vw"}
    }

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        console.log(target, target.value, inputType)
        console.log(validateEmail(target.value))
        console.log("email line 21", email)
        console.log(inputType === 'email', validateEmail(target.value))
        if (inputType === 'email' && validateEmail(target.value)) {
            setEmail(inputValue);
            console.log(email)
        }
    };

    const handleBlur = (e) => {
        if (!validateEmail(e.target.value)) {
            setErrorMessage('Please enter a valid email address');
        } else if (validateEmail(e.target.value)) {
            setErrorMessage('');
            return;
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(email, !validateEmail(email))
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address!');
            return;
        }
        window.location.reload();
    }

 return (
    <div style={styles.body}>
    <h1>Send me a message!
    <section>
        <form>
            <h2>Enter your name</h2>
            <textarea style={styles.nameEmailInput} type={"text"} placeholder="Enter your name" onChange={handleInputChange}></textarea>
            <h2>Enter your email</h2>
            <textarea style={styles.nameEmailInput} type={"text"} onChange={handleInputChange} placeholder="Enter your email" name='email'></textarea>
            <p style={styles.errMessage}>{errorMessage}</p>
            <h2>Leave a comment or message</h2>
            <textarea style={styles.messageInput} type={"text"} placeholder="Leave a message" onChange={handleInputChange}></textarea>
            <br></br>
            <button style={styles.sendButton} type='button' onClick={handleFormSubmit}>Send</button>
        </form>
    </section>
    </h1>
    <br></br>
    </div>
 )
}

export default Contact