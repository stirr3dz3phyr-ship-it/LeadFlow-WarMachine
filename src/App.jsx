import { useState } from "react";
import "./styles.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [leads, setLeads] = useState([]);
  const [newLead, setNewLead] = useState("");

  const stages = ["new", "contacted", "qualified", "closed"];

  const addLead = () => {
    if (!newLead.trim()) return;

    setLeads([
      {
        id: Date.now(),
        name: newLead,
        status: "new"
      },
      ...leads
    ]);

    setNewLead("");
  };

  const moveLead = (id) => {
    setLeads(leads.map(lead => {
      if (lead.id !== id) return lead;

      const currentIndex = stages.indexOf(lead.status);
      const nextIndex = (currentIndex + 1) % stages.length;

      return { ...lead, status: stages[nextIndex] };
    }));
  };

  const renderColumn = (status, title) => (
    <div className="column">
      <h3>{title}</h3>

      {leads
        .filter(l => l.status === status)
        .map(l => (
          <div
            key={l.id}
            className="lead-card"
            onClick={() => moveLead(l.id)}
          >
            {l.name}
          </div>
        ))}
    </div>
  );

  return (
    <div className="app">
      {!loggedIn ? (
        <div className="login-card">
          <h1>LeadFlow</h1>
          <p className="subtitle">Sign in to enter War Room</p>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button onClick={() => setLoggedIn(true)}>
            Login
          </button>
        </div>
      ) : (
        <div className="dashboard">
          <h1>War Room Control Center</h1>

          <div className="add-lead">
            <input
              value={newLead}
              onChange={(e) => setNewLead(e.target.value)}
              placeholder="Company name"
            />
            <button onClick={addLead}>+ Add Lead</button>
          </div>

          <div className="pipeline">
            {renderColumn("new", "New")}
            {renderColumn("contacted", "Contacted")}
            {renderColumn("qualified", "Qualified")}
            {renderColumn("closed", "Won / Lost")}
          </div>

          <button onClick={() => setLoggedIn(false)}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
