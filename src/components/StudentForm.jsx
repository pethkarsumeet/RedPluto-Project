import React, { useState, useEffect } from 'react';

function StudentForm({ onSubmit, initialData }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [marks, setMarks] = useState(['', '', '', '', '']);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setAge(initialData.age);
      setMarks(initialData.marks);
    }
  }, [initialData]);

  const handleMarksChange = (value, index) => {
    const updated = [...marks];
    updated[index] = value;
    setMarks(updated);
  };

  const calculatePercentage = () => {
    const total = marks.reduce((sum, m) => sum + Number(m), 0);
    return (total / 5).toFixed(1);
  };

  const getDivision = (percent) => {
    if (percent >= 60) return 'First Division';
    if (percent >= 50) return 'Second Division';
    if (percent >= 40) return 'Third Division';
    return 'Fail';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const percentage = calculatePercentage();
    const division = getDivision(percentage);
    const student = { name, age, marks, percentage, division };
    onSubmit(student);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-3 rounded shadow-sm">
      <input className="form-control mb-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input className="form-control mb-2" placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      {marks.map((m, i) => (
        <input
          key={i}
          className="form-control mb-2"
          placeholder={`Marks ${i + 1}`}
          value={m}
          type="number"
          onChange={(e) => handleMarksChange(e.target.value, i)}
          required
        />
      ))}
      <button className="btn btn-primary w-100" type="submit">Save</button>
    </form>
  );
}

export default StudentForm;