<div className="app">
  <aside className="sidebar">
    <div className="logo">LeadFlow</div>
    <nav className="nav">
      <div>Dashboard</div><div>Leads</div><div>Follow-ups</div><div>Analytics</div><div>Settings</div>
    </nav>
    <div className="logout">Logout</div>
  </aside>

  <main className="main">
    <h1>Good Morning, Ragz 👏</h1>

    {/* Top KPI Strip */}
    <section className="kpi-strip">
      {[1,2,3,4].map(i => <div className="kpi-card" key={i}>KPI Data</div>)}
    </section>

    {/* Middle Immediate Follow-ups */}
    <section className="workspace">
      {followUps.slice(0, 2).map((f, i) => (
        <div key={i} className="lead-card">
          <div className="lead-top">
            <span className="biz">{f.business}</span>
            <span className="contact">{f.contact}</span>
          </div>
          <div className="actions">
            <button>WhatsApp</button> <button>Refresh Memory</button>
          </div>
        </div>
      ))}
    </section>

    {/* Bottom Follow-up Cards */}
    <section className="kpi-strip">
      {[1,2,3,4].map(i => <div className="kpi-card" key={i}>Follow-up Card</div>)}
    </section>
  </main>

  {/* Right Side Trackers */}
  <aside className="trackers">
    <div className="tracker-card">Sales Tracker</div>
    <div className="tracker-card" style={{flex: 1}}>Requests for Info</div>
  </aside>
</div>
