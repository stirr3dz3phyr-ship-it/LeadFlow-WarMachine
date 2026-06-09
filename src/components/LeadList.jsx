import React from 'react';

const LeadList = ({ leads }) => {
  // SAFETY GUARD: If leads is missing, empty, or not an array, show a placeholder
  if (!leads || !Array.isArray(leads) || leads.length === 0) {
    return (
      <div className="workspace">
        <h3>Follow-up List</h3>
        <p>No leads to display right now.</p>
      </div>
    );
  }

  return (
    <div className="workspace">
      <h3>Shall we begin the day by following up on:</h3>
      <div className="followup-list">
        {leads.map((lead, idx) => (
          <div key={idx} className="lead-card">
            <div className="lead-top">
              <span>{lead.name}</span>
              <span>{lead.rpc}</span>
            </div>
            <div className="lead-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{lead.info}</span>
              <div className="lead-actions" style={{ display: 'flex', gap: '15px' }}>
                <i className="fa-brands fa-whatsapp icon-action" style={{color: '#25D366'}}></i>
                <i className="fa-solid fa-phone icon-action" style={{color: '#2f5cff'}}></i>
                <i className="fa-solid fa-envelope icon-action" style={{color: '#FFC107'}}></i>
                <i className="fa-solid fa-clock icon-action" style={{color: '#888888'}}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadList;
