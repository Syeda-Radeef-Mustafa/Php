import React, { useState } from 'react';
import './index.css';

function DisplayFormData({ formDataArray }) {
  return (
    <div>
      <h2>Form Data:</h2>
      <ul>
        {formDataArray.map((formData, index) => (
          <li key={index}>
            <strong>Data {index + 1}:</strong>
            <ul>
              <li>First Name: {formData.firstName}</li>
              <li>Last Name: {formData.lastName}</li>
              <li>Email: {formData.email}</li>
              <li>Matric: {formData.matric}</li>
              <li>Intermediate: {formData.intermediate}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stepform() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    matric: '',
    intermediate: '',
  });
  const [formDataArray, setFormDataArray] = useState([]);
  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the current step's data in the array format
    setFormDataArray((prevDataArray) => {
      return [...prevDataArray, { ...formData }];
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      matric: '',
      intermediate: '',
    });
    if (step < 2) {
      nextStep();
    }
  };

  return (
    <div className="app-stepform">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step">
            <h2>Step 1: Personal Information</h2>
            <input className='field'
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input className='field'
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input className='field'
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <button className= 'form-button' onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Step 2: Educational Detail</h2>
            <input className='field'
              type="text"
              name="matric"
              placeholder="Matric"
              value={formData.matric}
              onChange={handleChange}
            />
            <input className='field'
              type="text"
              name="intermediate"
              placeholder="Intermediate"
              value={formData.intermediate}
              onChange={handleChange}
            />
            <button className= 'form-button' onClick={previousStep}>Previous</button>
            <button className= 'form-button' type="submit">Submit</button>
          </div>
        )}
      </form>

      {formDataArray.length > 0 && (
        <DisplayFormData formDataArray={formDataArray} />
      )}
    </div>
  );
}

export default Stepform;
