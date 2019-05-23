import React, { Component } from 'react';
import seedColors from './seedColors';
import Palette from './Palette';

class App extends Component {
  render() {
    return (
      <Palette {...seedColors[4]} />
    );
  }
}

export default App;
