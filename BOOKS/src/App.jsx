import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Bookpage from './Components/Bookpage';
import Formpage from './Components/Formpage';

function App() {
  // Render the main App component with React Router
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Bookpage />} />
        <Route path="/form" element={<Formpage />} />
      </Routes>
    </Router>
  );
}
// Export the main App component
export default App;
