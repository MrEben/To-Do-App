import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import SideBar from "./pages/Navbar/SideBar";
import TopNav from "./pages/Navbar/TopNav";
import { AppProvider } from "./components/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./components/Setting/Settings";
import TextEditor from "./pages/Editor/Editor";
function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <SideBar />
          <Settings />
          <Routes>
            <Route>
              <Route path="/" element={<Dashboard />} />
              <Route path="/editor" element={<TextEditor />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
          <TopNav />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
