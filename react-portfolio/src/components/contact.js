import React, {useState} from 'react'
import aboutMe from './about'

function contact() {
    var style={
        contactForms: { display: "flex" },
        inputForms: { justifyContent: "flexEnd"}
    }
 return (
    <section style={style.contactForms}>
        <form style={style.inputForms}>
            <input type={"text"} ></input>
            <input type={"text"}></input>
            <input type={"text"}></input>
        </form>
    </section>
 )
}

export default contact