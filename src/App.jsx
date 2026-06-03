import React from "react";
import "./styles.css";

export default function App() {
  const username = "Ragz";

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">LeadFlow</div>

        <div className="nav">
          <div className="nav-item">Dashboard</div>
          <div className="nav-item">Leads</div>
          <div className="nav-item">Follow-ups</div>
        </div>

        <div className="logout">Logout</div>
      </aside>

      {/* MAIN */}
      <main className="main">

        <h1>Good Morning, {username} 👋</h1>

        <div className="kpi-strip">
          <div className="kpi-card">Total Leads</div>
          <div className="kpi-card">Hot Leads</div>
          <div className="kpi-card">Follow-ups</div>
          <div className="kpi-card">Sales</div>
        </div>

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
