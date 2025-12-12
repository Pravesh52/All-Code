import './Home.css';
import React, { useEffect, useState } from 'react';
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
  Clock,
  Send,
  MoreHorizontal,
  X
} from 'lucide-react';
import SearchBox from "./Search";
import UploadPhoto from "./UploadPhoto";

const InstagramClone = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openUpload, setOpenUpload] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [commentText, setCommentText] = useState({});
  const [showComments, setShowComments] = useState({});
  
  

  const token = localStorage.getItem("token");

  // Fetch Posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoadingPosts(true);
        const res = await fetch("http://localhost:4000/getAllPosts");
        const data = await res.json();
        setPosts(Array.isArray(data) ? data.reverse() : []);
      } catch (err) {
        console.error("ERROR loading posts", err);
      } finally {
        setLoadingPosts(false);
      }
      
    };
    fetchPosts();
  }, []);

  // Handle Like
  const handleLike = async (postId) => {
    if (!token) {
      alert("Please login first!");
      return;
    }
    try {
      console.log(posts);
      const res = await fetch(`http://localhost:4000/like/${postId}`, {
        method: "POST",
        headers: { Authorization: token },
      });
      const data = await res.json();
      if (data.success) {
        setPosts((prev) =>
          prev.map((p) =>
            p._id === postId ? { ...p, likeCount: data.likeCount } : p
          )
        );
      }
    } catch (err) {
      console.error("Like error:", err);
    }
  };

  // Handle Comment Submit
  const handleCommentSubmit = async (postId) => {
    if (!token) {
      alert("Please login first!");
      return;
    }
    const text = commentText[postId]?.trim();
    if (!text) return;

    try {
      const res = await fetch(`http://localhost:4000/comment/${postId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (data.success) {
        setCommentText((prev) => ({ ...prev, [postId]: "" }));
        const updatedRes = await fetch("http://localhost:4000/getAllPosts");
        const updatedData = await updatedRes.json();
        setPosts(Array.isArray(updatedData) ? updatedData.reverse() : []);
      }
    } catch (err) {
      console.error("Comment error:", err);
    }
  };

  // Profile Component
  const Profile = () => {
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [hoveredPost, setHoveredPost] = useState(null);

    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const res = await fetch("http://localhost:4000/profile", {
            headers: { Authorization: token },
          });
          const data = await res.json();
          setUser(data);
        } catch (err) {
          console.log("Profile error:", err);
        }
      };
      fetchProfile();
    }, []);

    useEffect(() => {
      if (user?._id) {
        const fetchUserPosts = async () => {
          try {
            const res = await fetch(`http://localhost:4000/user-posts/${user._id}`);
            const data = await res.json();
            setUserPosts(data);
          } catch (err) {
            console.log("Posts error:", err);
          }
        };
        fetchUserPosts();
      }
    }, [user]);

    if (!user) return <div className="profile-loading">Loading profile...</div>;

    return (
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-img-wrapper">
            <img
              src={user.profilePic || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.userName}`}
              className="profile-img"
              alt="profile"
            />
          </div>
          <div className="profile-info">
            <div className="profile-username-row">
              <h2 className="profile-username">{user.userName}</h2>
              <button className="edit-profile-btn">Edit Profile</button>
            </div>
            <div className="profile-stats">
              <p><strong>{userPosts.length}</strong> posts</p>
              <p><strong>{user.followers?.length || 0}</strong> followers</p>
              <p><strong>{user.following?.length || 0}</strong> following</p>
            </div>
            <div className="profile-fullname">{user.fullName}</div>
            <div className="profile-bio">{user.bio || "No bio added yet"}</div>
          </div>
        </div>

        <div className="profile-divider"></div>

        <div className="profile-tabs">
          <div className="profile-tab active">Posts</div>
          <div className="profile-tab">Reels</div>
          <div className="profile-tab">Tagged</div>
        </div>

        <div className="profile-posts-grid">
          {userPosts.length === 0 ? (
            <p className="no-posts">No posts yet</p>
          ) : (
            userPosts.map((post) => (
              <div
                className="profile-post-card"
                key={post._id}
                onMouseEnter={() => setHoveredPost(post._id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <img src={post.imgUrl} className="profile-post-img" alt="post" />
                {hoveredPost === post._id && (
                  <div className="post-hover-overlay">
                    <div className="hover-stat">
                      <Heart size={24} fill="#fff" />
                      <span>{post.likeCount || 0}</span>
                    </div>
                    <div className="hover-stat">
                      <MessageCircle size={24} fill="#fff" />
                      <span>{post.comments?.length || 0}</span>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="main-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo"><h1>Instagram</h1></div>

        <nav className="nav-menu">
          <button
            className={`nav-item ${activePage === "home" ? "active" : ""}`}
            onClick={() => setActivePage("home")}
          >
            <Home size={28} />
            <span>Home</span>
          </button>

          <button
            className={`nav-item ${openSearch ? "active" : ""}`}
            onClick={() => setOpenSearch(prev => !prev)}
          >
            <Search size={28} />
            <span>Search</span>
          </button>

          <button className="nav-item">
            <Film size={28} />
            <span>Explore</span>
          </button>

          <button className="nav-item">
            <MessageCircle size={28} />
            <span>Messages</span>
          </button>

          <button className="nav-item">
            <Heart size={28} />
            <span>Notifications</span>
          </button>

          <button
            className={`nav-item ${openUpload ? "active" : ""}`}
            onClick={() => setOpenUpload(prev => !prev)}
          >
            <PlusSquare size={28} />
            <span>Create</span>
          </button>

          <button
            className={`nav-item ${activePage === "profile" ? "active" : ""}`}
            onClick={() => setActivePage("profile")}
          >
            <User size={28} />
            <span>Profile</span>
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {/* Search Overlay */}
        {openSearch && (
          <div className="overlay">
            <div className="overlay-content">
              <button className="close-btn" onClick={() => setOpenSearch(false)}>
                <X size={24} />
              </button>
              <SearchBox />
            </div>
          </div>
        )}

        {/* Upload Overlay */}
        {openUpload && (
          <div className="overlay">
            <div className="overlay-content">
              <button className="close-btn" onClick={() => setOpenUpload(false)}>
                <X size={24} />
              </button>
              <UploadPhoto />
            </div>
          </div>
        )}

        {/* Feed */}
        {activePage === "home" && (
          <div className="feed-section">
            {/* <div className="feed-header"><h2>Your Feed</h2></div> */}
            {loadingPosts ? (
              <div className="loading-text">Loading posts...</div>
            ) : (
              <div className="posts-grid">
                {posts.length === 0 ? (
                  <div className="empty-text">No posts yet — create one!</div>
                ) : (
                  posts.map((post) => (
                    <div className="post-card" key={post._id}>
                      <div className="post-header">
                        <div className="post-user-info">
                          <div className="post-avatar">
                            <img src={`https://api.dicebear.com/7.x/bottts/svg?seed=${post._id}`} alt="user" />
                          </div>
                         <span className="post-username">{post.user[0].userName}</span>

                        </div>
                        <button className="post-more-btn"><MoreHorizontal size={20} /></button>
                      </div>
                      <div className="post-image-wrapper">
                        <img src={post.imgUrl} alt="post" className="post-image" />
                      </div>
                      <div className="post-actions">
                        <div className="action-buttons">
                          <button onClick={() => handleLike(post._id)} className="action-btn">
                            <Heart size={24} />
                          </button>
                          <button
                            onClick={() =>
                              setShowComments(prev => ({ ...prev, [post._id]: !prev[post._id] }))
                            }
                            className="action-btn"
                          >
                            <MessageCircle size={24} />
                          </button>
                          <button className="action-btn"><Send size={24} /></button>
                        </div>
                        <div className="like-count">{post.likeCount || 0} likes</div>
                        {showComments[post._id] && (
                          <div className="comments-section">
                            <div className="comment-count">{post.comments?.length || 0} comments</div>
                          </div>
                        )}
                        <div className="add-comment">
                          <input
                            type="text"
                            placeholder="Add a comment..."
                            value={commentText[post._id] || ""}
                            onChange={e => setCommentText(prev => ({ ...prev, [post._id]: e.target.value }))}
                            onKeyPress={e => { if(e.key==='Enter') handleCommentSubmit(post._id); }}
                          />
                          {commentText[post._id]?.trim() && (
                            <button onClick={() => handleCommentSubmit(post._id)} className="post-comment-btn">
                              Post
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

        {/* Profile */}
        {activePage === "profile" && <Profile />}
      </div>
    </div>
  );
};

export default InstagramClone;
