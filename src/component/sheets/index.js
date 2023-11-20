import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

export default function Sheets() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    fetchDataFromSheety();
  }, []);

  const fetchDataFromSheety = () => {
    const apiUrl = 'https://api.sheety.co/1f24acfa034485e5ba8a1fe47e16a2d7/data/sheet1';

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.sheet1);
      })
      .catch((error) => {
        console.error('Error reading data from Sheety', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the SheetDB endpoint
    axios.post('https://sheetdb.io/api/v1/gnyx6t03m0167', formData)
      .then(() => {
        fetchDataFromSheety();
      })
      .catch(error => {
        console.error("Error submitting data to SheetDB", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Data from Sheety</h1>
      {data.length > 0 ? (
        <div>
          <table className="sheets-table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} >
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
      <h2>Submit Data</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
