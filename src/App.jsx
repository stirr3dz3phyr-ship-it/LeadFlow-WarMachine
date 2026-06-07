import React, { useState, useEffect } from 'react';
import './styles.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [currentView, setCurrentView] = useState("Dashboard");

  useEffect(() => { localStorage.setItem('isLoggedIn', isLoggedIn); }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-box">
          <h2>War Machine Access</h2>
          <button onClick={() => setIsLoggedIn(true)}>Authorize Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo-area"><h3>War Machine</h3></div>
        <div className="nav-block">
          {["Dashboard", "Settings", "Help Center"].map((item) => (
            <div key={item} className={`nav-item ${currentView === item ? "nav-item-active" : ""}`} onClick={() => setCurrentView(item)}>
              {item}
            </div>
          ))}
        </div>
        <div className="logout" onClick={() => setIsLoggedIn(false)}>Logout</div>
      </aside>

      <main className="main">
        {currentView === "Dashboard" && (
          <div className="dashboard-content">
            <h1>Good Morning Ragz 👋</h1>
            <div className="kpi-row">
              <div className="kpi-card"><h1>1</h1><p>New Leads</p></div>
              <div className="kpi-card"><h1>1</h1><p>Follow-ups</p></div>
              <div className="kpi-card"><h1>$235,000</h1><p>Revenue</p></div>
            </div>
            <div className="workspace">
              <div className="lead-card"><div className="lead-top"><span>BluePeak Interiors</span><span>Hot</span></div></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
