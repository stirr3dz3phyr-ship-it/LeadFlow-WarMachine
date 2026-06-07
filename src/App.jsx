import React, { useState, useMemo, useEffect } from 'react';
import './styles.css';

const initialLeads = [
  { id: 1, company: "BluePeak Interiors", status: "Hot" },
  { id: 2, company: "Urban Nest Builders", status: "Follow-up Required" },
  { id: 3, company: "Apex Solutions", status: "New Lead" }
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [leads, setLeads] = useState(initialLeads);
  const [newLeadName, setNewLeadName] = useState('');

  const handleAddLead = (e) => {
    e.preventDefault();
    if (!newLeadName.trim()) return;
    setLeads([...leads, { id: Date.now(), company: newLeadName, status: 'New Lead' }]);
    setNewLeadName('');
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <h3>War Machine</h3>
        <div className="nav-block">
          <div className="nav-item nav-item-active">Dashboard</div>
          <div className="nav-item">Settings</div>
          <div className="nav-item">Help Center</div>
        </div>
        <div className="logout" onClick={() => setIsLoggedIn(false)}>Logout</div>
      </aside>

      <main className="main">
        <h1>Good Morning Ragz 👋</h1>
        
        <div className="kpi-row">
          <div className="kpi-card"><h1>1</h1><p>New Leads</p></div>
          <div className="kpi-card"><h1>1</h1><p>Follow-ups</p></div>
          <div className="kpi-card"><h1>$235,000</h1><p>Revenue</p></div>
        </div>

        <div className="workspace">
          <form onSubmit={handleAddLead} style={{ display: 'flex', gap: '10px' }}>
            <input value={newLeadName} onChange={(e) => setNewLeadName(e.target.value)} placeholder="New Company Name..." />
            <button type="submit">Add Lead</button>
          </form>
        </div>

        <div className="followup-list">
          {leads.map(lead => (
            <div key={lead.id} className="lead-card">
              <div className="lead-top">
                <span>{lead.company}</span>
                <span>{lead.status}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
