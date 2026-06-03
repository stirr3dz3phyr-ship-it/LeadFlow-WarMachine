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

</main>

    </div>
  );
}
