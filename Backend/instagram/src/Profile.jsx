

import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const token = localStorage.getItem("token");

  const fetchUserProfile = async () => {
    try {
      const res = await axios.get("http://localhost:4000/profile", {
        headers: { Authorization: token },
      });
      setUser(res.data);
    } catch (err) {
      console.log("PROFILE ERROR:", err);
    }
  };

  const fetchUserPosts = async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/user-posts/${userId}`
      );
      setPosts(res.data);
    } catch (err) {
      console.log("POST ERROR:", err);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (user?._id) fetchUserPosts(user._id);
  }, [user]);

  if (!user) {
    return <div className="profile-loading">Loading profile...</div>;
  }

  return (
    <div className="profile-container">

      {/* HEADER */}
      <div className="profile-header">
        
        {/* Profile Image */}
        <div className="profile-img-wrapper">
         <img
         src={
        user.profilePic
        ? user.profilePic
        : `https://api.dicebear.com/7.x/bottts/svg?seed=${user.userName}`
        }
    className="profile-img"
  />
</div>


        {/* RIGHT SIDE */}
        <div className="profile-info">

          <div className="profile-username-row">
            <h2 className="profile-username">{user.userName}</h2>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>

          <div className="profile-stats">
            <p><strong>{posts.length}</strong> posts</p>
            <p><strong>{user.followers?.length || 0}</strong> followers</p>
            <p><strong>{user.following?.length || 0}</strong> following</p>
          </div>

          <div className="profile-fullname">{user.fullName}</div>
          <div className="profile-bio">{user.bio || "No bio added yet"}</div>
        </div>
      </div>

      {/* Divider */}
      <div className="profile-divider"></div>

      {/* TABS */}
      <div className="profile-tabs">
        <div className="profile-tab active">Posts</div>
        <div className="profile-tab">Reels</div>
        <div className="profile-tab">Tagged</div>
      </div>

      {/* POSTS GRID */}
      <div className="profile-posts-grid">
        {posts.length === 0 ? (
          <p className="no-posts">No posts yet</p>
        ) : (
          posts.map((post, idx) => (
            <div className="profile-post-card" key={idx}>
              <img src={post.imgUrl} className="profile-post-img" />
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Profile;

