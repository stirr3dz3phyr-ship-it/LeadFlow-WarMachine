import { useState } from "react";
import "./styles.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="app">
      {!loggedIn ? (
        <div className="login-card">
          <h1>LeadFlow</h1>
          <p className="subtitle">War Room Access</p>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="dashboard">
          <h1>War Room</h1>

          <div className="card">
            <h3>Leads Overview</h3>
            <ul>
              <li>🔵 New Lead</li>
              <li>🟡 Contacted Lead</li>
              <li>🟢 Closed Lead</li>
            </ul>
          </div>

          <button onClick={() => setLoggedIn(false)}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
