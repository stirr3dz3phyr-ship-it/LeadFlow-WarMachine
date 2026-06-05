import React, { useState, useMemo } from 'react';

// CP6 LEAD ENGINE DATA STRUCTURE
const initialLeads = [
  { id: 1, company: "BluePeak Interiors", rpc: "John Doe", status: "Hot", priority: "Critical", saleValue: 150000, nextFollowUp: "2026-06-06" },
  { id: 2, company: "Urban Nest Builders", rpc: "Jane Smith", status: "Follow-up Required", priority: "High", saleValue: 85000, nextFollowUp: "2026-06-05" },
  { id: 3, company: "Apex Solutions", rpc: "Mark Lee", status: "New Lead", priority: "Medium", saleValue: 0, nextFollowUp: "2026-06-07" }
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentView, setCurrentView] = useState('Dashboard');
  const [leads] = useState(initialLeads);

  // Sorting Logic: Priority to Follow-up Required & Critical Leads
  const sortedLeads = useMemo(() => {
    return [...leads].sort((a, b) => {
      const priorityWeight = { 'Critical': 1, 'High': 2, 'Medium': 3 };
      return priorityWeight[a.priority] - priorityWeight[b.priority];
    });
  }, [leads]);
  // KPI Calculation Engine
  const kpis = useMemo(() => {
    return {
      newLeads: leads.filter(l => l.status === 'New Lead').length,
      followUpsToday: leads.filter(l => l.status === 'Follow-up Required').length,
     hotProspects: leads.filter(l => l.status === 'Hot').length,
      totalRevenue: leads.reduce((sum, l) => sum + l.saleValue, 0)
    };
  }, [leads]);

  // View Controller
  const renderView = () => {
    switch (currentView) {
      case 'Dashboard':
        return (
          <div className="dashboard-grid">
            <div className="kpi-container">
              <div className="kpi-card"><h3>New Leads</h3><p>{kpis.newLeads}</p></div>
              <div className="kpi-card"><h3>Follow-ups</h3><p>{kpis.followUpsToday}</p></div>
              <div className="kpi-card"><h3>Hot Prospects</h3><p>{kpis.hotProspects}</p></div>
            </div>
            <div className="leads-list">
              {sortedLeads.map(lead => (
                <div key={lead.id} className="lead-card">
                  <h4>{lead.company}</h4>
                  <p>Status: {lead.status} | Priority: {lead.priority}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <div>{currentView} Content</div>;
    }
  };

return (
    <div className="app-container">
      <nav className="sidebar">
        <button onClick={() => setCurrentView('Dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentView('Settings')}>Settings</button>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </nav>
      <main className="content">
        {renderView()}
      </main>
    </div>
  );
}
