import { useState } from "react";
import "./styles.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (loggedIn) {
    return (
      <div className="dashboard">
        <h1>War Room</h1>

        <div className="card">
          <h3>Leads Overview</h3>
          <ul>
            <li>🔵 New Lead - Company A</li>
            <li>🟡 Contacted - Company B</li>
            <li>🟢 Closed - Company C</li>
          </ul>
        </div>

        <button onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="login-card">
        <h1>LeadFlow</h1>
        <p className="subtitle">War Room Access</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
