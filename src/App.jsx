import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const username = "Ragz";

  // LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div className="login-page">

        {/* LEFT SIDE */}
        <div className="login-left">
          <div className="login-overlay">
            <div className="login-hero">
              <h1>LeadFlow War Machine</h1>
              <p>Command Center for Strategic Growth</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <div className="login-box">

            <img
              src="/logo.png"
              alt="LeadFlow Logo"
              className="login-logo"
            />

            <h2>Welcome Back</h2>

            <input
              type="text"
              placeholder="Username"
              className="login-input"
            />

            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />

            <button
              className="user-login-btn"
              onClick={() => setIsLoggedIn(true)}
            >
              User Login
            </button>

            <button
              className="admin-login-btn"
              onClick={() => setIsLoggedIn(true)}
            >
              Admin Login
            </button>

          </div>
        </div>
      </div>
    );
  }

  // DASHBOARD
  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo-area">
          <img src="/logo.png" alt="LeadFlow Logo" className="logo-img" />
        </div>

        <div className="nav-block">
          <div className="nav-item">Dashboard</div>
          <div className="nav-item">Leads</div>
          <div className="nav-item">Follow-ups</div>
          <div className="nav-item">Sales Analysis</div>
          <div className="nav-item">Settings</div>
        </div>

        {/* LOGOUT BUTTON */}
        <div
          className="logout"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">
        <h1>Good Morning {username} 👋</h1>

        {/* TOP KPI ROW */}
        <div className="kpi-row">
          <div className="kpi-card"><h1>47</h1><p>New Leads - Untouched</p></div>
          <div className="kpi-card"><h1>16</h1><p>Follow-ups Today</p></div>
          <div className="kpi-card"><h1>9</h1><p>RPCs Reached</p></div>
          <div className="kpi-card"><h1>13</h1><p>Unreachable / RNR Leads</p></div>
        </div>

        {/* WORKSPACE */}
        <div className="workspace">
          <h3>Shall we begin the day by following up on:</h3>

          <div className="followup-list">
            <div className="lead-card">
              <div className="lead-top">
                <span>BluePeak Interiors</span>
                <span>RPC: Arjun Mehta</span>
              </div>

              <div
                className="lead-bottom"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span>
                  Last Contact: 2 Days Ago | Status: Interested |
                  Priority: Warm
                </span>

                <div className="lead-actions">
                  <i className="fa-brands fa-whatsapp icon-action"></i>
                  <i className="fa-solid fa-phone icon-action"></i>
                  <i className="fa-solid fa-envelope icon-action"></i>
                  <i className="fa-solid fa-clock icon-action"></i>
                </div>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-top">
                <span>Urban Nest Builders</span>
                <span>RPC: Priya Sharma</span>
              </div>

              <div
                className="lead-bottom"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span>
                  Last Contact: 1 Day Ago | Status: Follow-up |
                  Priority: Hot
                </span>

                <div className="lead-actions">
                  <i className="fa-brands fa-whatsapp icon-action"></i>
                  <i className="fa-solid fa-phone icon-action"></i>
                  <i className="fa-solid fa-envelope icon-action"></i>
                  <i className="fa-solid fa-clock icon-action"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM KPI */}
        <div className="kpi-row">
          <div className="kpi-card"><h1>12</h1><p>Warm / Hot Prospects</p></div>
          <div className="kpi-card"><h1>6</h1><p>RFI Follow-ups</p></div>
          <div className="kpi-card"><h1>3 | $2.4K</h1><p>Closed Sales</p></div>
          <div className="kpi-card special-card"><h1>$3.6K</h1><p>Target Remaining</p></div>
        </div>
      </main>
    </div>
  );
}
