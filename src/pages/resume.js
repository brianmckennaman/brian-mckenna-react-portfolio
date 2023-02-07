import React from 'react'
import resumePdf from '../assets/resume.pdf'

function Resume() {
    var styles = {
        body: { display: "flex", flexWrap: "wrap", justifyContent: "center", marginLeft: "1vw", marginRight: "1vw" },
        description: { background: "lightBlue", borderRadius: "10px", padding: "1vw", fontSize: "3vw" },
        downloadButton: { background: "blue", color: "white", height: "3vw", width: "11vw", fontSize: "2vw", borderRadius: "10px", cursor: "pointer" },
        skillHeader: { fontSize: "5vw", justifyContent: "center"},
        listContainer: { background: "lightBlue", borderRadius: "10px", padding: "1vw" },
        skillList: { fontSize: "2vw" }
        // Styling for alternate page design
        // sectionHeader: { fontSize: "4vw", background: "lightBlue", padding: "1vw", borderRadius: "5px"},
        // sectionContent: { fontSize: "3vw" }, 
        // sectionList: { fontSize: "2vw"},
        // hidden: {display: "none"}
    }

    return (
        <div style={styles.body}>
            <h1 style={styles.description}>Here's a list of the coding languages I am familiar with. To see the rest of my resume, click this button--->
                <a href={resumePdf} download={resumePdf}>
                    <button style={styles.downloadButton}>Download</button>
                </a>
                </h1>

                {/* Styling for alternate design with show/hide button for resume summary */}
                {/* <h2 style={styles.sectionHeader
                }>Education <button id='displayButton'>Show/Hide</button>
                <div style={styles.hidden}>
                    <p style={styles.sectionContent}>Mount St. Mary's University</p>
                    <ul style={styles.sectionList}>
                        <li>Bachelor's Degree in Communications</li>
                        <li>Class of 2017</li>
                    </ul>
                </div>
                </h2>
                
                <h2 style={styles.sectionHeader
                }>Work Experience <button>Show/Hide</button>
                    <p>Paraprofessional, Madison Public Schools</p>
                    <ul>
                        <li>Madison, CT</li>
                        <li>2021-Present</li>
                    </ul>
                    <p>Live in teacher/Counselor, The Grove School</p>
                    <ul>
                        <li>Madison, CT</li>
                        <li>2021</li>
                    </ul>
                    <p>English Teacher, Education First</p>
                    <ul>
                        <li>Qingdao, PRC</li>
                        <li>2018-2020</li>
                    </ul>
                </h2>

                <h2 style={styles.sectionHeader}>Skills <button>Show/Hide</button>
                    <p>Microsoft Office Suite</p>
                    <ul>
                        <li>Microsoft Word</li>
                        <li>Microsoft Excel</li>
                        <li>Microsoft Powerpoint</li>
                        <li>Microsoft Outlook</li>
                    </ul>
                    <p>Coding</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                        <li>React</li>
                    </ul>
                </h2> */}
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
            
        </div>
    )
}
// function for show/hide button
// function displayHide (event) {
    
// } 
// document.getElementById("displayButton").addEventListener("click", displayHide )

export default Resume

// Styling for alternate react bootstrap page design
{/* <div style={styles.body}>
             <h1>Checkout my resume!
                <a href={resumePdf} download={resumePdf}>
                     <button style={styles.downloadButton}>Download</button>
                </a>
        <Accordion>
            <Accordion.Item eventKey="0" flush>
                <Accordion.Header>Education</Accordion.Header>
                <Accordion.Body>
                    Bachelor's in Communications from Mount St. Mary's University, Class of 2017
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Employment Experience</Accordion.Header>
                <Accordion.Body>
        
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </h1>
</div> */}