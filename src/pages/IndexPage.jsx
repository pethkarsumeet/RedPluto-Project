import React from 'react';
import { Link } from 'react-router-dom';

function IndexPage({ students, setStudents }) {
  const handleDelete = (id) => {
    const updated = students.filter((_, index) => index !== id);
    setStudents(updated);
  };

  return (
    <div>
      <h2 className="text-primary">📋 Student List</h2>
      <Link to="/create" className="btn btn-success mb-3">➕ Add New Student</Link> 
      <table className="table table-striped table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Age</th>
            {[...Array(5)].map((_, i) => <th key={i}>M{i + 1}</th>)}
            <th>%</th>
            <th>Division</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr><td colSpan="10">No records found</td></tr>
          ) : (
            students.map((s, index) => (
              <tr key={index}>
                <td>{s.name}</td>
                <td>{s.age}</td>
                {s.marks.map((m, i) => <td key={i}>{m}</td>)}
                <td>{s.percentage}</td>
                <td>{s.division}</td>
                <td><Link to={`/edit/${index}`} className="btn btn-warning btn-sm">✏️ Edit</Link></td>
                <td><button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm">🗑️ Delete</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default IndexPage;