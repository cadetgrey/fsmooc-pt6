import React from 'react'
import { actionFor as afAnecdote } from '../reducers/anecdoteReducer'
import { actionFor as afNotification } from '../reducers/notificationReducer'
const actionFor = { ...afAnecdote, ...afNotification }

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const store = this.props.store
    const content = e.target.anecdote.value
    store.dispatch(actionFor.anecdoteCreation(content))
    e.target.anecdote.value = ''
    
    store.dispatch(actionFor.settingNotification(`You added the following anecdote: "${content}"`))
    setTimeout(() => {
      store.dispatch(actionFor.hidingNotification())
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default AnecdoteForm
