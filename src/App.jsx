import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import SideBar from './pages/Navbar/SideBar';
import TopNav from './pages/Navbar/TopNav';
import { AppProvider } from './components/context';

function App() {
  return (
    <AppProvider>
      <div className="app">
        <SideBar />
        <Dashboard />
        <TopNav />
      </div>
    </AppProvider>
  );
}

export default App;
