import React, { useState, useEffect } from 'react';
import './styles.css';

export default function App() {
  // Initialize state by checking localStorage directly
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [currentView, setCurrentView] = useState("Dashboard");
  const [leads, setLeads] = useState([
    { id: 1, company: "BluePeak Interiors", status: "Hot" },
    { id: 2, company: "Urban Nest Builders", status: "Follow-up Required" },
    { id: 3, company: "Apex Solutions", status: "New Lead" }
  ]);

  // Sync state changes with localStorage
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="login-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a1a' }}>
        <div className="login-box" style={{ background: 'white', padding: '40px', borderRadius: '8px', textAlign: 'center' }}>
          <h2>War Machine Access</h2>
          <button className="admin-login-btn" onClick={handleLogin} style={{ padding: '10px 20px', cursor: 'pointer' }}>Authorize Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h3>War Machine</h3>
        <div className="nav-block">
          <div className="nav-item nav-item-active">Dashboard</div>
          <div className="nav-item">Settings</div>
          <div className="nav-item">Help Center</div>
        </div>
        <div className="logout" onClick={handleLogout}>Logout</div>
      </aside>

      <main className="main">
        <h1>Good Morning Ragz 👋</h1>
        <div className="kpi-row">
          <div className="kpi-card"><h1>1</h1><p>New Leads</p></div>
          <div className="kpi-card"><h1>1</h1><p>Follow-ups</p></div>
          <div className="kpi-card"><h1>$235,000</h1><p>Revenue</p></div>
        </div>
        <div className="followup-list">
          {leads.map(lead => (
            <div key={lead.id} className="lead-card">
              <div className="lead-top">
                <span>{lead.company}</span>
                <span>{lead.status}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
