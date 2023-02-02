import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import SideBar from "./pages/Navbar/SideBar";
import TopNav from "./pages/Navbar/TopNav";
import { AppProvider } from "./components/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <SideBar />
          <Routes>
            <Route>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add" element={<AddTask />} />
            </Route>
          </Routes>
          <TopNav />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
