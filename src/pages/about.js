import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="About Gatsby" />
      <Container>
        <p>Such wow. Very React.</p>
      </Container>
    </div>
  )
}