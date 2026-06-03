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
       <div className="kpi-grid">

  {/* TOP ROW */}
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

  {/* BOTTOM ROW */}
  <div className="kpi-card">
    <h2>Stage 1</h2>
    <p>Awareness</p>
  </div>

  <div className="kpi-card">
    <h2>Stage 2</h2>
    <p>Interest</p>
  </div>

  <div className="kpi-card">
    <h2>Stage 3</h2>
    <p>Negotiation</p>
  </div>

  <div className="kpi-card">
    <h2>Stage 4</h2>
    <p>Closed</p>
  </div>

</div>

    </main>

    </div>
  );
}
