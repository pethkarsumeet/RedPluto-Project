import React, { useState, useEffect } from 'react';
import StudentForm from '../components/StudentForm';
import { useNavigate } from 'react-router-dom';

function CreatePage({ students, setStudents }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
    setShowSuccess(true);
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, navigate]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">➕ Create Student</h2>
      <StudentForm onSubmit={handleAddStudent} />

      {showSuccess && (
        <div className="alert alert-success mt-3">
          ✅ Student added successfully!
        </div>
      )}
    </div>
  );
}

export default CreatePage;
