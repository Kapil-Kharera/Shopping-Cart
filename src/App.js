import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  )
}

export default App;