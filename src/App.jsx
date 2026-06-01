import { useState } from "react";
import "./styles.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [leads, setLeads] = useState([]);
  const [newLead, setNewLead] = useState("");

  const addLead = () => {
    if (!newLead.trim()) return;

    setLeads([
      { name: newLead, status: "new" },
      ...leads,
    ]);

    setNewLead("");
  };

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

          {/* ADD LEAD SECTION */}
          <div className="add-lead">
            <input
              value={newLead}
              onChange={(e) => setNewLead(e.target.value)}
              placeholder="Add lead..."
            />
            <button onClick={addLead}>
              + Add Lead
            </button>
          </div>

          {/* PIPELINE */}
          <div className="pipeline">

            <div className="column">
              <h3>New</h3>
              {leads
                .filter(l => l.status === "new")
                .map((l, i) => (
                  <div key={i} className="lead-card">
                    {l.name}
                  </div>
                ))}
            </div>

            <div className="column">
              <h3>Contacted</h3>
            </div>

            <div className="column">
              <h3>Qualified</h3>
            </div>

            <div className="column">
              <h3>Won / Lost</h3>
            </div>

          </div>

          <button onClick={() => setLoggedIn(false)}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
