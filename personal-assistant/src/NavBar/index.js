import React from 'react'
import { Container, Button, StyledLink } from './styles'


const NavBar = ({ alertText }) => (
  <Container>
    <StyledLink to="/"><Button onClick={() => ''}>Home</Button></StyledLink>
    <StyledLink to="/todos"><Button onClick={() => ''}>Todos</Button></StyledLink>
  </Container>
)

export default NavBar
