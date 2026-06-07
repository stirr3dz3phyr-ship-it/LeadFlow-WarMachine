import React, { useState, useEffect } from 'react';
import './styles.css';

export default function App() {
  // AUTH
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem('isLoggedIn') === 'true'
  );

  // LEADS
  const [leads, setLeads] = useState(() => {
    const savedLeads = localStorage.getItem('warMachineLeads');

    return savedLeads
      ? JSON.parse(savedLeads)
      : [
          {
            id: 1,
            company: 'BluePeak Interiors',
            contact: 'Michael Scott',
            phone: '+91 9876543210',
            email: 'michael@bluepeak.com',
            revenue: 75000,
            status: 'Hot',
            lastUpdated: new Date().toLocaleDateString()
          },
          {
            id: 2,
            company: 'Urban Nest Builders',
            contact: 'Sarah Johnson',
            phone: '+91 9123456789',
            email: 'sarah@urbannest.com',
            revenue: 45000,
            status: 'Follow-up Required',
            lastUpdated: new Date().toLocaleDateString()
          },
          {
            id: 3,
            company: 'Apex Solutions',
            contact: 'Daniel Cooper',
            phone: '+91 9988776655',
            email: 'daniel@apex.com',
            revenue: 115000,
            status: 'New Lead',
            lastUpdated: new Date().toLocaleDateString()
          }
        ];
  });

  // NEW LEAD FORM
  const [newLead, setNewLead] = useState({
    company: '',
    contact: '',
    phone: '',
    email: '',
    revenue: '',
    status: 'New Lead'
  });

  // SAVE AUTH
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  // SAVE LEADS
  useEffect(() => {
    localStorage.setItem(
      'warMachineLeads',
      JSON.stringify(leads)
    );
  }, [leads]);

  // KPI CALCULATIONS
  const newLeadsCount = leads.filter(
    lead => lead.status === 'New Lead'
  ).length;

  const followUpsCount = leads.filter(
    lead => lead.status === 'Follow-up Required'
  ).length;

  const totalRevenue = leads.reduce(
    (sum, lead) => sum + Number(lead.revenue || 0),
    0
  );

  // ADD LEAD
  const handleAddLead = e => {
    e.preventDefault();

    if (!newLead.company.trim()) return;

    const leadToAdd = {
      id: Date.now(),
      ...newLead,
      revenue: Number(newLead.revenue || 0),
      lastUpdated: new Date().toLocaleDateString()
    };

    setLeads([leadToAdd, ...leads]);

    setNewLead({
      company: '',
      contact: '',
      phone: '',
      email: '',
      revenue: '',
      status: 'New Lead'
    });
  };

  // LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-box">
          <h2>War Machine Access</h2>

          <button
            className="login-btn"
            onClick={() => setIsLoggedIn(true)}
          >
            Authorize Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h3>War Machine</h3>

        <div className="nav-block">
          <div className="nav-item nav-item-active">
            Dashboard
          </div>

          <div className="nav-item">
            Settings
          </div>

          <div className="nav-item">
            Help Center
          </div>
        </div>

        <div
          className="logout"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </div>
      </aside>

      <main className="main">
        <h1>Good Morning Ragz 👋</h1>

        {/* KPI */}
        <div className="kpi-row">
          <div className="kpi-card">
            <h1>{newLeadsCount}</h1>
            <p>New Leads</p>
          </div>

          <div className="kpi-card">
            <h1>{followUpsCount}</h1>
            <p>Follow-ups</p>
          </div>

          <div className="kpi-card">
            <h1>
              $
              {totalRevenue.toLocaleString()}
            </h1>
            <p>Revenue</p>
          </div>
        </div>

        {/* ADD LEAD */}
        <div className="workspace">
          <h3>Add Lead</h3>

          <form
            className="lead-form"
            onSubmit={handleAddLead}
          >
            <input
              placeholder="Company"
              value={newLead.company}
              onChange={e =>
                setNewLead({
                  ...newLead,
                  company: e.target.value
                })
              }
            />

            <input
              placeholder="Contact"
              value={newLead.contact}
              onChange={e =>
                setNewLead({
                  ...newLead,
                  contact: e.target.value
                })
              }
            />

            <input
              placeholder="Phone"
              value={newLead.phone}
              onChange={e =>
                setNewLead({
                  ...newLead,
                  phone: e.target.value
                })
              }
            />

            <input
              placeholder="Email"
              value={newLead.email}
              onChange={e =>
                setNewLead({
                  ...newLead,
                  email: e.target.value
                })
              }
            />

            <input
              type="number"
              placeholder="Revenue"
              value={newLead.revenue}
              onChange={e =>
                setNewLead({
                  ...newLead,
                  revenue: e.target.value
                })
              }
            />

            <select
              value={newLead.status}
              onChange={e =>
                setNewLead({
                  ...newLead,
                  status: e.target.value
                })
              }
            >
              <option>New Lead</option>
              <option>Hot</option>
              <option>Follow-up Required</option>
            </select>

            <button type="submit">
              Add Lead
            </button>
          </form>
        </div>

        {/* LEADS */}
        <div className="followup-list">
          {leads.map(lead => (
            <div
              key={lead.id}
              className="lead-card"
            >
              <div className="lead-top">
                <h4>{lead.company}</h4>

                <span
                  className={`status-badge ${lead.status
                    .replace(/\s+/g, '-')
                    .toLowerCase()}`}
                >
                  {lead.status}
                </span>
              </div>

              <p><strong>Contact:</strong> {lead.contact}</p>
              <p><strong>Phone:</strong> {lead.phone}</p>
              <p><strong>Email:</strong> {lead.email}</p>
              <p><strong>Revenue:</strong> ${lead.revenue}</p>
              <p><strong>Updated:</strong> {lead.lastUpdated}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
