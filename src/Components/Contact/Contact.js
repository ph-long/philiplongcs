import React from "react"
import './Contact.css'
import Philip_Long_Resume from '../../static/Philip_Long_Resume.pdf'

const Contact = () => {
    return (
        <div className="sticky-info">
            <ul style={{paddingLeft: '0em', marginTop: '1em'}}>
                <a href={Philip_Long_Resume} target="_blank" rel="noreferrer"><p>Resume</p></a>
                <p style={{marginBottom: '0em'}}>Contact Me</p>
                <hr className="line" style={{height: "3px"}}/>
                <p>Los Angeles, CA</p>
                <p>(626)-656-5079</p>
                <p>Philiplongcs@gmail.com</p>
            </ul>
        </div>
    )
}

export default Contact;