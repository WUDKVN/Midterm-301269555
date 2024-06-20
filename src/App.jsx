import React from 'react';
import Index from './components/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />

      </Routes>
    </Router>
  );
}

export default App;
