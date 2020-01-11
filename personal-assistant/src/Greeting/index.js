import React from 'react'
import { Container, StyledText } from './styles'


const Greeting = () => (
  <>
    <Container>
      <StyledText>Welcome to your Personal Assistant! Navigate to the Todos page to view, add, and remove your todos. You can search through your todos via the search bar, and todos are automatically sorted by date, and then by importance, with smaller values representing more importance todos.</StyledText>
    </Container>
    <StyledText>© MMXX PersonalAssistant™ Inc.</StyledText>
  </>
)

export default Greeting
