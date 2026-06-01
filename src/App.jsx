import { useState } from "react";
import "./styles.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      {!loggedIn ? (
        <div className="login-card">
          <h1>LeadFlow</h1>
          <p className="subtitle">Sign in to enter War Room</p>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button onClick={() => setLoggedIn(true)}>
            Login
          </button>
        </div>
      ) : (
        <div className="dashboard">
          <h1>War Room Control Center</h1>

          <div className="pipeline">

            <div className="column">
              <h3>New</h3>
              <div className="lead-card">Company A</div>
              <div className="lead-card">Company B</div>
            </div>

            <div className="column">
              <h3>Contacted</h3>
              <div className="lead-card">Company C</div>
            </div>

            <div className="column">
              <h3>Qualified</h3>
            </div>

            <div className="column">
              <h3>Won / Lost</h3>
            </div>

          </div>

          <button onClick={() => setLoggedIn(false)}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
