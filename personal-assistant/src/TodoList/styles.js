import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px 20vw;
    width: 60vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: ${({ theme }) => theme.font.header.family};
`

export const Container2 = styled.div`
    padding: 20px 20vw;
    width: 60vw;
    background-color: lightgreen;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Table = styled.table`
    padding: 20px;
`

export const Tr = styled.tr`
    padding: 20px;
`

export const Td = styled.td`
    padding: 20px;
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
