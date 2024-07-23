import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import './App.css';
import FetchDataComponent from './components/FetchDataComponent';

function App() {
  return (
    <div className="App">
      <div className="container">
        <FetchDataComponent />
      </div>
    </div>
  );
}

export default App;
