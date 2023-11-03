import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Detail from './Detail';
import Contact from './Contact';
import Dashboard from './Dashboard';
import AddStaff from './AddStaff';
import UpdateStaff from './UpdateStaff';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addstaff" element={<AddStaff />} />
          <Route path="/edit/:id" render={UpdateStaff} element={<UpdateStaff />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;