import React from 'react';

const KPIGrid = ({ kpis }) => {
  // SAFETY GUARD: This prevents the "blank screen" crash if data is missing
  if (!kpis || !Array.isArray(kpis)) {
    return <div className="kpi-row">Loading KPIs...</div>;
  }

  return (
    <div className="kpi-row">
      {kpis.map((kpi, idx) => (
        <div key={idx} className={`kpi-card ${kpi.special ? 'special-card' : ''}`}>
          <h1>{kpi.value}</h1>
          <p>{kpi.label}</p>
        </div>
      ))}
    </div>
  );
};

export default KPIGrid;
