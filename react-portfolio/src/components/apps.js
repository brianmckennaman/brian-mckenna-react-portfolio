import React, {useState} from 'react'

function Apps() {
    var styles = {
        appsSection: { display: "inline", justifyContent: "center"},
        linkText: { display: "inline"}
    }
    return(
        <section style={styles.appsSection}>
            <div>Horiseon Mockup Homepage</div>
            <img  alt=''></img>
            <div style={styles.linkText}>
            <p>
                <a href='https://github.com/brianmckennaman/Horiseon-homepage-assignment'>Github</a>
            </p>
            <p>
                <a href='https://brianmckennaman.github.io/Horiseon-homepage-assignment/'>Website</a>
            </p>
            </div>
            <img src='../react-portfolio/assets/Screenshot(4).png' alt='password generator screenshot'></img>
            <div>Password Generator App</div>
            <p>
                <a href='https://github.com/brianmckennaman/password-generator-app'>Github</a>
            </p>
            <p>
                <a href='https://brianmckennaman.github.io/password-generator-app/'>Website</a>
            </p>
            <div>Workday Scheduler App</div>
            <p>
                <a href='https://github.com/brianmckennaman/workday-scheduler-app'>Github</a>
            </p>
            <p>
                <a href='https://brianmckennaman.github.io/workday-scheduler-app/'>Website</a>
            </p>
            <div>Note Taker App</div>
            <p>
                <a href='https://github.com/brianmckennaman/note-taker-assignment-expressjs'>Github</a>
            </p>
            <p>
                <a href='https://brian-mckenna-note-taker.herokuapp.com/'>Website</a>
            </p>
            <div>Employee Management System</div>
            <p>
                <a href='https://github.com/brianmckennaman/Challenge-Assignment-1'>Github</a>
            </p>
            <p>
                <a href='https://brianmckennaman.github.io/Challenge-Assignment-1/'>Website</a>
            </p>
            <div>Text Editor App</div>
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