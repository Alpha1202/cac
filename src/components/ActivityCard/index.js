import React from 'react'
import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import "./style.css"



function ActivityCard(props) {
    return (
        <div className="activity-card">
            <div>
                {props.status ? <FaArrowUp size={"1rem"} color={"green"} />:<FaArrowDown size={"1rem"} color={"red"} />}
            </div>
            <span>Deposite</span>
            <div>300.473</div>
            <div className={`returns ${props.status ? "good-returns":"bad-returns"}`}>+2.35%</div>
            <span>Mar 4,2020</span>
        </div>
    )
}

export default ActivityCard;
