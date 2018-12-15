import React from 'react'
import Filter from './Filter'
import { actionFor as afAnecdote } from '../reducers/anecdoteReducer'
import { actionFor as afNotification } from '../reducers/notificationReducer'
const actionFor = { ...afAnecdote, ...afNotification }

class AnecdoteList extends React.Component {

  handleVote = (anecdote) => () => {
    const store = this.props.store

    store.dispatch(actionFor.voting(anecdote.id))
    store.dispatch(actionFor.settingNotification(`You voted for "${anecdote.content}"`))
    setTimeout(() => {
      store.dispatch(actionFor.hidingNotification())
    }, 5000)
  }

  render() {
    const store = this.props.store
    const anecdotes = this.props.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={store}/>
        {anecdotes
          .filter(anecdote => anecdote.content.includes(store.getState().filter))
          .sort((a, b) => b.votes - a.votes)
          .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.handleVote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList