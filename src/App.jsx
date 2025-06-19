import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

function App() {
  const [students, setStudents] = useState([]);

  return (
    <Router  basename="/RedPluto-Project/">
      <Routes >
        <Route path="/" element={<IndexPage students={students} setStudents={setStudents} />} />
        <Route path="/create" element={<CreatePage students={students} setStudents={setStudents} />} />
        <Route path="/edit/:id" element={<EditPage students={students} setStudents={setStudents} />} />
      </Routes>
    </Router>
  );
}

export default App;
