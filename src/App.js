import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewComponent from './Component/NewComponent'

class App extends React.Component{
  style = {
    fontStyle: 'bold',
    color: 'teal'
  }

  render(){
    return(
    <div className='App'>
      <h1 style={this.style}>Welcome</h1>
      <NewComponent />
    </div>
    );
  }
}

export default App;
