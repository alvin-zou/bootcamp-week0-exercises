import styled from 'styled-components'
// import { Link } from 'react-router-dom'

export const Container = styled.div`
    padding: 50px 10vw;
    width: 80vw;
    height: 5vh;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const StyledText = styled.p`
    padding: 60px;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-family: ${({ theme }) => theme.font.header.family};
`
