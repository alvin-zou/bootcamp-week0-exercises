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

export const Input = styled.input`
    height: 20px;
    width: ${({ width }) => width};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-family: ${({ theme }) => theme.font.header.family};

    &:hover {
    }
`
