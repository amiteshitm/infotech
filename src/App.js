import React from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import Card from './components/grid'
class App extends React.Component {

  render() {

    return (
      <div>
        {/* <Route /> */}
        <Card />
      </div>
    );
  }

}

export default App;
