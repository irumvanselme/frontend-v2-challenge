import React from "react";

import "./Component.css"

const RightSideBarItem = ({ name, value, total }) => {
    return (
        <div className="_item d-flex justify-content-center align-items-center">
            <div>
                <div>{ value }</div>
                <div>New { name }</div>
                <div>Tota { name }: { total }</div>
            </div>
        </div>
    )
}

export default function Component() {
    return (
        <div className="row row-cols-2 _card mt-5 mx-4">
            <div>
                <div className="_cases">
                    <h1 className="title">AFRICA</h1>
                    <div>
                        <div>11, 270</div>
                        <div>New Cases</div>
                    </div>
                    <div>All cases 22343.434</div>
                </div>
            </div>
            <div style={{ backgroundColor: "#2FC8B8" }}>
                <RightSideBarItem name="deaths" value={435} total={5434}/>
                <div className="_line"/>
                <RightSideBarItem name="recovered" value={435} total={5434}/>
                <div className="_line"/>
                <RightSideBarItem name="vacinated" value={435} total={5434}/>
            </div>
        </div>
    )
}