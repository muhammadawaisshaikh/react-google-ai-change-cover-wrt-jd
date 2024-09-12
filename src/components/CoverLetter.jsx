import useStore from "../store/cover-jd-store";

const CoverLetter = () => {
  const { coverLetter, setCoverLetter } = useStore();

  const handleInputChange = (e) => {
    setCoverLetter(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-2">Cover Letter</h3>
      <p>Update your cover letter to perfectly match the job description on the right side.</p>
      <div className="form-group">
        <textarea
          value={coverLetter}
          onChange={handleInputChange}
          placeholder="Enter your cover letter here..."
          className="form-control"
          style={{ height: '70vh', resize: 'none' }}
        />
      </div>
    </div>
  );
};

export default CoverLetter;