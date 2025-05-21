import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>Instagram</h1>
      </div>
      <div className="sidebar-main-nav">
        <div className="sidebar-item">
          <span className="sidebar-icon"></span>
          <span className="sidebar-label">Home</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon"></span>
          <span className="sidebar-label">Search</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon"></span>
          <span className="sidebar-label">Explore</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon"></span>
          <span className="sidebar-label">Reels</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon"></span>
          <span className="sidebar-label">Messages</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon"></span>
          <span className="sidebar-label">Notifications</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon"></span>
          <span className="sidebar-label">Create</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon"></span>
          <span className="sidebar-label">Profile</span>
        </div>
      </div>
      <div className="sidebar-more">
        <div className="sidebar-item">
          <span className="sidebar-icon"></span>
          <span className="sidebar-label">Meta AI</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon"></span>
          <span className="sidebar-label">Threads</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon"></span>
          <span className="sidebar-label">More</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;