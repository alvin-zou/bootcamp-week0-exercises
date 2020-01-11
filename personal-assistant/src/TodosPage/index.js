import React, { useState, useReducer, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import AddBar from '../AddBar'
import SearchBar from '../SearchBar'
import NavBar from '../NavBar'
import ClearAll from '../ClearAll'
import TodoList from '../TodoList'
import theme from '../theme'

// const todoReducer = (prevState, payload) => ([...prevState, payload])

const TodosPage = () => {
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
      <AddBar todos={todos} setTodos={setTodos} searchContent={searchContent} setSearchContent={setSearchContent} />
      <SearchBar todos={todos} setTodos={setTodos} searchContent={searchContent} setSearchContent={setSearchContent} />
      <ClearAll todos={todos} setTodos={setTodos} searchContent={searchContent} setSearchContent={setSearchContent} />
      <TodoList todos={todos} setTodos={setTodos} searchContent={searchContent} setSearchContent={setSearchContent} />
    </ThemeProvider>
  )
}

export default TodosPage
