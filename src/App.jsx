<section className="workspace">

  <div className="workspace-title">
    Shall we begin the day by following up on:
  </div>

  <div className="followup-list">
    {followUps.map((f, i) => (
      <div key={i} className="lead-card">

        <div className="lead-top">
          <div className="biz">{f.business}</div>
          <div className="contact">{f.contact}</div>
        </div>

        <div className="note">{f.note}</div>

        <div className="meta">
          <span>{f.lastNote}</span>
          <span>{f.timeline}</span>
        </div>

        <div className="actions">
          <button>WhatsApp Message</button>
          <button>Refresh Memory</button>
        </div>

      </div>
    ))}
  </div>

</section>
