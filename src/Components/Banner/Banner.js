import React from "react"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import './Banner.css'

const Banner = () => {
    return (
    <div className="root">
        <div className="Banner">
            <p className="font-link" style={{color: 'rgb(36,37,32)'}}>Philip Long</p>
            <p className="font-link" style={{color: "rgb(195,195,193)", fontSize: "2em"}}>University of California - Irvine</p>
            <a href="https://github.com/ph-long" target="_blank" rel="noreferrer" style={{color: 'rgb(34,37,41)'}}><AiFillGithub className="github"/></a>
            <a href="https://www.linkedin.com/in/philip-long-9b03b6204/" target="_blank" rel="noreferrer" style={{color: 'rgb(34,37,41)'}}><AiFillLinkedin className="github"/></a>
        </div>
    </div>
    )
};

export default Banner;