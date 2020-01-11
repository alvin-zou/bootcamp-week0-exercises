import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    padding: 50px 30vw;
    width: 40vw;
    height: 5vh;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Button = styled.button`
    width: 200px;
    height: 50px;
    background: lightgrey;
    border: solid;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-family: ${({ theme }) => theme.font.header.family};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 1s;

    &:hover {
        background-color: crimson;
        color: white;
    }
`

export const StyledLink = styled(Link)`
    color: black;
    font-family: ${({ theme }) => theme.font.header.family};
    font-size: 20px;
    text-decoration: none;

    &:hover {
        color: white;
    }
`
