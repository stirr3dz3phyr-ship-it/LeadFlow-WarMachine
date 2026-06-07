import React, { useState, useMemo, useEffect } from 'react';
import './styles.css';

const initialLeads = [
  { id: 1, company: "BluePeak Interiors", status: "Hot", priority: "Critical", saleValue: 150000 },
  { id: 2, company: "Urban Nest Builders", status: "Follow-up Required", priority: "High", saleValue: 85000 },
  { id: 3, company: "Apex Solutions", status: "New Lead", priority: "Medium", saleValue: 0 }
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [currentView, setCurrentView] = useState("Dashboard");
  const [leads, setLeads] = useState(initialLeads);
  const [newLeadName, setNewLeadName] = useState('');
  const username = "Ragz";

  useEffect(() => { localStorage.setItem('isLoggedIn', isLoggedIn); }, [isLoggedIn]);

  const kpis = useMemo(() => ({
    newLeads: leads.filter(l => l.status === 'New Lead').length,
    followUpsToday: leads.filter(l => l.status === 'Follow-up Required').length,
    totalRevenue: leads.reduce((sum, l) => sum + (l.saleValue || 0), 0)
  }), [leads]);

  const handleAddLead = (e) => {
    e.preventDefault();
    if (!newLeadName.trim()) return;
    setLeads([...leads, { id: Date.now(), company: newLeadName, status: 'New Lead', priority: 'Medium', saleValue: 0 }]);
    setNewLeadName('');
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo-area"><h3>War Machine</h3></div>
        <div className="nav-block">
          {["Dashboard", "Settings", "Help Center"].map((item) => (
            <div key={item} className={`nav-item ${currentView === item ? "nav-item-active" : ""}`} onClick={() => setCurrentView(item)}>{item}</div>
          ))}
        </div>
        <div className="profile-section">
          <h4>{username}</h4>
          <p>Administrator</p>
        </div>
        <div className="logout" onClick={() => setIsLoggedIn(false)}>Logout</div>
      </aside>

      <main className="main">
        {currentView === "Dashboard" && (
          <>
            <h1>Good Morning {username} 👋</h1>
            <div className="kpi-row">
              <div className="kpi-card"><h1>{kpis.newLeads}</h1><p>New Leads</p></div>
              <div className="kpi-card"><h1>{kpis.followUpsToday}</h1><p>Follow-ups</p></div>
              <div className="kpi-card"><h1>${kpis.totalRevenue.toLocaleString()}</h1><p>Revenue</p></div>
            </div>
            
            <div className="workspace">
              <form onSubmit={handleAddLead}>
                <input value={newLeadName} onChange={(e) => setNewLeadName(e.target.value)} placeholder="New Company Name..." />
                <button type="submit">Add Lead</button>
              </form>
            </div>

            <div className="followup-list">
              {leads.map(lead => (
                <div key={lead.id} className="lead-card">
                  <div className="lead-top"><span>{lead.company}</span><span>{lead.status}</span></div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
