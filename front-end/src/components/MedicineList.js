import React, { useState, useEffect } from "react";
import { getAllMedicines } from "../services/backendService"; // Import the backend service

function MedicineList() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    async function fetchMedicines() {
      try {
        // Call the getAllMedicines function from the backend service
        const response = await getAllMedicines();
        setMedicines(response.data);
      } catch (error) {
        console.error("Error fetching food:", error);
      }
    }

    fetchMedicines();
  }, []);

  return (
    <div>
      <h2>Food List</h2>
      <table>
        <thead>
          <tr>
            <th>Food ID</th>
            <th>Name</th>
            <th>Price(₹)</th>
            <th>Order Date</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.medicineID}>
              <td>{medicine.medicineID}</td>
              <td>{medicine.name}</td>
              <td>{medicine.manufacturer}</td>
              <td>{medicine.expiryDate}</td>
              <td>{medicine.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineList;
