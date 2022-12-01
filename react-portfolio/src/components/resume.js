import React, {useState} from 'react'
import resumePdf from '../assets/resume.pdf'
import resumeImage from '../assets/resume.pdf'

function Resume() {
    var styles= {
        downloadButton: { background: "blue", color: "white", height: "3vw", width: "10vw" },
        skillList: { fontSize: "2vw"}
    }

    return (
        <div>
        <h1>Checkout my resume!</h1>
        <button style={styles.downloadButton}>
            <a href={resumePdf} download={resumePdf}></a>Download</button>
        <img src={resumeImage} alt='resume image'></img>
        <h1>Coding skills</h1>
        <div style={styles.skillList}>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>Node.js</p>
        <p>Express</p>
        <p>MySQL</p>
        <p>MongoDB</p>
        <p>React</p>
        <p>GraphQL</p>
        </div>

        </div>
    )
}

export default Resume