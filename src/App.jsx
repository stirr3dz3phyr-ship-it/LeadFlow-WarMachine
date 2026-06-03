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

    </div>
  );
}
