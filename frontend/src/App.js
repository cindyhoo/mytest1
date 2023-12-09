import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:5001/');
      console.log(res);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  	
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a>
          api response: {data}
        </a>
      </header>
    </div>
  );
}

export default App;