import React from 'react';

const Sidebar = ({ currentView, setCurrentView, setIsLoggedIn, username }) => {
  // SAFETY GUARD: If required state functions are missing, don't crash
  if (!setCurrentView || !setIsLoggedIn) {
    return <aside className="sidebar">Loading...</aside>;
  }

  return (
    <aside className="sidebar">
      <div className="logo-area"><img src="/logo.png" alt="Logo" className="logo-img" /></div>
      <div className="nav-block">
        {["Dashboard", "Leads", "Follow-ups", "Sales Analysis", "Settings", "Help Center"].map((item) => (
          <div 
            key={item} 
            className={`nav-item ${currentView === item ? "nav-item-active" : ""}`} 
            onClick={() => setCurrentView(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="profile-section">
        <div className="avatar-wrapper">
          <img src="/your-profile-pic.jpg" alt="Avatar" className="avatar-img" />
          <div className="upload-overlay"><i className="fa-solid fa-pencil"></i></div>
        </div>
        <div className="profile-info">
          <h4>{username || "User"}</h4>
          <p>Administrator</p>
        </div>
      </div>
      <div className="logout" onClick={() => setIsLoggedIn(false)}>Logout</div>
    </aside>
  );
};

export default Sidebar;
