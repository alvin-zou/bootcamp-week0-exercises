import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TodosPage from './TodosPage'
import HomePage from './HomePage'

const App = () => (
  <div>
    <Switch>
      <Route path="/todos">
        <TodosPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
)

export default App
