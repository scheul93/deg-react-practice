import React, { Component } from 'react';
import Search from './components/Search/Search';
import DistanceFilter from './components/DistanceFilter/DistanceFilter';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      zipCode: {
        value: ""
      },
      distance: {
        value: 5
      },
      gender: {
        value: ""
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HEADER</h1>
        </header>
        <Search zipCode={this.state.zipCode} />
        <DistanceFilter distance={this.state.distance} />
      </div>
    );
  }
}

export default App;
