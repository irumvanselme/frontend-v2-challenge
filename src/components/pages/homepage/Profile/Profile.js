import React from "react";
import "./Profile.css"

export default function Profile(){
    return (
        <div className="_container-profle">
            <div className="_image">
                <img src="/profile.jpg" alt="My Image"/>
            </div>
            <div className="_name">
                <div>
                    <h1 className="title">IRUMVA H. Anselme</h1>
                    <div className="skill">Front-end Developer</div>
                    <div className="date">00 August 2021</div>
                </div>
            </div>
        </div>
    )
}