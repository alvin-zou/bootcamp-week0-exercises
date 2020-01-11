import React from 'react'
import { Container, Button } from './styles'


const ClearAll = ({ setTodos }) => (
  <Container>
    <Button
      onClick={() => {
        setTodos([])
      }}
    >
Clear All Todos
    </Button>
  </Container>
)

export default ClearAll
