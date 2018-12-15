import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

class App extends React.Component {

  // refactor to use context, or wait for connect to be handled?

  render() {
    const store = this.props.store
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification store={store} />
        <AnecdoteList store={store} />
        <AnecdoteForm store={store} />
      </div>
    )
  }
}

export default App