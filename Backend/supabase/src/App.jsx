import React, { useState } from "react";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mzqhqzjauvhdxoesmzng.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16cWhxemphdXZoZHhvZXNtem5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2OTc0NTQsImV4cCI6MjA3OTI3MzQ1NH0._AbocMuHR7aEbW2bJv4pNbq_goOiyIby5at6Rej4QAY";
const supabase = createClient(supabaseUrl, supabaseKey);

const App = () => {
  const [Img, setImg] = useState(null);

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  async function save() {
    if (!Img) {
      alert("Please select an image first!");
      return;
    }

    try {
        const { data, error } = await supabase.storage
        .from("insta")
        .upload("insta_images/" + Img.name, Img, { upsert: true });

      if (error) throw error;

      
      const imgUrl = `${supabaseUrl}/storage/v1/object/public/insta/insta_images/${Img.name}`;
      console.log("Image URL:", imgUrl);

     await axios.post("http://localhost:4000/upload",{imgUrl})
     setImg(null);
    } catch (err) {
       console.error("❌ Upload failed:", err);
      alert("Error uploading image. Check console for details.");
     }
}

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center gap-4">
      <input type="file" onChange={handleFileChange} className="border p-2 rounded" />
      <button
        onClick={save}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
};

export default App;