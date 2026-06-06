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

  // Save login state persistently
  React.useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const kpis = useMemo(() => ({
    newLeads: leads.filter(l => l.status === 'New Lead').length,
    followUpsToday: leads.filter(l => l.status === 'Follow-up Required').length,
    rpcReached: leads.filter(l => l.rpc !== undefined && l.rpc !== '').length,
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
    if (!newLeadName.trim()) return;
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
        <form onSubmit={handleAddLead} style={{ marginBottom: '20px' }}>
          <input 
            value={newLeadName} 
            onChange={(e) => setNewLeadName(e.target.value)}
            placeholder="Enter new company name..."
          />
          <button type="submit">Add Lead</button>
        </form>

        <div className="dashboard-grid">
          <div className="kpi-row">
            <div className="kpi-card"><h3>New Leads</h3><p>{kpis.newLeads}</p></div>
            <div className="kpi-card"><h3>Follow-ups</h3><p>{kpis.followUpsToday}</p></div>
            <div className="kpi-card"><h3>RPC Reached</h3><p>{kpis.rpcReached}</p></div>
            <div className="kpi-card"><h3>No Response</h3><p>{kpis.noResponse}</p></div>
          </div>
          <div className="kpi-row">
            <div className="kpi-card"><h3>Warm/Hot</h3><p>{kpis.warmHotProspects}</p></div>
            <div className="kpi-card"><h3>Requested Info</h3><p>{kpis.requestedInfo}</p></div>
            <div className="kpi-card"><h3>Closed Sales</h3><p>{kpis.closedSales}</p></div>
            <div className="kpi-card"><h3>Revenue</h3><p>${kpis.totalRevenue.toLocaleString()}</p></div>
          </div>

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
