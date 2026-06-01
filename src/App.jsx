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

          <input type="
