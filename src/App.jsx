import React from "react";
import "./styles.css";

export default function App() {
  const username = "Ragz";

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
          <div className="nav-item">Settings</div>
        </div>

        <div className="logout">
          Logout
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="main">

        <h1>Good Morning, {username} 👋</h1>

        {/* KPI GRID */}
        <div className="kpi-strip">

          <div className="kpi-card">
            <h2>128</h2>
            <p>Total Leads</p>
          </div>

          <div className="kpi-card">
            <h2>14</h2>
            <p>Hot Leads</p>
          </div>

          <div className="kpi-card">
            <h2>32</h2>
            <p>Follow-ups</p>
          </div>

          <div className="kpi-card">
            <h2>9</h2>
            <p>Sales</p>
          </div>

        </div>

        {/* SPACER ZONE (RESERVED FOR GREEN BOX LATER) */}
        <div className="spacer"></div>

        {/* FOLLOW-UP WORKSPACE (TEMPORARY STRUCTURE) */}
        <div className="workspace">

          <h3>Shall we begin the day by following up on:</h3>

          <div className="followup-list">

            <div className="lead-card">
              BluePeak Interiors — Arjun Mehta
            </div>

            <div className="lead-card">
              Urban Nest Builders — Priya Sharma
            </div>

            <div className="lead-card">
              Zenith Constructions — Rahul Jain
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
