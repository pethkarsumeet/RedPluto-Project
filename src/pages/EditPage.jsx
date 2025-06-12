import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

function EditPage({ students, setStudents }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const studentIndex = parseInt(id);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdate = (updatedStudent) => {
    const updatedList = students.map((stu, i) =>
      i === studentIndex ? updatedStudent : stu
    );
    setStudents(updatedList);
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
      <h2 className="mb-3">✏️ Edit Student</h2>
      <StudentForm initialData={students[studentIndex]} onSubmit={handleUpdate} />

      {showSuccess && (
        <div className="alert alert-info mt-3">
          🔁 Student updated successfully!
        </div>
      )}
    </div>
  );
}

export default EditPage;
