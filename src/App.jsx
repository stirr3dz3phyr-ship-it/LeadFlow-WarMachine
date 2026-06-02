import React from "react";
import "./styles.css";

export default function App() {
  const username = "Ragz";

  const kpis = [
    { label: "Total Leads", value: 128 },
    { label: "Hot Leads", value: 14 },
    { label: "Follow-ups", value: 32 },
    { label: "Sales", value: 9 },
  ];

  return (
    <div className="app">

      <aside className="sidebar">
        <div className="logo">LeadFlow</div>

        <div className="nav">
          <div>Dashboard</div>
          <div>Leads</div>
          <div>Follow-ups</div>
          <div>Analytics</div>
          <div>Settings</div>
        </div>

        <div className="logout">Logout</div>
      </aside>

      <main className="main">

        {/* BIG HERO */}
        <div className="hero">
          <div className="hero-title">Good Morning, {username}</div>
          <div className="hero-sub">Pipeline overview refreshed</div>
        </div>

        {/* KPI ROW (VERY DISTINCT VISUAL BLOCK) */}
        <div className="kpi-row">
          {kpis.map((k, i) => (
            <div key={i} className="kpi-box">
              <div className="kpi-num">{k.value}</div>
              <div className="kpi-text">{k.label}</div>
            </div>
          ))}
        </div>

        {/* FOLLOW UPS */}
        <div className="section-title">
          Shall we begin the day by following up on:
        </div>

        <div className="card">
          <div className="row">
            <div>BluePeak Interiors</div>
            <div>Arjun Mehta</div>
          </div>

          <div className="note">Interested in modular kitchen redesign</div>

          <div className="meta">
            <div>Last: Asked for pricing breakup</div>
            <div>Today</div>
          </div>

          <div className="actions">
            <button>WhatsApp</button>
            <button>Refresh Memory</button>
          </div>
        </div>

      </main>
    </div>
  );
}
