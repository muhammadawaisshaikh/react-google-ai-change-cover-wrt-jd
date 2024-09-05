import { useState } from 'react';

const CoverLetter = () => {
  const [cover, setCover] = useState('');

  const handleInputChange = (e) => {
    setCover(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-2">Cover Letter</h3>
      <p>Update your cover letter to perfectly match the job description on the right side.</p>
      <div className="form-group">
        <textarea
          value={cover}
          onChange={handleInputChange}
          placeholder="Enter your cover letter here..."
          className="form-control"
          style={{ height: '40vh', resize: 'none' }}
        />
      </div>
    </div>
  );
};

export default CoverLetter;