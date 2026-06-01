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

          <button className="login-btn" onClick={() => setLoggedIn(true)}>
            Login
          </button>
        </div>
      ) : (
        <div className="dashboard">
          <h1>War Room</h1>
          <p>Welcome inside the system</p>

          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      )}
    </div>
  );
}
