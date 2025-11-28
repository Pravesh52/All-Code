import React, { useState } from 'react';
import {
  Home,
  Search,
  Film,
  MessageCircle,
  Heart,
  PlusSquare,
  User,
  Menu,
  Settings,
  Bookmark,
  Moon,
  AlertCircle,
  BarChart2,
  Clock
} from 'lucide-react';

import './Home.css';
import SearchBox from "./Search";   // <-- Rename for clarity

const InstagramClone = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  return (
    <div className="main-container">

      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <h1>Instagram</h1>
        </div>

        <nav className="nav-menu">

          <button className="nav-item">
            <Home size={28} />
            <span>Home</span>
          </button>

          <button
            className="nav-item"
            onClick={() => setOpenSearch(true)}
          >
            <Search size={28} />
            <span>Search</span>
          </button>

          <button className="nav-item">
            <Film size={28} />
            <span>Explore</span>
          </button>

          <button className="nav-item">
            <Film size={28} />
            <span>Reels</span>
          </button>

          <button className="nav-item">
            <MessageCircle size={28} />
            <span>Messages</span>
          </button>

          <button className="nav-item">
            <Heart size={28} />
            <span>Notifications</span>
          </button>

          <button className="nav-item">
            <PlusSquare size={28} />
            <span>Create</span>
          </button>

          <button className="nav-item">
            <User size={28} />
            <span>Profile</span>
          </button>
        </nav>

        {/* More Section */}
        <div className="more-section">

          <button
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            className="nav-item"
          >
            <Menu size={28} />
            <span>More</span>
          </button>

          {showMoreMenu && (
            <div className="more-menu">

              <button className="more-menu-item">
                <Settings size={24} />
                <span>Settings</span>
              </button>

              <button className="more-menu-item">
                <Clock size={24} />
                <span>Your activity</span>
              </button>

              <button className="more-menu-item">
                <Bookmark size={24} />
                <span>Saved</span>
              </button>

              <button className="more-menu-item">
                <Moon size={24} />
                <span>Switch appearance</span>
              </button>

              <button className="more-menu-item">
                <AlertCircle size={24} />
                <span>Report a problem</span>
              </button>

              <button className="more-menu-item">
                <BarChart2 size={24} />
                <span>Account status</span>
              </button>

              <div className="menu-divider"></div>

              <button className="more-menu-item">
                <span>Switch accounts</span>
              </button>

              <div className="menu-divider"></div>

              <button className="more-menu-item">
                <span>Log out</span>
              </button>

            </div>
          )}

        </div>
      </div>

      {/* Search Box Open */}
      {openSearch && (
        <SearchBox closeSearch={() => setOpenSearch(false)} />
      )}

      {/* Main Content */}
      <div className="content-area"></div>
    </div>
  );
};

export default InstagramClone;
