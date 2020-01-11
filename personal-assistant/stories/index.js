import React from 'react'
import { storiesOf } from '@storybook/react'
import ExampleComponent from '../src/ExampleComponent'
import App from '../src/App'

storiesOf('ExampleComponent', module).add("It's me", () => (
  <ExampleComponent alertText="Hewo der 💩" />
  <AddBar alertText="Todo successfully added!" />
))

storiesOf('App', module).add('App', () => (
  <App />
))
