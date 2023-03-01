// Dependencies for old design using text inputs

// import { useState } from 'react'
// import { validateEmail } from '../utils/helpers'

function Contact() {
    var styles={
        body: { display: "flex", flexWrap: "wrap", justifyContent: "center", background: "lightBlue", marginBottom: "1vw", marginLeft: "5vw", marginRight: "5vw", borderRadius: "10px" },
        header: { fontSize: "4vw"},
        contacts: { fontSize: "2vw"}

        // Styling for old design with text inputs

        // nameEmailInput: { width: "50vw", height: "5vw", fontSize: "3vw"},
        // messageInput: { height: "20vw", width: "50vw", fontSize: "3vw" },
        // errMessage: { color: "red"},
        // sendButton: { height: "5vw", width: "8vw", fontSize: "3vw"}
    }

 return (
    <div style={styles.body}>
        <section>
            <h1 style={styles.header}>Get in touch with me!</h1>
            <h2 style={styles.contacts}>Email: <a href='mailto: brianmckennaman@gmail.com'>brianmckennaman@gmail.com</a></h2>
            <h2 style={styles.contacts}>Phone: 203-985-5640</h2>
        </section>
    
    </div>
 )
}

export default Contact

// Old code for sending a message text entry fields

// const [email, setEmail] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    // const handleInputChange = (e) => {
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;
    //     console.log(target, target.value, inputType)
    //     console.log(validateEmail(target.value))
    //     console.log("email line 21", email)
    //     console.log(inputType === 'email', validateEmail(target.value))
    //     if (inputType === 'email' && validateEmail(target.value)) {
    //         setEmail(inputValue);
    //         console.log(email)
    //     }
    // };

    // const handleBlur = (e) => {
    //     if (!validateEmail(e.target.value)) {
    //         setErrorMessage('Please enter a valid email address');
    //     } else if (validateEmail(e.target.value)) {
    //         setErrorMessage('');
    //         return;
    //     }
    // }

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email, !validateEmail(email))
    //     if (!validateEmail(email)) {
    //         setErrorMessage('Please enter a valid email address!');
    //         return;
    //     }
    //     window.location.reload();
    // }