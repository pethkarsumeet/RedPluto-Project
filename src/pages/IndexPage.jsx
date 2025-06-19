import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function IndexPage({ students, setStudents }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [divisionFilter, setDivisionFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 5;

  const handleDeleteClick = (index) => {
    setSelectedId(index);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    setStudents(students.filter((_, i) => i !== selectedId));
    setShowConfirm(false);
  };

  // Filter logic
  const filteredStudents = students.filter((stu) => {
    const nameMatch = stu.name.toLowerCase().includes(nameFilter.toLowerCase());
    const divisionMatch = divisionFilter ? stu.division === divisionFilter : true;
    return nameMatch && divisionMatch;
  });
 
  // Pagination logic
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const changePage = (number) => setCurrentPage(number);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">📚 Student Records</h2>
      <Link to="/create" className="btn btn-success mb-3">➕ Add Student</Link>

      {/* 🔍 Filter Inputs */}
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Name..."
            value={nameFilter}
            onChange={(e) => {
              setNameFilter(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={divisionFilter}
            onChange={(e) => {
              setDivisionFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All Divisions</option>
            <option value="First Division">First Division</option>
            <option value="Second Division">Second Division</option>
            <option value="Third Division">Third Division</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
      </div>

      {/* 📋 Table */}
      <table className="table table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>M1</th>
            <th>M2</th>
            <th>M3</th>
            <th>M4</th>
            <th>M5</th>
            <th>Percentage</th>
            <th>Division</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.length > 0 ? (
            currentStudents.map((stu, index) => (
              <tr key={index}>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                {stu.marks.map((mark, i) => (
                  <td key={i}>{mark}</td>
                ))}
                <td>{stu.percentage}%</td>
                <td>{stu.division}</td>
                <td>
                  <Link to={`/edit/${students.indexOf(stu)}`} className="btn btn-warning btn-sm me-2">✏️ Edit</Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(students.indexOf(stu))}>🗑 Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="10">No matching records found.</td></tr>
          )}
        </tbody>
      </table>

      {/* 📌 Pagination Controls */}
      {filteredStudents.length > studentsPerPage && (
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
              <button className="page-link" onClick={() => changePage(currentPage - 1)}>Previous</button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
              >
                <button className="page-link" onClick={() => changePage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
              <button className="page-link" onClick={() => changePage(currentPage + 1)}>Next</button>
            </li>
          </ul>
        </nav>
      )}

      {/* ⚠️ Delete Confirmation */}
      {showConfirm && (
        <div className="alert alert-warning d-flex justify-content-between align-items-center mt-3">
          <span>⚠️ Are you sure you want to delete this student?</span>
          <div>
            <button className="btn btn-danger btn-sm me-2" onClick={confirmDelete}>Yes</button>
            <button className="btn btn-secondary btn-sm" onClick={() => setShowConfirm(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default IndexPage;
