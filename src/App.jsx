import './App.css';
import useStore from './store/cover-jd-store';
import Banner from './components/Banner'
import CoverLetter from './components/CoverLetter'
import JobDescription from './components/JobDescription'
import { TransormCoverAi } from './core/api/transorm-cover';
import { useState } from 'react';


function App() {
  const { coverLetter, jobDescription } = useStore();
  const [result, setResult] = useState('');

  const handleTransform = async () => {
    try {
      const transformedCoverLetter = await TransormCoverAi(coverLetter, jobDescription);
      setResult(transformedCoverLetter);
    } catch (error) {
      console.error("Error transforming cover letter:", error);
    }
  };

  return (
    <>
      <Banner />
      <div className="container">
        <div className='row'>
          <div className="col-6">
            <CoverLetter />
          </div>
          <div className="col-6">
            <JobDescription />
          </div>
          <div className="col-12 text-center mt-5">
            <button onClick={handleTransform} className='btn btn-success btn-lg'>Transform Now!</button>
          </div>
        </div>

        <div className='border p-4 rounded mt-5'>
          <h3 className='mb-4'>Updated cover letter to match the job requirements and make your application stand out.</h3>
          <p>{result}</p>
        </div>
      </div>
    </>
  )
}

export default App
