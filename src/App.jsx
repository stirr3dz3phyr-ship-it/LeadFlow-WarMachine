import { useState } from "react";
import "./styles.css";
import logo from "../logo.png";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [newLead, setNewLead] = useState("");

  const [leads, setLeads] = useState([
    { id: 1, name: "Raj Interiors", status: "new" },
    { id: 2, name: "Metro Kitchens", status: "contacted" },
    { id: 3, name: "WoodCraft Co", status: "qualified" },
    { id: 4, name: "Prime Spaces", status: "new" }
  ]);

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

  const moveLead = (id, newStatus) => {
    setLeads(
      leads.map((lead) =>
        lead.id === id
          ? { ...lead, status: newStatus }
          : lead
      )
    );
  };

  const renderColumn = (status, title) => (
    <div className="column">
      <div className="column-header">
        <h3>{title}</h3>

        <span>
          {leads.filter((l) => l.status === status).length}
        </span>
      </div>

      {leads
        .filter((l) => l.status === status)
        .map((l) => (
          <div key={l.id} className="lead-card">
            <div className="lead-name">
              {l.name}
            </div>

            <div className="lead-actions">

              {status !== "new" && (
                <button
                  onClick={() =>
                    moveLead(l.id, "new")
                  }
                >
                  New
                </button>
              )}

              {status !== "contacted" && (
                <button
                  onClick={() =>
                    moveLead(
                      l.id,
                      "contacted"
                    )
                  }
                >
                  Contacted
                </button>
              )}

              {status !== "qualified" && (
                <button
                  onClick={() =>
                    moveLead(
                      l.id,
                      "qualified"
                    )
                  }
                >
                  Qualified
                </button>
              )}

              {status !== "sales" && (
                <button
                  onClick={() =>
                    moveLead(
                      l.id,
                      "sales"
                    )
                  }
                >
                  Sales
                </button>
              )}

            </div>
          </div>
        ))}
    </div>
  );

  const priorityLeads = leads.slice(0, 3);

  return (
    <div className="app">
      {!loggedIn ? (
        <div className="login-screen">
          <div className="login-card">

            <h1>LeadFlow</h1>

            <p className="subtitle">
              War Room Access
            </p>

            <input
              type="email"
              placeholder="Email"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button
              onClick={() =>
                setLoggedIn(true)
              }
            >
              Enter War Room
            </button>

          </div>
        </div>
      ) : (
        <div className="dashboard-layout">

          {/* Sidebar */}
          <aside className="sidebar">

            <div className="logo-area">
              <img
                src={logo}
                alt="LeadFlow"
                style={{
                  width: "170px",
                  objectFit: "contain",
                  marginBottom: "20px"
                }}
              />
            </div>

            <nav>
              <button>Dashboard</button>
              <button>Pipeline</button>
              <button>Leads</button>
              <button>Reports</button>
              <button>Settings</button>
            </nav>

            <button
              className="logout-btn"
              onClick={() =>
                setLoggedIn(false)
              }
            >
              Logout
            </button>

          </aside>

          {/* Main Content */}
          <main className="main-content">

            <div className="top-bar">

              <div>
                <h1>
                  War Room Control Center
                </h1>

                <p className="subtitle">
                  Shall we begin the day?
                </p>
              </div>

              <div className="add-lead">
                <input
                  value={newLead}
                  onChange={(e) =>
                    setNewLead(
                      e.target.value
                    )
                  }
                  placeholder="Enter new lead..."
                />

                <button
                  onClick={addLead}
                >
                  + Add Lead
                </button>
              </div>

            </div>

            {/* KPI Cards */}
            <div className="stats-grid">

              <div className="stat-card">
                <h3>Total Leads</h3>
                <p>{leads.length}</p>
              </div>

              <div className="stat-card">
                <h3>Hot Leads</h3>
                <p>
                  {
                    leads.filter(
                      (l) =>
                        l.status ===
                        "qualified"
                    ).length
                  }
                </p>
              </div>

              <div className="stat-card">
                <h3>Follow-ups</h3>
                <p>{priorityLeads.length}</p>
              </div>

              <div className="stat-card">
                <h3>Sales</h3>
                <p>
                  {
                    leads.filter(
                      (l) =>
                        l.status ===
                        "sales"
                    ).length
                  }
                </p>
              </div>

            </div>

            {/* Start Your Day */}
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "16px",
                marginTop: "18px",
                marginBottom: "18px"
              }}
            >
              <h3>
                Shall we begin the
                day by following up
                on:
              </h3>

              {priorityLeads.map(
                (lead) => (
                  <p key={lead.id}>
                    • {lead.name}
                  </p>
                )
              )}
            </div>

            {/* Pipeline */}
            <div className="pipeline">
              {renderColumn("new", "New")}
              {renderColumn(
                "contacted",
                "Contacted"
              )}
              {renderColumn(
                "qualified",
                "Qualified"
              )}
              {renderColumn(
                "sales",
                "Sales"
              )}
            </div>

          </main>
        </div>
      )}
    </div>
  );
}
