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

  <h1>Good Morning 👋</h1>

  {/* TOP KPI ROW */}
  <div className="kpi-row">
    <div className="kpi-card">128<br/>Total Leads</div>
    <div className="kpi-card">14<br/>Hot Leads</div>
    <div className="kpi-card">32<br/>Follow-ups</div>
    <div className="kpi-card">9<br/>Sales</div>
  </div>

  {/* FOLLOW-UP LIST (REAL COMPONENT) */}
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

  {/* BOTTOM KPI ROW */}
  <div className="kpi-row">
    <div className="kpi-card">Stage 1</div>
    <div className="kpi-card">Stage 2</div>
    <div className="kpi-card">Stage 3</div>
    <div className="kpi-card">Stage 4</div>
  </div>

</main>
    </div>
  );
}
