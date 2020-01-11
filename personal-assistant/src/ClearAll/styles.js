import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px 20vw;
    width: 60vw;
    height: 5vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Button = styled.button`
    width: 100px;
    height: 30px;
    background: #FF8888;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.header.family};
    transition: all 1s;

    &:hover {
        background-color: red;
        color: white;
    }
`
