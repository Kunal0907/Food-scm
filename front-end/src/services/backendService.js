const BASE_URL = 'http://localhost:5000/api/medicines'; // Update with your backend base URL

async function addMedicine(medicineData) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicineData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding medicine:', error);
        throw error;
    }
}

async function getMedicineById(medicineID) {
    try {
        const response = await fetch(`${BASE_URL}/${medicineID}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting medicine by ID:', error);
        throw error;
    }
}

async function getAllMedicines() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting all medicines:', error);
        throw error;
    }
}

export { addMedicine, getMedicineById, getAllMedicines };
