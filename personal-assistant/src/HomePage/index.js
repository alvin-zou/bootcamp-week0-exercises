import React, { useState, useReducer, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import SearchBar from '../SearchBar'
import NavBar from '../NavBar'
import TodoList from '../TodoList'
import Greeting from '../Greeting'
import theme from '../theme'

// const todoReducer = (prevState, payload) => ([...prevState, payload])

const HomePage = () => {
  const [searchContent, setSearchContent] = useState('')
  const [todos, setTodos] = useState([]) /* [{
    id: 1,
    name: 'Do the laundry',
    date: new Date().toString(),
    importance: 3,
  }, {
    id: 2,
    name: 'Apply for freshman seminars',
    date: new Date().toString(),
    importance: 1,
  }, {
    id: 3,
    name: 'Sign up for intramurals',
    date: new Date().toString(),
    importance: 2,
  }] */
  return (
    <ThemeProvider theme={theme}>
      <NavBar todos={todos} setTodos={setTodos} searchContent={searchContent} setSearchContent={setSearchContent} />
      <Greeting />
    </ThemeProvider>
  )
}

export default HomePage
