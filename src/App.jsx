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
{/* FOLLOW UPS TEST */}
<div className="workspace">

  <h3>Follow-up Test</h3>

  <div className="followup-list">

    <div className="lead-card" style={{ background: "white", padding: 20, border: "2px solid red" }}>
      <h4>TEST COMPANY</h4>
      <p>TEST CONTACT</p>
      <p>IF YOU SEE THIS, FOLLOW UPS WORK</p>
    </div>

  </div>

</div>

    </div>
  );
}
