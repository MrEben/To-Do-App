import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import SideBar from './pages/Navbar/SideBar';
function App() {
  return (
    <div className="app">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
