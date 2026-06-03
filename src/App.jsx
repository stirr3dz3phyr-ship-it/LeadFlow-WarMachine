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

  const followUps = [
    {
      business: "BluePeak Interiors",
      contact: "Arjun Mehta",
      note: "Interested in modular kitchen redesign",
      lastNote: "Asked for pricing breakup",
      timeline: "Follow up today",
    },
    {
      business: "Urban Nest Builders",
      contact: "Priya Sharma",
      note: "Requested catalog + portfolio",
      lastNote: "Sent brochure",
      timeline: "Check response in 24 hrs",
    },
    {
      business: "Zenith Constructions",
      contact: "Rahul Jain",
      note: "Looking for bulk interior supply",
      lastNote: "Initial call done",
      timeline: "Revisit in 2 days",
    },
  ];

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">LeadFlow</div>

        <nav className="nav">
          <div className="nav-item active">Dashboard</div>
          <div className="nav-item">Leads</div>
          <div className="nav-item">Follow-ups</div>
          <div className="nav-item">Analytics</div>
          <div className="nav-item">Settings</div>
        </nav>

        <div className="logout">Logout</div>
      </aside>

      {/* MAIN AREA */}
      <main className="main">

        {/* HEADER */}
        <header className="header">
          <h1>Good Morning, {username} 👋</h1>
          <p>Here’s your pipeline overview</p>
        </header>

        {/* KPI STRIP */}
        <section className="kpi-strip">
          {kpis.map((k, i) => (
            <div key={i} className="kpi-card">
              <div className="kpi-value">{k.value}</div>
              <div className="kpi-label">{k.label}</div>
            </div>
          ))}
        </section>

        {/* FOLLOW UPS */}
        <section className="workspace">

          <div className="workspace-title">
            Shall we begin the day by following up on:
          </div>

          <div className="followup-list">
            {followUps.map((f, i) => (
              <div key={i} className="lead-card">

                <div className="lead-top">
                  <div className="biz">{f.business}</div>
                  <div className="contact">{f.contact}</div>
                </div>

                <div className="note">{f.note}</div>

                <div className="meta">
                  <span>{f.lastNote}</span>
                  <span>{f.timeline}</span>
                </div>

                <div className="actions">
                  <button>WhatsApp Message</button>
                  <button>Refresh Memory</button>
                </div>

              </div>
            ))}
          </div>

        </section>

      </main>
    </div>
  );
}
