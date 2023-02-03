import React from 'react'
import picture1 from "../assets/toughdecisions.png"
import picture2 from "../assets/passwordgenerator.png"
import picture3 from "../assets/scheduler.png"
import picture4 from "../assets/notetaker.png"
import picture5 from "../assets/project2.png"
import picture6 from "../assets/texteditor.png"

function Apps() {
    var styles = {
        appsSection: { display: "flex", justifyContent: "spaceAround", justifyItems: "space-between", flexWrap: "wrap", marginLeft: "2vw", marginRight: "2vw" },
        titleText: { fontSize: "4vw", fontFamily: "Arial", background: "blue", color: "white", width: "100vw", padding: "1vw", borderRadius: "5px" },
        linkText: { display: "inline", color: "black", fontSize: "3vw", textDecoration: "none", fontFamily: "Arial Black" },
        image: { height: "30vw", width: "50vw", justifyContent: "center", borderRadius: "20px", border: "solid", marginRight: "1vw" },
        imageContainer: { border: "black", width: "100vw" },
        buttons: { background: "aquamarine", borderRadius: "4px" },
        appDescription: { background: "lightBlue", fontSize: "3vw", padding: "1vw", borderRadius: "10px" }
    }
    return (
        <section style={styles.appsSection}>
            <h2 style={styles.titleText}>Tough Decisions Game</h2>
            <img src={picture1} alt='tough decisions' style={styles.image}></img>
            <p>
                <button style={styles.buttons}><a href='https://github.com/garrettj94/ToughDecisions' style={styles.linkText}>Link to Github repo</a></button>
                <br></br>
                <br></br>
                <button style={styles.buttons}><a href='https://toughdecisions.herokuapp.com/' style={styles.linkText}>Link to deployed website</a></button>
                <p style={styles.appDescription}>A game where users can write situations or choices then vote on which they would rather choose. Uses Socket.io to allow multiple users to play simultaneously on different devices.</p>
            </p>
            <h2 style={styles.titleText}>Password Generator App</h2>
            <img src={picture2} alt='password generator screenshot' style={styles.image}></img>
            <p>
                <button style={styles.buttons}><a href='https://github.com/brianmckennaman/password-generator-app' style={styles.linkText}>Link to Github repo</a></button>
                <br></br>
                <br></br>
                <button style={styles.buttons}><a href='https://brianmckennaman.github.io/password-generator-app/' style={styles.linkText}>Link to deployed website</a></button>
                <p style={styles.appDescription}>An app that allows a user to generate a random, secure password or passkey. Users choose the length of the password, and which type of characters to use.</p>
            </p>
            <h2 style={styles.titleText}>Workday Scheduler App</h2>
            <img src={picture3} alt='work scheduler' style={styles.image}></img>
            <p>

                <button style={styles.buttons}><a href='https://github.com/brianmckennaman/workday-scheduler-app' style={styles.linkText}>Link to Github Repo</a></button>
                <br></br>
                <br></br>
                <button style={styles.buttons}><a href='https://brianmckennaman.github.io/workday-scheduler-app/' style={styles.linkText}>Link to deployed website</a></button>
                <p style={styles.appDescription}>An app that allows users to plan their workday by entering text into each timeslot. Each hour block will be highlighted depending on the real time of day.</p>
            </p>
            <h2 style={styles.titleText}>Note Taker App</h2>
            <img src={picture4} alt='note taker' style={styles.image}></img>
            <p>
                <button style={styles.buttons}><a href='https://github.com/brianmckennaman/note-taker-assignment-expressjs' style={styles.linkText}>Link to Github Repo</a></button>
                <br></br>
                <br></br>
                <button style={styles.buttons}><a href='https://brian-mckenna-note-taker.herokuapp.com/' style={styles.linkText}>Link to deployed website</a></button>
                <p style={styles.appDescription}>An app that allows users to write small notes for themselves. The notes are stored locally allowing them to persist even after refreshing or closing the page.</p>
            </p>
            <h2 style={styles.titleText}>Employee Management System</h2>
            <img src={picture5} alt='employee management system' style={styles.image}></img>
            <p>
                <button style={styles.buttons}><a href='https://github.com/garrettj94/DreamTeamManagement' style={styles.linkText}>Link to Github Repo</a></button>
                <br></br>
                <br></br>
                <button style={styles.buttons}><a href='https://sheltered-atoll-76141.herokuapp.com/' style={styles.linkText}>Link to deployed website</a></button>
                <p style={styles.appDescription}>An app that allows users to create and organize workplace teams or groups. Users register and log into the app ensuring only the teams each individual user creates are shown.</p>
            </p>
            <h2 style={styles.titleText}>Text Editor App</h2>
            <img src={picture6} alt='note taker' style={styles.image}></img>
            <p>
                <button style={styles.buttons}><a href='https://github.com/brianmckennaman/progressive-web-application-assignment' style={styles.linkText}>Link to Github Repo</a></button>
                <br></br>
                <br></br>
                <button style={styles.buttons}><a href='https://brians-jate-text-editor.herokuapp.com/' style={styles.linkText}>Link to deployed website</a></button>
                <p style={styles.appDescription}>An app that can be used as a code text editor. A progressive web application that can be used on a browser or downloaded and used on a user's device.</p>
            </p>
        </section>
    )
}

export default Apps