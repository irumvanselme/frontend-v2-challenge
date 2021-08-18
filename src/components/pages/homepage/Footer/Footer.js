import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="_container">
            <div className="_footer-profile">
                <div>
                    <h1 className="title _title text-center">REACH ME</h1>
                    <div className="_profile-item">
                        <h3 className="_variable">Email</h3>
                        <div className="_value">andesanselme@gmail.com</div>
                    </div>
                    <div className="_profile-item">
                        <h3 className="_variable">Phone</h3>
                        <div className="_value">+250 783 384 212</div>
                    </div>
                    <div className="_profile-item">
                        <h3 className="_variable">Profile</h3>
                        <div className="_value">
                            <a href="https://irumvanselme.is-a.dev">https://irumvanselme.is-a.dev</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_copyright space-horizontal">
                <div className="_copyright-text">
                    <div className="_copyright-text-item">Developed by <span className="bold-text">irumva anselme</span>
                    </div>
                    <div className="_copyright-text-item">Designed by <span className="bold-text">Awesomity Lab</span>
                    </div>
                </div>
            </div>
        </div>
    )
}