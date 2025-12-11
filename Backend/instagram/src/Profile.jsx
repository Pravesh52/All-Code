import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const token = localStorage.getItem("token");

  // --------------------------
  // 1️⃣ FETCH USER PROFILE
  // --------------------------
  const fetchUserProfile = async () => {
    try {
      const res = await axios.get("http://localhost:4000/profile", {
        headers: {
          Authorization: token,
        },
      });

      setUser(res.data);
    } catch (err) {
      console.log("PROFILE ERROR:", err);
    }
  };

  // --------------------------
  // 2️⃣ FETCH USER POSTS
  // --------------------------
  const fetchUserPosts = async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/user-posts/${userId}`
      );

      setPosts(res.data);
    } catch (err) {
      console.log("USER POSTS ERROR:", err);
    }
  };

  // FIRST RUN → get profile
  useEffect(() => {
    fetchUserProfile();
  }, []);

  // WHEN USER LOADED → fetch posts
  useEffect(() => {
    if (user?._id) {
      fetchUserPosts(user._id);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="profile-loading">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="profile-container">

      {/* TOP SECTION */}
      <div className="profile-header">
        
        {/* Profile Image */}
        <div className="profile-img-wrapper">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="profile"
            className="profile-img"
          />
        </div>

        {/* Right Info */}
        <div className="profile-info">

          {/* USERNAME */}
          <div className="profile-username-row">
            <h2 className="profile-username">{user.userName}</h2>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>

          {/* STATS */}
          <div className="profile-stats">
            <p><strong>{posts.length}</strong> posts</p>
            <p><strong>{user.followers?.length || 0}</strong> followers</p>
            <p><strong>{user.following?.length || 0}</strong> following</p>
          </div>

          {/* FULL NAME */}
          <div className="profile-fullname">{user.fullName}</div>
        </div>
      </div>

      <div className="profile-divider"></div>

      {/* POSTS GRID */}
      <div className="profile-posts-grid">
        {posts.length === 0 ? (
          <p className="no-posts">No posts yet</p>
        ) : (
          posts.map((post, index) => (
            <div className="profile-post-card" key={index}>
              <img
                src={post.imgUrl}
                alt="post"
                className="profile-post-img"
              />
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Profile;
