import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    const state = localStorage.getItem('state')
    if (state) {
      this.setState({ notes: JSON.parse(state) })
    }
  }

  componentDidUpdate() {
    const state = JSON.stringify(this.state.notes)
    localStorage.setItem('state', state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
