import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import styles from "./about.module.css"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="About" />
      <User
        username="Isaac Sousa"
        avatar="https://avatars3.githubusercontent.com/u/11709857?s=400&u=0dda473685553140c02cae89e3bfac71b11b4b44&v=4"
        excerpt="I'm a software engineer."
      />
    </div>
  )
}