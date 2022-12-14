import React, { useState } from 'react'
import resumePdf from '../assets/resume.pdf'

function Resume() {
    var styles = {
        body: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
        downloadButton: { background: "blue", color: "white", height: "3vw", width: "10vw", fontSize: "2vw", borderRadius: "10px", cursor: "pointer" },
        listContainer: { background: "lightBlue", borderRadius: "10px" },
        skillList: { fontSize: "2vw" }
    }

    return (
        <div style={styles.body}>
            <h1>Checkout my resume!
                <a href={resumePdf} download={resumePdf}>
                    <button style={styles.downloadButton}>Download</button>
                </a>
                <h1 style={styles.listContainer}>Coding skills
                    <ul style={styles.skillList}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>React</li>
                        <li>GraphQL</li>
                    </ul>
                </h1>
            </h1>
        </div>
    )
}

export default Resume