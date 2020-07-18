import React from "react"
import containerStyles from "./header.module.css"

export default function Header(props) {
    return <div className={containerStyles.header}>{props.headerText}</div>
}