import React from "react";

import "./Search.css"

export default function Search() {
    return (
        <div className="_search-container pt-5">
            <div className="space-horizontal d-flex justify-content-between">
                <div className="_logo title">COVICALC</div>
                <div>
                    <button className="_button">CONTACT</button>
                </div>
            </div>
            <div className="text-center mt-5">
                <h1 style={{ fontSize: 50, color: "white" }} className="title">UPDATES</h1>
                <div style={{ fontWeight: 300, color: "white" }}>Search a country</div>
            </div>
        </div>
    )
}