import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [view, setView] = useState("dashboard");
  const [selectedLead, setSelectedLead] = useState(null);

  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Raj Interiors",
      phone: "9876543210",
      email: "raj@demo.com",
      status: "Hot",
      score: 9,
      nextAction: "Call today",
      notes: "Wants modular kitchen quote"
    },
    {
      id: 2,
      name: "Metro Kitchens",
      phone: "9123456780",
      email: "metro@demo.com",
      status: "Follow-up",
      score: 10,
      nextAction: "Send quote",
      notes: "High intent lead"
    }
  ]);

  const hotLeads = leads.filter(
    (l) => l.status === "Hot" || l.score >= 9
  );

  if (!loggedIn) {
    return (
      <div className="center">
        <div className="card">
          <h1>LeadFlow</h1>
          <input placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={() => setLoggedIn(true)}>Login</button>
        </div>
      </div>
    );
  }

  function Dashboard() {
    return (
      <div className="page">
        <h2>Dashboard</h2>

        <div className="grid">
          <div className="box">
            <h3>🔥 Hot Leads</h3>
            {hotLeads.map((l) => (
              <div key={l.id}>
                {l.name} • {l.score}
              </div>
            ))}
          </div>

          <div className="box">
            <h3>📅 Today</h3>
            {leads.map((l) => (
              <div key={l.id}>
                {l.nextAction} — {l.name}
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => setView("leads")}>
          View Leads
        </button>
      </div>
    );
  }

  function Leads() {
    return (
      <div className="page">
        <h2>All Leads</h2>

        {leads.map((l) => (
          <div
            key={l.id}
            className="row"
            onClick={() => {
              setSelectedLead(l);
              setView("detail");
            }}
          >
            {l.name} — {l.status} — {l.score}
          </div>
        ))}
      </div>
    );
  }

  function Detail() {
    if (!selectedLead) return null;

    return (
      <div className="page">
        <h2>{selectedLead.name}</h2>
        <p>{selectedLead.notes}</p>
        <p>{selectedLead.phone}</p>

        <button onClick={() => setView("leads")}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <nav className="nav">
        <button onClick={() => setView("dashboard")}>
          Dashboard
        </button>
        <button onClick={() => setView("leads")}>
          Leads
        </button>
      </nav>

      {view === "dashboard" && <Dashboard />}
      {view === "leads" && <Leads />}
      {view === "detail" && <Detail />}
    </div>
  );
}