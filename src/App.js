import './App.css';
// import ReactDOM from 'react-dom'
import { Header } from './Header';
import { Content } from './Content';
// import Button from './Button';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'))