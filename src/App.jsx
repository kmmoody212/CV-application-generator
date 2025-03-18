import { useState } from 'react'
import './App.css'
import BasicInfo from './pages/BasicInfo.jsx'
import Education from './pages/Education.jsx'
import Experience from './pages/Experience.jsx'

// TODO: When a value is entered in the inputs, onBlur needs to re-render the data in the Resume 

// TODO: Create layout of the resume

function App() {

  return (
    <>
    <h1 className="page-title">Create your Resume</h1>
    <p className="desc">Fill out the information below. When you are done, click on the "Submit" button to finalize your resume!</p>

    <div className="content">
      <div className="left-side">
        <BasicInfo />
        <Education />
        <Experience />        
      </div>

      <div className="right-side">
        <h2>Preview Resume</h2>
        {/* THE RESUME */}
      </div>
    </div>
    </>
  )
}

export default App;
