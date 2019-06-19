import React, { Component } from 'react'

class App extends Component {
  handleError() {
    console.log('handleError')
    performance.getEntries().map(item => console.log(item))
  }
  render() {
    return (
      <div className="App">
        ceshi
        <img src="ceshi" alt="" onError={this.handleError} />
      </div>
    )
  }
}
console.log(React)
window.open('defineProperties')
export default App
