import React from "react";

export default function Clock() {

    let currentdate = new Date()
    const [time, setTime] = React.useState(`${currentdate.getHours()} : ${currentdate.getMinutes()}`)
    setInterval(() => {
        currentdate = new Date()
        setTime(() => (`${currentdate.getHours()} : ${currentdate.getMinutes()}`))
    }, 10000)

    return (
        <div className="main--clock-container">
            <h1 className="main--clock-container-digits">{time}</h1>
        </div>
    )
}