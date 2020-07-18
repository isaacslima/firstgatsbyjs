import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>my Contacts</p>
      <p><a target="_blank" href="https://github.com/isaacslima">GitHub</a></p>
    </div>
  )
}