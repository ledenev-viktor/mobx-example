import React from 'react';
import './App.css';
import { Count } from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GithubUserDetails } from './components/GithubUserDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Count />
        <GithubUserDetails/>
      </header>
    </div>
  );
}

export default App;
