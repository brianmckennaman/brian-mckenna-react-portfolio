import React, { useState } from 'react'
import picture from "../assets/mypicture.jpg"
function AboutMe(props) {
return (
    <div>
        <img src={picture} alt='portfolio image'></img>
        <h1>Hello! My name is Brian McKenna, a junior full-stack developer. Thanks for checking out my portfolio! Here, you can see some of the apps I have developed, get in touch with my via my contact links, and checkout my other social links.</h1>
    </div>
)
}

export default AboutMe