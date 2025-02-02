import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await axios.get('http://localhost:3000');
      const msg = response.data.msg;
      console.log(msg);
      setMessage(msg);
    } catch (err) {
      console.log('Error ', err);
    }
  };
  
  // Call the function to fetch the message
  fetchMessage();
  

  return (
    <>
      <h1>Hello from frontend</h1>
      {message && <h1>{message}</h1>}
    </>
  );
}

export default App;
