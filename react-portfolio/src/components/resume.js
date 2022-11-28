import React, {useState} from 'react'

function Resume() {
    var styles= {
        downloadButton: { background: "blue", color: "white"}
    }

    return (
        <div>
        <h1>Checkout my resume!</h1>
        <button style={styles.downloadButton}>Download</button>
        <img></img>
        </div>
    )
}

export default Resume