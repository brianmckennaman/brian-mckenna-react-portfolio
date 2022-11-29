import React, {useState} from 'react'
import picture1 from "../assets/horiseon.png"
import picture2 from "../assets/passwordgenerator.png"
import picture3 from "../assets/scheduler.png"
import picture4 from "../assets/notetaker.png"
import picture5 from "../assets/project2.png"
import picture6 from "../assets/texteditor.png"

function Apps() {
    var styles = {
        appsSection: { display: "inline", justifyContent: "center"},
        linkText: { display: "inline"},
        image: { height: "40vw", width: "60vw" }
    }
    return(
        <section style={styles.appsSection}>
            <div>Horiseon Mockup Homepage</div>
            <img src={picture1} alt='horiseon homepage' style={styles.image }></img>
            <div style={styles.linkText}>
            <p>
                <a href='https://github.com/brianmckennaman/Horiseon-homepage-assignment'>Github</a>
            </p>
            <p>
                <a href='https://brianmckennaman.github.io/Horiseon-homepage-assignment/'>Website</a>
            </p>
            </div>
            <div>Password Generator App</div>
            <img src={picture2} alt='password generator screenshot' style={styles.image }></img>
            <p>
                <a href='https://github.com/brianmckennaman/password-generator-app'>Github</a>
            </p>
            <p>
                <a href='https://brianmckennaman.github.io/password-generator-app/'>Website</a>
            </p>
            <div>Workday Scheduler App</div>
            <img src={picture3} alt='work scheduler' style={styles.image}></img>
            <p>
                <a href='https://github.com/brianmckennaman/workday-scheduler-app'>Github</a>
            </p>
            <p>
                <a href='https://brianmckennaman.github.io/workday-scheduler-app/'>Website</a>
            </p>
            <div>Note Taker App</div>
            <img src={picture4} alt='note taker' style={styles.image}></img>
            <p>
                <a href='https://github.com/brianmckennaman/note-taker-assignment-expressjs'>Github</a>
            </p>
            <p>
                <a href='https://brian-mckenna-note-taker.herokuapp.com/'>Website</a>
            </p>
            <div>Employee Management System</div>
            <img src={picture5} alt='employee management system' style={styles.image}></img>
            <p>
                <a href='https://github.com/brianmckennaman/Challenge-Assignment-1'>Github</a>
            </p>
            <p>
                <a href='https://brianmckennaman.github.io/Challenge-Assignment-1/'>Website</a>
            </p>
            <div>Text Editor App</div>
            <img src={picture6} alt='note taker' style={styles.image}></img>
            <p>
                <a href='https://github.com/brianmckennaman/progressive-web-application-assignment'>Github</a>
            </p>
            <p>
                <a href='https://brians-jate-text-editor.herokuapp.com/'>Website</a>
            </p>
        </section>
    )
}

export default Apps