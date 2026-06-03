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
  <p>Pipeline overview</p>

  {/* KPI */}
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

  {/* FOLLOW UPS */}
  <div className="workspace">

    <h3>Shall we begin the day by following up on:</h3>

    <div className="followup-list">

      <div className="lead-card">
        <h4>BluePeak Interiors</h4>
        <p>Arjun Mehta</p>
        <p>Interested in modular kitchen redesign</p>
      </div>

      <div className="lead-card">
        <h4>Urban Nest Builders</h4>
        <p>Priya Sharma</p>
        <p>Requested catalog + pricing</p>
      </div>

      <div className="lead-card">
        <h4>Zenith Constructions</h4>
        <p>Rahul Jain</p>
        <p>Bulk interior supply discussion</p>
      </div>

    </div>

  </div>

</main>

    </div>
  );
}
