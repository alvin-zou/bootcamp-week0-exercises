import React from 'react'
import { Container, Button, Input } from './styles'


const SearchBar = ({ searchContent, setSearchContent }) => (
  <Container>
    <Input placeholder="Search todos" onChange={e => setSearchContent(e.target.value)} width="30vw" />
    {console.log(searchContent)}
  </Container>
)

export default SearchBar
