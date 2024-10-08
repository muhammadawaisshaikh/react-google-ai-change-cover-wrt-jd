import React, { useState } from 'react';
import CoverLetter from './components/CoverLetter';
import JobDescription from './components/JobDescription';
import Banner from './components/Banner';
import CustomPopup from './components/CustomPopup';
import Loader from './components/Loader';
import { TransformCoverAi } from './core/api/transorm-cover';
import useStore from './store/cover-jd-store';
import useLoaderStore from './store/loader-store';

function App() {
  const { coverLetter, jobDescription, transformedCoverLetter, setTransformedCoverLetter } = useStore();
  const { isLoading, setLoading } = useLoaderStore();
  const [showModal, setShowModal] = useState(false);

  const handleTransform = async () => {
    setLoading(true);

    try {
      const transformedCoverLetter = await TransformCoverAi(coverLetter, jobDescription);
      await setTransformedCoverLetter(transformedCoverLetter);
      handleShow();
    }
    catch (error) {
      console.error('Error transforming cover letter:', error);
    }
    finally {
      console.log('Loading ended');
      setLoading(false);
    }
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const footerButtons = [
    { label: 'Close', className: 'btn-secondary', onClick: handleClose }
  ];

  return (
    <>
      <Loader isLoading={isLoading} />
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
      </div>

      <CustomPopup
        show={showModal}
        handleClose={handleClose}
        title="Transformed Cover Letter"
        bodyContent={
          <p>{transformedCoverLetter}</p>
        }
        footerButtons={footerButtons}
      />
    </>
  );
}

export default App;
