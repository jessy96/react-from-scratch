import React from "react";

export default function ResultsSort(){
    return (
        <div className="result-sort">
            <label>SORT BY</label>
            <select onChange = {(event)=>{console.log('soring by ' + event.target.value)}}>
                <option>RELEASE DATE</option>
                <option>NAME</option>
            </select>
        </div>
    )
}