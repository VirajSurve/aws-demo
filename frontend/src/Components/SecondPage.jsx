// FirstPage.jsx
import { useState, useEffect } from 'react';
import axios from "axios";

function SecondPage() {
  const [message, setMessage] = useState('');
  const [greeting, setGreeting] = useState('');

  // API URL from environment variables
  const API_URL = import.meta.env.VITE_API_URL;

  // Function to fetch message from backend
  const fetchMessage = async () => {
    try {
      const response = await axios.get(`${API_URL}/`);
      setMessage(response.data.msg);
    } catch (err) {
      console.error('Error fetching message:', err);
    }
  };

  // Call fetchMessage on component mount
  useEffect(() => {
    fetchMessage();
  }, []);

  // Function to send data to backend
  async function handleSend() {
    try {
      const response = await axios.post(`${API_URL}/write`, { greeting });
      console.log("Response from backend:", response.data);
    } catch (err) {
      console.error("Error sending data:", err);
    }
  }

  return (
    <>
      <h1>Hello from frontend</h1>
      {message && <h1>{message}</h1>}
      
      <div>
        <input 
          type='text' 
          value={greeting} 
          onChange={(e) => setGreeting(e.target.value)} 
          placeholder="Enter greeting" 
        />
        <button onClick={handleSend}>Send from second page</button>
      </div>
    </>
  );
}

export default SecondPage;
