// import React, { useState } from 'react';
// import {
//   Home,
//   Search,
//   Film,
//   MessageCircle,
//   Heart,
//   PlusSquare,
//   User,
//   Menu,
//   Settings,
//   Bookmark,
//   Moon,
//   AlertCircle,
//   BarChart2,
//   Clock,
  
// } from 'lucide-react';

// import './Home.css';
// import SearchBox from "./Search";   // <-- Rename for clarity
// // import UploadPhoto from "./Uploadphoto";
// import { Link } from 'react-router-dom';



// const InstagramClone = () => {
//   const [openSearch, setOpenSearch] = useState(false);
//   const [showMoreMenu, setShowMoreMenu] = useState(false);
//   const [open, setOpen] = useState(false);


//   return (
//     <div className="main-container">

//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo">
//           <h1>Instagram</h1>
//         </div>

//         <nav className="nav-menu">

//           <button className="nav-item">
//             <Home size={28} />
//             <span>Home</span>
//           </button>

//           <button
//             className="nav-item"
//             onClick={() => setOpenSearch(true)}
//           >
//             <Search size={28} />
//             <span>Search</span>
//           </button>

//           <button className="nav-item">
//             <Film size={28} />
//             <span>Explore</span>
//           </button>

//           <button className="nav-item">
//             <Film size={28} />
//             <span>Reels</span>
//           </button>

//           <button className="nav-item">
//             <MessageCircle size={28} />
//             <span>Messages</span>
//           </button>

//           <button className="nav-item">
//             <Heart size={28} />
//             <span>Notifications</span>
//           </button>

//           <Link to="/upload">
//           <button className="nav-item">
//           <PlusSquare size={28} />
          
//            <span>Create</span>
//           </button>
//           </Link>

//       {/* Upload component */}
//       {open && <UploadPhoto closeUpload={() => setOpen(false)} />}

//           <button className="nav-item">
//             <User size={28} />
//             <span>Profile</span>
//           </button>
//         </nav>

//         {/* More Section */}
//         <div className="more-section">

//           <button
//             onClick={() => setShowMoreMenu(!showMoreMenu)}
//             className="nav-item"
//           >
//             <Menu size={28} />
//             <span>More</span>
//           </button>

//           {showMoreMenu && (
//             <div className="more-menu">

//               <button className="more-menu-item">
//                 <Settings size={24} />
//                 <span>Settings</span>
//               </button>

//               <button className="more-menu-item">
//                 <Clock size={24} />
//                 <span>Your activity</span>
//               </button>

//               <button className="more-menu-item">
//                 <Bookmark size={24} />
//                 <span>Saved</span>
//               </button>

//               <button className="more-menu-item">
//                 <Moon size={24} />
//                 <span>Switch appearance</span>
//               </button>

//               <button className="more-menu-item">
//                 <AlertCircle size={24} />
//                 <span>Report a problem</span>
//               </button>

//               <button className="more-menu-item">
//                 <BarChart2 size={24} />
//                 <span>Account status</span>
//               </button>

//               <div className="menu-divider"></div>

//               <button className="more-menu-item">
//                 <span>Switch accounts</span>
//               </button>

//               <div className="menu-divider"></div>

//               <button className="more-menu-item">
//                 <span>Log out</span>
//               </button>

//             </div>
//           )}

//         </div>
//       </div>

//       {/* Search Box Open */}
//       {openSearch && (
//         <SearchBox closeSearch={() => setOpenSearch(false)} />
//       )}

//       {/* Main Content */}
//       <div className="content-area"></div>
//     </div>
//   );
// };

// export default InstagramClone;


import React, { useEffect, useState } from 'react';
import {
  Home as HomeIcon,
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
  Clock,
} from 'lucide-react';

import './Home.css';
import SearchBox from "./Search";
import UploadPhoto from "./UploadPhoto"; // ensure path/name matches
// import { Link } from 'react-router-dom';   // no longer using Link for create

const InstagramClone = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [openUpload, setOpenUpload] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  // Fetch posts from backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoadingPosts(true);
        const res = await fetch('http://localhost:4000/getAllPosts'); // <-- change if your endpoint differs
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        // Expecting data to be an array of objects like [{ imgUrl: "...", _id: "...", createdAt: "..." }, ...]
        setPosts(Array.isArray(data) ? data.reverse() : []); // show latest first
      } catch (err) {
        console.error('Error fetching posts', err);
        setPosts([]);
      } finally {
        setLoadingPosts(false);
      }
    };

    fetchPosts();
    // Optionally poll or use websockets; for now single fetch on mount.
  }, []);

  // called when UploadPhoto finishes and returns new imgUrl
  const handleUploaded = (newPost) => {
    // if backend returns a full post object, use it; else create minimal
    const postObj = newPost && newPost._id ? newPost : { imgUrl: newPost, createdAt: Date.now() };
    setPosts(prev => [postObj, ...prev]);
    setOpenUpload(false);
  };

  return (
    <div className="main-container">

      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <h1>Instagram</h1>
        </div>

        <nav className="nav-menu">

          <button className="nav-item active">
            <HomeIcon size={28} />
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

          {/* Create -> open inline upload */}
          <button
            className="nav-item"
            onClick={() => setOpenUpload(true)}
          >
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
      <div className="content-area">
        {/* Inline upload modal / panel */}
        {openUpload && (
          <div className="upload-overlay">
            <div className="upload-panel">
              <button className="close-upload" onClick={() => setOpenUpload(false)}>✕</button>
              <UploadPhoto
                closeUpload={() => setOpenUpload(false)}
                onUploaded={handleUploaded}
              />
            </div>
          </div>
        )}

        <div className="feed-header">
          <h2>Your Feed</h2>
        </div>

        {loadingPosts ? (
          <div className="loading-text">Loading posts...</div>
        ) : (
          <div className="posts-grid">
            {posts.length === 0 ? (
              <div className="empty-text">No posts yet — create one!</div>
            ) : (
              posts.map((p, idx) => (
                <div className="post-card" key={p._id || idx}>
                  <div className="post-image-wrapper">
                    <img src={p.imgUrl || p.url || p.image} alt="post" className="post-image" />
                  </div>
                  <div className="post-meta">
                    <div className="post-time">{p.createdAt ? new Date(p.createdAt).toLocaleString() : ''}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default InstagramClone;

