import React, { useState, useMemo } from 'react';

const initialLeads = [
  { id: 1, company: "BluePeak Interiors", status: "Hot", priority: "Critical", saleValue: 150000, temperature: "Hot", lastContact: "2026-06-04" },
  { id: 2, company: "Urban Nest Builders", status: "Follow-up Required", priority: "High", saleValue: 85000, temperature: "Warm", lastContact: "2026-06-05" },
  { id: 3, company: "Apex Solutions", status: "New Lead", priority: "Medium", saleValue: 0, temperature: "Cold", lastContact: "2026-06-03" }
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [leads, setLeads] = useState(initialLeads);
  const [newLeadName, setNewLeadName] = useState('');

  const kpis = useMemo(() => ({
    newLeads: leads.filter(l => l.status === 'New Lead').length,
    followUpsToday: leads.filter(l => l.status === 'Follow-up Required').length,
    rpcReached: leads.filter(l => l.rpc !== undefined).length,
    noResponse: leads.filter(l => l.status === 'No Response').length,
    warmHotProspects: leads.filter(l => l.temperature === 'Warm' || l.temperature === 'Hot').length,
    requestedInfo: leads.filter(l => l.status === 'Requested Info').length,
    closedSales: leads.filter(l => l.status === 'Closed').length,
    totalRevenue: leads.reduce((sum, l) => sum + (l.saleValue || 0), 0)
  }), [leads]);

  const sortedLeads = useMemo(() => [...leads].sort((a, b) => {
    const priorityWeight = { 'Critical': 1, 'High': 2, 'Medium': 3 };
    return priorityWeight[a.priority] - priorityWeight[b.priority];
  }), [leads]);

  const handleAddLead = (e) => {
    e.preventDefault();
    if (!newLeadName) return;
    const newLead = {
      id: Date.now(),
      company: newLeadName,
      status: 'New Lead',
      priority: 'Medium',
      saleValue: 0,
      temperature: 'Cold',
      lastContact: new Date().toISOString().split('T')[0]
    };
    setLeads([...leads, newLead]);
    setNewLeadName('');
  };

  if (!isLoggedIn) {
    return (
      <div className="login-screen">
        <h2>War Machine Access</h2>
        <button onClick={() => setIsLoggedIn(true)}>Authorize Login</button>
      </div>
    );
  }

  return (
    <div className="app-container">
      <nav className="sidebar">
        <h3>War Machine</h3>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </nav>
      <main className="content">
        {/* ADD LEAD FORM */}
        <form onSubmit={handleAddLead} style={{ marginBottom: '20px' }}>
          <input 
            value={newLeadName} 
            onChange={(e) => setNewLeadName(e.target.value)}
            placeholder="Enter new company name..."
          />
          <button type="submit">Add Lead</button>
        </form>

        <div className="dashboard-grid">
          {/* ... Your existing KPI rows ... */}
          <div className="leads-list">
            {sortedLeads.map(lead => (
              <div key={lead.id} className="lead-card">
                <h4>{lead.company}</h4>
                <p>Status: {lead.status} | Priority: {lead.priority} | Last Contact: {lead.lastContact}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
