import "./ResultsSort.css";
import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

export default function ResultsSort(){

    const dispatch = useDispatch()
    const {fetchSort} = bindActionCreators(actionCreators, dispatch)
    const handleSort = e => {
        fetchSort(e.target.value)
    }

    return (
        <div className="result-sort">
            <label>SORT BY</label>
            <select onChange = {handleSort}>
                <option>LATEST</option>
                <option>RATING</option>
                <option>RELEASE DATE</option>
                <option>NAME</option>
            </select>
        </div>
    )
}
