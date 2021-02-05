import React from "react"
import Header from "../components/header"
import { Link, graphql,useStaticQuery } from 'gatsby';
import Container from '../components/container';

export default function Home() {
  const currenciesValues = useStaticQuery(graphql `
  query MyQuery {
    currencies {
      dolar {
        fecha
        valor
      }
      euro {
        fecha
        valor
      }
    }
  }
  
  `)
  return (
    <Container>
      <div style={{ color: `purple` }}>
        <Header headerText="home"></Header>
        <Link to="about">about</Link>
        <Link to="about-css-modules">About CSS</Link>
      <h1>Hello Gatsby!</h1>
      <p>What a world.{JSON.stringify(currenciesValues)}</p>
      <img src="https://source.unsplash.com/random/400x200" alt="random element printed" />
      </div>
    </Container>
  )
}