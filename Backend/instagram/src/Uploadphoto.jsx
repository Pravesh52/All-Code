import React, { useState } from 'react';
import { Upload, X, Check, Camera, Loader, Image } from 'lucide-react';
import './UploadPhoto.css';
import axios from 'axios'

const supabaseUrl = "https://mzqhqzjauvhdxoesmzng.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16cWhxemphdXZoZHhvZXNtem5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2OTc0NTQsImV4cCI6MjA3OTI3MzQ1NH0._AbocMuHR7aEbW2bJv4pNbq_goOiyIby5at6Rej4QAY";
const supabase = createClient(supabaseUrl, supabaseKey);

const UploadPhoto = () => {
  let [img, setImg] = useState(null);
  function handleChange(e){
    setImg(e.target.files[0]);
  }
  async function send(){
    if(!img){
      alert("Please select an image!")
      return;
    }
    try{
      const {data, error} = await supabase.storage.from("insta").upload("insta_images/" + img.name, img, {upsert: true});
      if(error) throw error;
      const imgUrl = `${supabaseUrl}/storage/v1/object/public/insta/insta_images/${img.name}`;
      console.log("Image URL:", imgUrl);
      let token = localStorage.getItem("Token");
      let res = await axios.post('http://localhost:4000/upload',{imgUrl},{headers:{"Authorization":`${token}`}});
      console.log(res.data);
    }
    catch(error){
        
      alert(error)
    }
  }
  return (
    <div>
      <input type="file" onChange={handleChange}/>
      <button onClick={send}>Send</button>
    </div>
  )
}

export default UploadPhoto
