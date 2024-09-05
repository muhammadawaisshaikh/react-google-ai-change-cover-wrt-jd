import './App.css'
import Banner from './components/Banner'
import CoverLetter from './components/CoverLetter'
import JobDescription from './components/JobDescription'

function App() {
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
            <button type="button" className='btn btn-success btn-lg'>Transform Now!</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
