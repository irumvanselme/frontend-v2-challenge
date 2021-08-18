import React from "react";
import "./Footer.css";

export default function Footer(){
    return (
        <div className="_container">
            <div className="_footer-profile">
                I am the Footer
            </div>
            <div className="_copyright space-horizontal">
                <div className="_copyright-text">
                    <div>Developed by <span className="bold-text">irumva anselme</span></div>
                    <div>Designed by <span className="bold-text">Awesomity Lab</span></div>
                </div>
            </div>
        </div>
    )
}