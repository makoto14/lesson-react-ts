import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './component/test';

function App() {
  const [message, setMessage] = React.useState('');
  React.useEffect(() => {
    fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Front end</h1>
        <p>{ message }</p>
        <Test></Test>
      </header>
    </div>
  );
}

export default App;
