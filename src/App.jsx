// src/App.js
import React from 'react';
import CoverLetter from './components/CoverLetter';
import JobDescription from './components/JobDescription';
import Banner from './components/Banner';
import { TransformCoverAi } from './core/api/transorm-cover';
import useStore from './store/cover-jd-store';

function App() {
  const { coverLetter, jobDescription, transformedCoverLetter, setTransformedCoverLetter } = useStore();

  const handleTransform = async () => {
    const transformedCoverLetter = await TransformCoverAi(coverLetter, jobDescription);
    setTransformedCoverLetter(transformedCoverLetter);
  };

  return (
    <>
      <Banner />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <CoverLetter />
          </div>
          <div className="col-lg-6">
            <JobDescription />
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-success mt-4 btn-lg" onClick={handleTransform}>Transform Cover Letter</button>
          </div>
        </div>
        <div className="mt-4">
          {transformedCoverLetter ? (
            <>
              <h3>Transformed Cover Letter</h3>
              <p>{transformedCoverLetter}</p>
            </>
          ) : (
            <p>No transformed cover letter available. Please input the cover letter and job description, then click "Transform Cover Letter."</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
