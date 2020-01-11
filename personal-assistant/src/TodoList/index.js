import React from 'react'
import {
  Container, Table, Tr, Td, Button,
} from './styles'

const compareDate = (a, b) => {
  if (a.date < b.date) {
    return -1
  }
  return 1
}

const compareImportance = (a, b) => {
  if (a.importance < b.importance) {
    return -1
  }
  return 1
}

const TodoList = ({
  todos, setTodos, searchContent,
}) => (
  <Container>
    <Table>
      {(todos.filter(t => ((t.name).toLowerCase()).includes(searchContent.toLowerCase())).sort(compareImportance).sort(compareDate).map(todo => (
        <Tr>
          <Td>
            <Button
              key={todo.id}
              onClick={() => {
                setTodos(todos.filter(t => {
                  if (todo.id === t.id) {
                    console.log(t.id)
                    return false
                  }
                  return true
                }))
              }}
            >
Remove Todo
            </Button>
          </Td>
          <Td><p>{todo.name}</p></Td>
          <Td><p>{todo.date}</p></Td>
          <Td><p>{todo.importance}</p></Td>
        </Tr>
      )))}

    </Table>
  </Container>
)


export default TodoList
