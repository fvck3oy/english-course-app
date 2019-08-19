import React from 'react'

class Counter extends React.Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
      <p>
        <br/>
        Clicked: {JSON.stringify(value)} times
        <br/>
        <br/>
        <button className="ampstart-btn ampstart-btn-secondary" onClick={onIncrement}>
          +
        </button>
        {' '}
        <button className="ampstart-btn ampstart-btn-secondary" onClick={onDecrement}>
          -
        </button>
      </p>
      </div>
    )
  }
}

export default Counter