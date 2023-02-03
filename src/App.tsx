import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import Routers from './routers';

function App() {
  
  return (
    <Router>
      <MasterHeader />
      <Routers />
      <MasterFooter />
    </Router>
  );
};

export default App;
