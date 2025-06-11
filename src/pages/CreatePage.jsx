import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

function CreatePage({ students, setStudents }) {
  const navigate = useNavigate();

  const handleCreate = (student) => {
    setStudents([...students, student]);
    navigate('/');
  };

  return (
    <div>
      <h2 className="text-success">➕ Create Student</h2>
      <StudentForm onSubmit={handleCreate} />
    </div>
  );
}

export default CreatePage;
