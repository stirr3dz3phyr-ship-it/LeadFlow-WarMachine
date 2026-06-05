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
        <div className="kpi-card"><h1>9</h1><p>RPCs Re
