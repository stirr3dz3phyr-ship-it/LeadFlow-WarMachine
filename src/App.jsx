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
  ];

  return (
    <div className="app">
      <div className="container">

        <header className="header">
          <h1>Good Morning, {username} 👋</h1>
          <p className="subtext">Here’s your pipeline for today</p>
        </header>

        {/* KPIs */}
        <section className="kpi-grid">
          {kpis.map((k, i) => (
            <div key={i} className="kpi-card">
              <div className="kpi-value">{k.value}</div>
              <div className="kpi-label">{k.label}</div>
            </div>
          ))}
        </section>

        {/* FOLLOW UPS */}
        <section className="panel">
          <div className="panel-title">
            Shall we begin the day by following up on:
          </div>

          <div className="followup-list">
            {followUps.map((f, i) => (
              <div key={i} className="followup-card">

                <div className="row">
                  <div className="business">{f.business}</div>
                  <div className="contact">{f.contact}</div>
                </div>

                <div className="note">{f.note}</div>

                <div className="meta">
                  <div>{f.lastNote}</div>
                  <div>{f.timeline}</div>
                </div>

                <div className="actions">
                  <button>WhatsApp Message</button>
                  <button>Refresh Memory</button>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
