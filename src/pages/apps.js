import React, {useState} from 'react'
import picture1 from "../assets/horiseon.png"
import picture2 from "../assets/passwordgenerator.png"
import picture3 from "../assets/scheduler.png"
import picture4 from "../assets/notetaker.png"
import picture5 from "../assets/project2.png"
import picture6 from "../assets/texteditor.png"

function Apps() {
    var styles = {
        appsSection: { display: "inline", justifyContent: "center", marginLeft: "10vw"},
        titleText: { fontSize: "5vw", fontFamily: "Arial", background: "lightBlue"},
        linkText: { display: "inline", color: "black", fontSize: "3vw", textDecoration: "overline underline" },
        image: { height: "40vw", width: "60vw", justifyContent: "center", borderRadius: "20px", border: "solid" },
        imageContainer: {  border: "black", width: "100vw" }
    }
    return(
        <section style={styles.appsSection}>
            <h2 style={styles.titleText}>Horiseon Mockup Homepage</h2>
            <div imageContainer>
                <img src={picture1} alt='horiseon homepage' style={styles.image }></img>
            </div>
            <div>
                <a href='https://github.com/brianmckennaman/Horiseon-homepage-assignment' style={styles.linkText}>Link to Github repo</a>
                <br></br>
                <a href='https://brianmckennaman.github.io/Horiseon-homepage-assignment/' style={styles.linkText}>Link to deployed website</a>
            </div>
            <h2 style={styles.titleText}>Password Generator App</h2>
            <img src={picture2} alt='password generator screenshot' style={styles.image }></img>
            <p>
                <a href='https://github.com/brianmckennaman/password-generator-app' style={styles.linkText}>Link to Github repo</a>
                <br></br>
                <a href='https://brianmckennaman.github.io/password-generator-app/' style={styles.linkText}>Link to deployed website</a>
            </p>
            <h2 style={styles.titleText}>Workday Scheduler App</h2>
            <img src={picture3} alt='work scheduler' style={styles.image}></img>
            <p>
                <a href='https://github.com/brianmckennaman/workday-scheduler-app' style={styles.linkText}>Link to Github Repo</a>
                <br></br>
                <a href='https://brianmckennaman.github.io/workday-scheduler-app/' style={styles.linkText}>Link to deployed website</a>
            </p>
            <h2 style={styles.titleText}>Note Taker App</h2>
            <img src={picture4} alt='note taker' style={styles.image}></img>
            <p>
                <a href='https://github.com/brianmckennaman/note-taker-assignment-expressjs' style={styles.linkText}>Link to Github Repo</a>
                <br></br>
                <a href='https://brian-mckenna-note-taker.herokuapp.com/' style={styles.linkText}>Link to deployed website</a>
            </p>
            <h2 style={styles.titleText}>Employee Management System</h2>
            <img src={picture5} alt='employee management system' style={styles.image}></img>
            <p>
                <a href='https://github.com/brianmckennaman/Challenge-Assignment-1' style={styles.linkText}>Link to Github Repo</a>
                <br></br>
                <a href='https://brianmckennaman.github.io/Challenge-Assignment-1/' style={styles.linkText}>Link to deployed website</a>
            </p>
            <h2 style={styles.titleText}>Text Editor App</h2>
            <img src={picture6} alt='note taker' style={styles.image}></img>
            <p>
                <a href='https://github.com/brianmckennaman/progressive-web-application-assignment' style={styles.linkText}>Link to Github Repo</a>
                <br></br>
                <a href='https://brians-jate-text-editor.herokuapp.com/' style={styles.linkText}>Link to deployed website</a>
            </p>
        </section>
    )
}

export default Apps