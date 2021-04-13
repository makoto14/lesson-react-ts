import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react'

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, [])
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>フロントエンド</h1>
        <p>{ message }</p>
    </div>
  );
}

export default App;
