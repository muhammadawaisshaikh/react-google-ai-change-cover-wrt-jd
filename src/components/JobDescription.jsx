import useStore from "../store/cover-jd-store";

const JobDescription = () => {
  const { jobDescription, setJobDescription } = useStore();

  const handleInputChange = (e) => {
    setJobDescription(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-2">Job Description</h3>
      <p>Enter the job description below to see your cover letter automatically updated.</p>
      <div className="form-group">
        <textarea
          value={jobDescription}
          onChange={handleInputChange}
          placeholder="Enter the job description here..."
          className="form-control"
          style={{ height: '70vh', resize: 'none' }}
        />
      </div>
    </div>
  );
};

export default JobDescription;
