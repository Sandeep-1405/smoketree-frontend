import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [addressLine, setAddressLine] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users', {
        name,
        addressLine,
      });
      console.log(response.data);
      if(response.data){
        alert('Name and Address Saved Successfully')
        setAddressLine('')
        setName('')
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Address Form</h1>
      <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded bg-light">
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <textarea
            className="form-control"
            id="address"
            rows="4"
            placeholder="Enter your address"
            value={addressLine}
            onChange={(e) => setAddressLine(e.target.value)}
            required
          ></textarea>
        </div>
        <div className='text-center'>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </div>
        
      </form>
    </div>
  );
}

export default App;
