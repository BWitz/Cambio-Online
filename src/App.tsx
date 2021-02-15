import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {
    const loop = () => {
        let x = 0;
        while (x < 10) {
            x += 1;
            console.log(x);
        }
    }
    
    useEffect(() => {
        loop();
        return () => {
        }
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
