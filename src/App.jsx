// src/App.jsx
// src/App.jsx
import React, { useState } from "react";
import { initialLeads } from "./data";
import Sidebar from "./components/Sidebar";
import KPIGrid from "./components/KPIGrid";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";; // Using your existing component
// Import your other components here

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [view, setView] = useState("Dashboard");
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLead, setSelectedLead] = useState(null);

  // Controller Logic only
  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)} />;

  return (
    <div className="app">
      <Sidebar currentView={view} setCurrentView={setView} setIsLoggedIn={setLoggedIn} username="Ragz" />
      <main className="main">
        {view === "Dashboard" && <DashboardComponent leads={leads} />}
        {view === "Leads" && <LeadsComponent leads={leads} onViewDetail={setSelectedLead} />}
      </main>
    </div>
  );
}
