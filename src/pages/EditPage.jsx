import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

function EditPage({ students, setStudents }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = parseInt(id);
  const student = students[index];

  const handleUpdate = (updatedStudent) => {
    const updatedList = [...students];
    updatedList[index] = updatedStudent;
    setStudents(updatedList);
    navigate('/');
  };

  return (
    <div>
      <h2 className="text-warning">✏️ Edit Student</h2>
      <StudentForm onSubmit={handleUpdate} initialData={student} />
    </div>
  );
}

export default EditPage;