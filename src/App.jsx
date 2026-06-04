import React from "react";

export default function App() {
  const username = "Ragz";

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo-area">
          <img src="/logo.png" alt="LeadFlow Logo" className="logo-img" />
        </div>
        <div className="nav-block">
          <div className="nav-item">Dashboard</div>
          <div className="nav-item">Leads</div>
          <div className="nav-item">Follow-ups</div>
          <div className="nav-item">Settings</div>
        </div>
        <div className="logout">Logout</div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">
        <h1>Good Morning {username} 👋</h1>

        {/* TOP KPI ROW */}
        <div className="kpi-row">
          <div className="kpi-card"><h1>47</h1><p>New Leads - Untouched</p></div>
          <div className="kpi-card"><h1>16</h1><p>Follow-ups Today</p></div>
          <div className="kpi-card"><h1>9</h1><p>RPCs Reached</p></div>
          <div className="kpi-card"><h1>13</h1><p>Unreachable / RNR Leads</p></div>
        </div>

        {/* WORKSPACE */}
        <div className="workspace">
          <h3>Shall we begin the day by following up on:</h3>
          
          <div className="followup-list">
            {/* ROW 1: BluePeak */}
            <div className="lead-card">
              <div className="lead-top">
                <span>BluePeak Interiors</span>
                <span>RPC: Arjun Mehta</span>
              </div>
              <div className="lead-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Last Contact: 2 Days Ago | Status: Interested | Priority: Warm</span>
                <div className="lead-actions" style={{ display: 'flex', gap: '15px', marginTop: '0' }}>
                  <i className="fa-brands fa-whatsapp icon-action" style={{color: '#25D366', cursor: 'pointer'}}></i>
                  <i className="fa-solid fa-phone icon-action" style={{color: '#2f5cff', cursor: 'pointer'}}></i>
                  <i className="fa-solid fa-envelope icon-action" style={{color: '#FFC107', cursor: 'pointer'}}></i>
                  <i className="fa-solid fa-clock icon-action" style={{color: '#888888', cursor: 'pointer'}}></i>
                </div>
              </div>
            </div>

            {/* ROW 2: Urban Nest */}
            <div className="lead-card">
              <div className="lead-top">
                <span>Urban Nest Builders</span>
                <span>RPC: Priya Sharma</span>
              </div>
              <div className="lead-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Last Contact: 1 Day Ago | Status: Follow-up | Priority: Hot</span>
                <div className="lead-actions" style={{ display: 'flex', gap: '15px', marginTop: '0' }}>
                  <i className="fa-brands fa-whatsapp icon-action" style={{color: '#25D366', cursor: 'pointer'}}></i>
                  <i className="fa-solid fa-phone icon-action" style={{color: '#2f5cff', cursor: 'pointer'}}></i>
                  <i className="fa-solid fa-envelope icon-action" style={{color: '#FFC107', cursor: 'pointer'}}></i>
                  <i className="fa-solid fa-clock icon-action" style={{color: '#888888', cursor: 'pointer'}}></i>
                </div>
              </div>
            </div>
          </div> 
        </div> {/* This closes the workspace */}

        {/* BOTTOM KPI ROW */}
        <div className="kpi-row">
          <div className="kpi-card"><h1>12</h1><p>Warm / Hot Prospects</p></div>
          <div className="kpi-card"><h1>6</h1><p>RFI Follow-ups</p></div>
          <div className="kpi-card"><h1>3 | $2.4K</h1><p>Closed Sales</p></div>
          <div className="kpi-card special-card"><h1>$3.6K</h1><p>Target Remaining</p></div>
        </div>

      </main> 
    </div>
  );
}
