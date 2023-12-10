import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [getHelloData, setGetHelloData] = useState([]);
  const [personsFindAllData, setPersonsFindAllData] = useState([]);

  const getData = async () => {
    try {
      const getHelloRes = await axios.get('http://localhost:5001/');
      console.log(getHelloRes);
      setGetHelloData(getHelloRes.data);
      const personsFindAllRes = await axios.get('http://localhost:5001/persons');
      console.log(personsFindAllRes);
      setPersonsFindAllData(personsFindAllRes.data);
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
          getHello api response: {getHelloData}
        </a>
        <a>
          persons.findAll api response: {JSON.stringify(personsFindAllData[1])}
        </a>
        <a>
          persons.findAll api response: {JSON.stringify(personsFindAllData)}
        </a>
      </header>
    </div>
  );
}

export default App;