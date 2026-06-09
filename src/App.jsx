import React, { useState } from "react";
import "./styles.css";

// Importing the modular components
import Sidebar from "./components/Sidebar";
import KPIGrid from "./components/KPIGrid";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState("Dashboard");
  const username = "Ragz";

  // Data constants
  const kpiData = [
    { value: "47", label: "New Leads - Untouched" },
    { value: "16", label: "Follow-ups Today" },
    { value: "9", label: "RPCs Reached" },
    { value: "13", label: "Unreachable / RNR Leads" }
  ];

  const leadsData = [
    { name: "BluePeak Interiors", rpc: "RPC: Arjun Mehta", info: "Last Contact: 2 Days Ago | Status: Interested | Priority: Warm" },
    { name: "Urban Nest Builders", rpc: "RPC: Priya Sharma", info: "Last Contact: 1 Day Ago | Status: Follow-up | Priority: Hot" }
  ];

  // --- LOGIN VIEW ---
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

  // --- MAIN APP VIEWS ---
  return (
    <div className="app">
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        setIsLoggedIn={setIsLoggedIn} 
        username={username} 
      />
      
      <main className="main">
        {currentView === "Dashboard" && (
          <>
            <h1>Good Morning {username} 👋</h1>
            <KPIGrid kpis={kpiData} />
            <LeadForm />
            <LeadList leads={leadsData} />
            <KPIGrid kpis={[
              { value: "12", label: "Warm / Hot Prospects" },
              { value: "6", label: "RFI Follow-ups" },
              { value: "3 | $2.4K", label: "Closed Sales" },
              { value: "$3.6K", label: "Target Remaining", special: true }
            ]} />
          </>
        )}

        {currentView === "Settings" && (
          <div className="workspace">
            <h2>System Settings</h2>
            <div className="settings-grid">
              <div className="setting-card"><h3>Role Management</h3><p>Manage Admin/User permissions.</p></div>
              <div className="setting-card"><h3>Data Rules</h3><p>Configure duplicate detection.</p></div>
              <div className="setting-card"><h3>API Integrations</h3><p>Configure external keys.</p></div>
            </div>
          </div>
        )}

        {currentView === "Help Center" && (
          <div className="workspace">
            <h2>Help Center</h2>
            <div className="help-box">
              <h3>Best Routines</h3>
              <ul><li>Always format Excel phone columns as "Text".</li><li>Check the "Conflicts" tab before finalizing uploads.</li></ul>
              <h3>System Rules</h3>
              <p>Your actions are logged for accountability.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
