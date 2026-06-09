import React from 'react';

const LeadForm = () => (
  <div className="workspace">
    <h3>Add New Lead</h3>
    <div style={{ display: 'flex', gap: '10px' }}>
      <input type="text" placeholder="Lead Name" className="login-input" style={{ marginBottom: 0, flex: 1 }} />
      <button className="admin-login-btn" style={{ marginTop: 0, padding: '10px 20px' }}>Submit</button>
    </div>
  </div>
);

export default LeadForm;