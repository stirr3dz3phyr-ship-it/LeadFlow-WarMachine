import React, { useState } from 'react';

const LeadForm = () => {
  const [leadName, setLeadName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!leadName.trim()) {
      alert("Please enter a lead name");
      return;
    }
    console.log("Submitting:", leadName);
    // Add your actual API call logic here later
    setLeadName('');
  };

  return (
    <div className="workspace">
      <h3>Add New Lead</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Lead Name" 
          className="login-input" 
          style={{ marginBottom: 0, flex: 1 }}
          value={leadName}
          onChange={(e) => setLeadName(e.target.value)}
        />
        <button 
          type="submit" 
          className="admin-login-btn" 
          style={{ marginTop: 0, padding: '10px 20px' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
