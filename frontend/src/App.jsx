// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './Components/SecondPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello from APP</h1>} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
