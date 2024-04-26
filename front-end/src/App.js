// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import './index.css';
import AddMedicineForm from './components/AddMedicineForm';
import SearchMedicine from './components/SearchMedicine';
import MedicineList from './components/MedicineList';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AddMedicineForm />} />
        <Route path="/search" element={<SearchMedicine />} />
        <Route path="/list" exact element={<MedicineList />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
