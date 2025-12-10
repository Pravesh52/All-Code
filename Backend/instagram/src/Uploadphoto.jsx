import React, { useState } from 'react';
import { Upload, X, Check, Camera, Loader, Image } from 'lucide-react';
import './UploadPhoto.css';
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const supabaseUrl = "https://mzqhqzjauvhdxoesmzng.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16cWhxemphdXZoZHhvZXNtem5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2OTc0NTQsImV4cCI6MjA3OTI3MzQ1NH0._AbocMuHR7aEbW2bJv4pNbq_goOiyIby5at6Rej4QAY";

const supabase = createClient(supabaseUrl, supabaseKey);

const UploadPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // ----------------------------
  // FILE CHANGE
  // ----------------------------
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setMessage({ text: 'Please select a valid image file', type: 'error' });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage({ text: 'Image size should be less than 5MB', type: 'error' });
      return;
    }

    setSelectedFile(file);
    setMessage({ text: '', type: '' });

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  // ----------------------------
  // UPLOAD FUNCTION (FIXED)
  // ----------------------------
  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage({ text: 'Please select an image first!', type: 'error' });
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const timestamp = Date.now();
      const filename = `${timestamp}_${selectedFile.name}`;

      // ----------------------------
      // UPLOAD TO SUPABASE
      // ----------------------------
      const { error } = await supabase.storage
        .from('insta')
        .upload(`insta_images/${filename}`, selectedFile, { upsert: true });

      if (error) throw error;

      const imgUrl = `${supabaseUrl}/storage/v1/object/public/insta/insta_images/${filename}`;
      console.log("Image URL:", imgUrl);

      // ----------------------------
      // SEND TO BACKEND
      // ----------------------------
      const token = localStorage.getItem("token");

      const backendResponse = await axios.post(
        "http://localhost:4000/upload",
        { imgUrl },
        { headers: { Authorization: token } }
      );

      console.log(backendResponse.data);

      setMessage({ text: "Photo uploaded successfully! 🎉", type: "success" });

      setTimeout(() => {
        setSelectedFile(null);
        setPreview('');
        setMessage({ text: '', type: '' });
      }, 2000);

    } catch (err) {
      console.error("❌ Upload failed:", err);
      setMessage({ text: "Error uploading image. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreview('');
    setMessage({ text: '', type: '' });
  };

  return (
    <div className="upload-container">
      <div className="upload-card">

        <div className="upload-header">
          <div className="header-content">
            <Camera className="header-icon" />
            <h1 className="header-title">Create Post</h1>
          </div>
          <p className="header-subtitle">Share your moment with the world</p>
        </div>

        <div className="upload-body">
          {!preview ? (
            <label className="upload-area">
              <div className="upload-content">
                <div className="upload-icon-wrapper">
                  <Upload className="upload-icon" />
                </div>
                <p className="upload-text">
                  <span className="upload-text-highlight">Click to upload</span> or drag and drop
                </p>
                <p className="upload-hint">PNG, JPG, GIF up to 5MB</p>
              </div>

              <input
                type="file"
                className="file-input"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          ) : (
            <div className="preview-container">
              <div className="preview-wrapper">
                <img src={preview} alt="Preview" className="preview-image" />
              </div>

              <button onClick={clearSelection} disabled={loading} className="remove-btn">
                <X className="remove-icon" />
              </button>

              <div className="file-info">
                <div className="file-details">
                  <Image className="file-icon" />
                  <span className="file-name">{selectedFile?.name}</span>
                  <span className="file-size">
                    ({(selectedFile?.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
              </div>
            </div>
          )}

          {message.text && (
            <div className={`message ${message.type}`}>
              {message.type === "success" && <Check className="message-icon" />}
              <p className="message-text">{message.text}</p>
            </div>
          )}

          <div className="btn-group">
            {preview && (
              <button onClick={clearSelection} disabled={loading} className="btn btn-secondary">
                Change Photo
              </button>
            )}

            <button
              onClick={handleUpload}
              disabled={loading || !selectedFile}
              className="btn btn-primary"
            >
              {loading ? (
                <div className="btn-content">
                  <Loader className="btn-icon spinning" />
                  <span>Uploading...</span>
                </div>
              ) : (
                <div className="btn-content">
                  <Upload className="btn-icon" />
                  <span>Share</span>
                </div>
              )}
            </button>
          </div>

          <p className="footer-text">Your photo will be visible to all your followers</p>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
