import React from "react";
import "./styles.jsx";

export default function App() {
  const actions = [
    { icon: "📞", label: "Call pending RPCs" },
    { icon: "🔥", label: "Hot leads today" },
    { icon: "⏳", label: "Overdue follow-ups" },
    { icon: "🧠", label: "Next best action" },
    { icon: "📊", label: "Conversion pulse" },
  ];

  return (
    <div className="app">
      <div className="container">

        {/* Header */}
        <div className="header">
          <h1>LeadFlow</h1>
          <p className="subtext">Control center for your pipeline</p>
        </div>

        {/* Start the Day With */}
        <div className="card">
          <div className="card-title">
            Start the Day With
          </div>

          <div className="greeting">
            Good morning, Lead Hunter 👋
          </div>

          <div className="action-grid">
            {actions.map((a, i) => (
              <div key={i} className="action-card">
                <div className="icon">{a.icon}</div>
                <div className="label">{a.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder section */}
        <div className="card muted">
          More modules coming here...
        </div>

      </div>
    </div>
  );
}
