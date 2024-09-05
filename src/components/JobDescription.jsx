import { useState } from 'react';

const JobDescription = () => {
  const [description, setDescription] = useState('');

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-2">Job Description</h3>
      <p>Enter the job description below to see your cover letter automatically updated.</p>
      <div className="form-group">
        <textarea
          value={description}
          onChange={handleInputChange}
          placeholder="Enter the job description here..."
          className="form-control"
          style={{ height: '40vh', resize: 'none' }}
        />
      </div>
    </div>
  );
};

export default JobDescription;
