import React, { useState } from "react";
import "./styles.css";

/*import Sidebar from "./components/Sidebar";*/
import KPIGrid from "./components/KPIGrid";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentView, setCurrentView] = useState("Dashboard");
  const username = "Ragz";

  const kpiData = [
    { value: "47", label: "New Leads - Untouched" },
    { value: "16", label: "Follow-ups Today" },
    { value: "9", label: "RPCs Reached" }
  ];

  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-left">
          <div className="login-overlay">
            <h1>LeadFlow War Machine</h1>
            <p>Command Center for Strategic Growth</p>
          </div>
        </div>
        <div className="login-right">
          <div className="login-box">
            <h2>Welcome Back</h2>
            <button className="login-btn" onClick={() => setIsLoggedIn(true)}>User Login</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} setIsLoggedIn={setIsLoggedIn} username={username} />
      <main className="main">
        {currentView === "Dashboard" && (
          <>
            <h1>Good Morning {username} 👋</h1>
            <KPIGrid kpis={kpiData} />
            <LeadForm />
            <LeadList />
          </>
        )}
      </main>
    </div>
  );
}
