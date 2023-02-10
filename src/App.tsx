import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import { WhatsAppBtn } from './components/WhatsAppBtn';
import Routers from './routers';

function App() {
  
  return (
    <Router>
      <MasterHeader />
      <Routers />
      <WhatsAppBtn />
      <MasterFooter />
    </Router>
  );
};

export default App;
