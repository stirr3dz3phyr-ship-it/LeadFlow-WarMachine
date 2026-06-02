body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #f4f6fb;
  color: #1c2430;
}

/* APP LAYOUT */
.app {
  display: flex;
  min-height: 100vh;
}

/* SIDEBAR (RESTORED) */
.sidebar {
  width: 220px;
  background: #ffffff;
  border-right: 1px solid #e6e9f2;
  padding: 20px;
}

.logo {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 30px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-item {
  font-size: 14px;
  color: #5a6475;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
}

.nav-item.active {
  background: #eef3ff;
  color: #2f5cff;
}

/* MAIN */
.main {
  flex: 1;
  padding: 24px;
}

/* HERO */
.hero h1 {
  margin: 0;
  font-size: 24px;
}

.hero p {
  margin-top: 6px;
  color: #6b768a;
}

/* KPI STRIP (CENTERED FEEL) */
.kpi-strip {
  display: flex;
  gap: 12px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.kpi-card {
  background: #ffffff;
  border: 1px solid #e6e9f2;
  border-radius: 12px;
  padding: 14px;
  min-width: 140px;
  text-align: center;
}

.kpi-value {
  font-size: 20px;
  font-weight: 600;
}

.kpi-label {
  font-size: 12px;
  color: #6b768a;
}

/* WORKSPACE */
.workspace {
  background: #ffffff;
  border: 1px solid #e6e9f2;
  border-radius: 16px;
  padding: 16px;
}

.workspace-title {
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #6b768a;
  margin-bottom: 14px;
}

/* LEAD CARDS */
.lead-card {
  border: 1px solid #eef1f7;
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 12px;
  background: #fff;
}

.lead-top {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
}

.lead-note {
  margin-top: 8px;
  font-size: 13px;
  color: #2a3445;
}

.lead-meta {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #6b768a;
}

.lead-actions {
  margin-top: 12px;
  display: flex;
  gap: 10px;
}

button {
  background: #f3f6ff;
  border: 1px solid #d9e2ff;
  color: #2f5cff;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background: #e9efff;
}

.muted {
  color: #6b768a;
  font-size: 13px;
}
