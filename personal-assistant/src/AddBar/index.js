import React, { useState, useReducer, useRef } from 'react'
import nanoid from 'nanoid'
import { Container, Button, Input } from './styles'

const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

const AddBar = ({
  todos, setTodos,
}) => {
  const [form, setForm] = useReducer(formReducer, {
    id: '', name: '', date: '', importance: '',
  })

  return (
    <Container>
      <Input placeholder="Name of todo" value={form.name} onChange={e => setForm({ name: e.target.value })} width="300px" />
      <Input placeholder="Date to be completed" value={form.date} onChange={e => setForm({ date: e.target.value })} width="150px" type="date" />
      <Input placeholder="Importance" value={form.importance} onChange={e => setForm({ importance: e.target.value })} width="75px" type="number" />
      <Button onClick={() => setTodos([...todos, {
        id: nanoid(), name: form.name, date: form.date, importance: form.importance,
      }])}
      >
Add Todo!
      </Button>
    </Container>
  )
}

export default AddBar
