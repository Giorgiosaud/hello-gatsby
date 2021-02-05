import React from "react"
import Header from '../components/header';
import { Link } from 'gatsby';
import Container from "../components/container";

export default function Home() {
  return (
    <Container>
      <div style={{ color: `purple` }}>
        <Header headerText="about"></Header>
        <Link to="/">home</Link>
        <Link to="/contact">contact</Link>
      <h1>About Page!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="random element printed" />
      </div>
    </Container>
  )
}