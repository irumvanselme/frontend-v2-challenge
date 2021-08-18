import React from "react";

import "./Search.css"

const SearchItem = ({ number, name, total}) => {
    return (
        <div>
            <div>{number}</div>
            <div>{name}</div>
            <div>{total}</div>
        </div>
    )
}

export default function Search() {
    return (
        <>
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
            
            <div className="_front-card">
                <div className="_cumulative">
                    <div>77777</div>
                    <div>Cumulative</div>
                </div>
                <div className="_details d-flex justify-content-between align-items-center">
                    <SearchItem total={4343} number={32332} name="dsds" />
                    <SearchItem total={4343} number={32332} name="dsds" />
                    <SearchItem total={4343} number={32332} name="dsds" />
                    <SearchItem total={4343} number={32332} name="dsds" />
                    <SearchItem total={4343} number={32332} name="dsds" />
                    <SearchItem total={4343} number={32332} name="dsds" />
                </div>
            </div>
        </>
    )
}