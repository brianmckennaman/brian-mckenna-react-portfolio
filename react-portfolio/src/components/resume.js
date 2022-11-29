import React, {useState} from 'react'
import resumePdf from '../assets/resume.pdf'
import resumeImage from '../assets/resume.pdf'

function Resume() {
    var styles= {
        downloadButton: { background: "blue", color: "white" }
    }

    return (
        <div>
        <h1>Checkout my resume!</h1>
        <button style={styles.downloadButton}>
            <a href={resumePdf} download={resumePdf}></a>Download</button>
        <img src={resumeImage} alt='resume image'></img>
        </div>
    )
}

export default Resume