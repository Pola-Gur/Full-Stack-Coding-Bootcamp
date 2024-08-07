import { useState } from 'react';
import './App.css';
import FormComponent from './FormComponent';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setSubmittedData(formData);

    const queryParams = new URLSearchParams();

    for (const key in formData) {
      if (formData[key]) {
        queryParams.append(key, formData[key]);
      }
    }

    if (formData.nutsFree) queryParams.append('nutsFree', 'on');
    if (formData.lactoseFree) queryParams.append('lactoseFree', 'on');
    if (formData.vegan) queryParams.append('vegan', 'on');

    window.history.pushState({}, '', `?${queryParams.toString()}`);
  };

  return (
    <>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {submittedData && (
        <div>
          <h2>Entered information:</h2>
          <p>Your name: {submittedData.firstName} {submittedData.lastName}</p>
          <p>Your age: {submittedData.age}</p>
          <p>Your gender: {submittedData.gender}</p>
          <p>Your destination: {submittedData.destination}</p>
          <p>Your dietary restrictions:</p>
          <p>**Nuts free: {submittedData.nutsFree ? 'Yes' : 'No'}</p>
          <p>**Lactose free: {submittedData.lactoseFree ? 'Yes' : 'No'}</p>
          <p>**Vegan meal: {submittedData.vegan ? 'Yes' : 'No'}</p>
        </div>
      )}
    </>
  );
}

export default App;
