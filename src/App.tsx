import React, { FC, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import Routers from './routers';
import { DarkModeSwitch } from './components/DarkModeSwitch';

interface AppProps {
  activeHeadingTab?: string;
  setActiveHeadingTab?: string;
}

const App: FC<AppProps> = () => {
  const [activeHeadingTab, setActiveHeadingTab] = useState<string>('detailing');

  return (
    <Router>
      <MasterHeader 
      activeHeadingTab = {activeHeadingTab} 
      // setActiveHeadingTab = {setActiveHeadingTab}
       />
      <Routers />
      <FloatingWhatsApp accountName={'Nova Cars Care'} phoneNumber={'+905413353713'} />
      <MasterFooter 
      activeHeadingTab = {activeHeadingTab} 
      />
      <DarkModeSwitch />
    </Router>
  );
};

export default App;
