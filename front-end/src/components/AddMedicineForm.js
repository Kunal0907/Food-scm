import React, { useState } from "react";
import { addMedicine } from "../services/backendService"; // Import the backend service

function AddMedicineForm() {
  const [medicineData, setMedicineData] = useState({
    medicineID: "",
    name: "",
    manufacturer: "",
    expiryDate: "",
    count: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMedicineData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the addMedicine function from the backend service
      const response = await addMedicine(medicineData);
      console.log("Food added:", response);
      // Optionally, you can redirect to another page or display a success message
    } catch (error) {
      console.error("Error adding food:", error);
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <div>
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Food ID:</label>
          <input
            type="text"
            name="medicineID"
            value={medicineData.medicineID}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={medicineData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price(₹):</label>
          <input
            type="text"
            name="manufacturer"
            value={medicineData.manufacturer}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Order Date:</label>
          <input
            type="date"
            name="expiryDate"
            value={medicineData.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Count:</label>
          <input
            type="number"
            name="count"
            value={medicineData.count}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddMedicineForm;
