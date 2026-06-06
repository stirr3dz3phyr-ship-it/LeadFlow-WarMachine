import React, { useState, useMemo, useEffect } from 'react';
import './styles.css';

const initialLeads = [
  { id: 1, company: "BluePeak Interiors", status: "Hot", priority: "Critical", saleValue: 150000, temperature: "Hot", lastContact: "2026-06-04" },
  { id: 2, company: "Urban Nest Builders", status: "Follow-up Required", priority: "High", saleValue: 85000, temperature: "Warm", lastContact: "2026-06-05" },
  { id: 3, company: "Apex Solutions", status: "New Lead", priority: "Medium", saleValue: 0, temperature: "Cold", lastContact: "2026-06-03" }
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [currentView, setCurrentView] = useState("Dashboard");
  const [leads, setLeads] = useState(initialLeads);
  const [newLeadName, setNewLeadName] = useState('');

  useEffect(() => { localStorage.setItem('isLoggedIn', isLoggedIn); }, [isLoggedIn]);

  const kpis = useMemo(() => ({
    newLeads: leads.filter(l => l.status === 'New Lead').length,
    followUpsToday: leads.filter(l => l.status === 'Follow-up Required').length,
    totalRevenue: leads.reduce((sum, l) => sum + (l.saleValue || 0), 0)
  }), [leads]);

  const handleAddLead = (e) => {
    e.preventDefault();
    if (!newLeadName.trim()) return;
    setLeads([...leads, { id: Date.now(), company: newLeadName, status: 'New Lead', priority: 'Medium', lastContact: new Date().toISOString().split('T')[0] }]);
    setNewLeadName('');
  };

  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-left"><div className="login-overlay"><div className="login-hero"><h1>LeadFlow War Machine</h1><p>Command Center for Strategic Growth</p></div></div></div>
        <div className="login-right">
          <div className="login-box">
            <h2>Welcome Back</h2>
            <button className="admin-login-btn" onClick={() => setIsLoggedIn(true)}>Authorize Login</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="nav-block">
          {["Dashboard", "Settings", "Help Center"].map((item) => (
            <div key={item} className={`nav-item ${currentView === item ? "nav-item-active" : ""}`} onClick={() => setCurrentView(item)}>{item}</div>
          ))}
        </div>
        <div className="logout" onClick={() => setIsLoggedIn(false)}>Logout</div>
      </aside>

      <main className="main">
        {currentView === "Dashboard" && (
          <>
            <h1>Good Morning 👋</h1>
            <div className="kpi-row">
              <div className="kpi-card"><h1>{kpis.newLeads}</h1><p>New Leads</p></div>
              <div className="kpi-card"><h1>{kpis.followUpsToday}</h1><p>Follow-ups</p></div>
              <div className="kpi-card"><h1>${kpis.totalRevenue.toLocaleString()}</h1><p>Revenue</p></div>
            </div>
            
            <form onSubmit={handleAddLead} className="workspace">
              <input value={newLeadName} onChange={(e) => setNewLeadName(e.target.value)} placeholder="New Company Name..." />
              <button type="submit">Add Lead</button>
            </form>

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
