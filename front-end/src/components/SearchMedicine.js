import React, { useState } from "react";
import { getMedicineById } from "../services/backendService"; // Import the backend service

function SearchMedicine() {
  const [medicineID, setMedicineID] = useState("");
  const [medicineData, setMedicineData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setMedicineID(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the getMedicineById function from the backend service
      const response = await getMedicineById(medicineID);
      setMedicineData(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching food:", error);
      setMedicineData(null);
      setError("Food not found");
    }
  };

  return (
    <div>
      <h2>Search Food</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Food ID:</label>
          <input
            type="text"
            value={medicineID}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {medicineData && (
        <div>
          <h3>Food Details</h3>
          <p>
            <strong>Food ID:</strong> {medicineData.medicineID}
          </p>
          <p>
            <strong>Name:</strong> {medicineData.name}
          </p>
          <p>
            <strong>Price(₹):</strong> {medicineData.manufacturer}
          </p>
          <p>
            <strong>Order Date:</strong> {medicineData.expiryDate}
          </p>
          <p>
            <strong>Count:</strong> {medicineData.count}
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchMedicine;
