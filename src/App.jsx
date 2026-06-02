import React from "react";
import "./styles.jsx";

export default function App() {
  const actions = [
    { icon: "📞", label: "Call pending RPCs", tone: "danger" },
    { icon: "🔥", label: "Hot leads today", tone: "hot" },
    { icon: "⏳", label: "Overdue follow-ups", tone: "warning" },
    { icon: "🧠", label: "Next best action", tone: "info" },
    { icon: "📊", label: "Conversion pulse", tone: "neutral" },
  ];

  return (
    <div className="app">
      <div className="container">

        <header className="topbar">
          <div>
            <h1>LeadFlow</h1>
            <p>Pipeline command center</p>
          </div>

          <div className="chip">Live</div>
        </header>

        <section className="hero">
          <h2>Good morning, Lead Hunter 👋</h2>
          <p>Here’s what actually matters right now.</p>
        </section>

        <section className="panel">
          <div className="panel-title">Start the Day With</div>

          <div className="grid">
            {actions.map((a, i) => (
              <div key={i} className={`tile ${a.tone}`}>
                <div className="icon">{a.icon}</div>
                <div className="label">{a.label}</div>
                <div className="glow" />
              </div>
            ))}
          </div>
        </section>

        <section className="panel soft">
          <div className="panel-title">System Feed</div>
          <p className="muted">Waiting for lead activity...</p>
        </section>

      </div>
    </div>
  );
}
