import React, { FC, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import { WhatsAppBtn } from './components/WhatsAppBtn';
import Routers from './routers';
import { DarkModeSwitch } from './components/DarkModeSwitch';

interface AppProps {
  activeHeadingTab?: string;
  setActiveHeadingTab?: string;
}

const App: FC<AppProps> = () => {
  const [activeHeadingTab, setActiveHeadingTab] = useState<string>('mechanics');

  return (
    <Router>
      <MasterHeader activeHeadingTab = {activeHeadingTab} setActiveHeadingTab = {setActiveHeadingTab} />
      <Routers />
      <WhatsAppBtn />
      <MasterFooter activeHeadingTab = {activeHeadingTab} />
      <DarkModeSwitch />
    </Router>
  );
};

export default App;
