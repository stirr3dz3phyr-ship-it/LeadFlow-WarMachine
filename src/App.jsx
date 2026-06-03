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
        <p>Pipeline overview will come here</p>
      </main>

    </div>
  );
}
