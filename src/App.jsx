import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState("Dashboard");
  const username = "Ragz";

  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-left">
          <div className="login-overlay">
            <div className="login-hero">
              <h1>LeadFlow War Machine</h1>
              <p>Command Center for Strategic Growth</p>
            </div>
          </div>
        </div>
        <div className="login-right">
          <div className="login-box">
            <img src="/logo.png" alt="Logo" className="login-logo" />
            <h2>Welcome Back</h2>
            <input type="text" placeholder="Username" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <button className="user-login-btn" onClick={() => setIsLoggedIn(true)}>User Login</button>
            <button className="admin-login-btn" onClick={() => setIsLoggedIn(true)}>Admin Login</button>
          </div>
        </div>
      </div>
    );
  }

  const DashboardContent = () => (
    <>
      <h1>Good Morning {username} 👋</h1>
      <div className="kpi-row">
        <div className="kpi-card"><h1>47</h1><p>New Leads - Untouched</p></div>
        <div className="kpi-card"><h1>16</h1><p>Follow-ups Today</p></div>
        <div className="kpi-card"><h1>9</h1><p>RPCs Reached</p></div>
        <div className="kpi-card"><h1>13</h1><p>Unreachable / RNR Leads</p></div>
      </div>
      
      <div className="workspace">
        <h3>Shall we begin the day by following up on:</h3>
        <div className="followup-list">
          <div className="lead-card">
            <div className="lead-top"><span>BluePeak Interiors</span><span>RPC: Arjun Mehta</span></div>
            <div className="lead-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Last Contact: 2 Days Ago | Status: Interested | Priority: Warm</span>
              <div className="lead-actions" style={{ display: 'flex', gap: '15px', marginTop: '0' }}>
                <i className="fa-brands fa-whatsapp icon-action" style={{color: '#25D366', cursor: 'pointer'}}></i>
                <i className="fa-solid fa-phone icon-action" style={{color: '#2f5cff', cursor: 'pointer'}}></i>
                <i className="fa-solid fa-envelope icon-action" style={{color: '#FFC107', cursor: 'pointer'}}></i>
                <i className="fa-solid fa-clock icon-action" style={{color: '#888888', cursor: 'pointer'}}></i>
              </div>
            </div>
          </div>
          <div className="lead-card">
            <div className="lead-top"><span>Urban Nest Builders</span><span>RPC: Priya Sharma</span></div>
            <div className="lead-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Last Contact: 1 Day Ago | Status: Follow-up | Priority: Hot</span>
              <div className="lead-actions" style={{ display: 'flex', gap: '15px', marginTop: '0' }}>
                <i className="fa-brands fa-whatsapp icon-action" style={{color: '#25D366', cursor: 'pointer'}}></i>
                <i className="fa-solid fa-phone icon-action" style={{color: '#2f5cff', cursor: 'pointer'}}></i>
                <i className="fa-solid fa-envelope icon-action" style={{color: '#FFC107', cursor: 'pointer'}}></i>
                <i className="fa-solid fa-clock icon-action" style={{color: '#888888', cursor: 'pointer'}}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="kpi-row">
        <div className="kpi-card"><h1>12</h1><p>Warm / Hot Prospects</p></div>
        <div className="kpi-card"><h1>6</h1><p>RFI Follow-ups</p></div>
        <div className="kpi-card"><h1>3 | $2.4K</h1><p>Closed Sales</p></div>
        <div className="kpi-card special-card"><h1>$3.6K</h1><p>Target Remaining</p></div>
      </div>
    </>
  );

  const SettingsContent = () => (
    <div className="workspace">
      <h2>System Settings</h2>
      <div className="settings-grid">
        <div className="setting-card"><h3>Role Management</h3><p>Manage Admin/User permissions.</p></div>
        <div className="setting-card"><h3>Data Rules</h3><p>Configure duplicate detection.</p></div>
        <div className="setting-card"><h3>API Integrations</h3><p>Configure external keys.</p></div>
      </div>
    </div>
  );

  const HelpCenterContent = () => (
    <div className="workspace">
      <h2>Help Center</h2>
      <div className="help-box">
        <h3>Best Routines</h3>
        <ul><li>Always format Excel phone columns as "Text".</li><li>Check the "Conflicts" tab before finalizing uploads.</li></ul>
        <h3>System Rules</h3>
        <p>Your actions are logged for accountability.</p>
      </div>
    </div>
  );

  return (
    <div className="app">
     <aside className="sidebar">
  <div className="logo-area"><img src="/logo.png" alt="Logo" className="logo-img" /></div>
  
  <div className="nav-block">
    {["Dashboard", "Leads", "Follow-ups", "Sales Analysis", "Settings", "Help Center"].map((item) => (
      <div 
        key={item}
        className={`nav-item ${currentView === item ? "nav-item-active" : ""}`}
        onClick={() => setCurrentView(item)}
      >
        {item}
      </div>
    ))}
  </div>

  <div className="profile-section">
    <div className="avatar-wrapper">
      <img src="/your-profile-pic.jpg" alt="Avatar" className="avatar-img" />
      <div className="upload-overlay"><i className="fa-solid fa-pencil"></i></div>
    </div>
    <div className="profile-info">
      <h4>{username}</h4>
      <p>Administrator</p>
    </div>
  </div>

  <div className="logout" onClick={() => setIsLoggedIn(false)}>Logout</div>
</aside>
      <main className="main">
        {currentView === "Dashboard" && <DashboardContent />}
        {currentView === "Settings" && <SettingsContent />}
        {currentView === "Help Center" && <HelpCenterContent />}
      </main>
    </div>
  );
}
