import axios from "axios";

const API_URL = "http://localhost:3000/api/services";

// Ambil semua data jasa
export const getServices = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data jasa:", error);
    throw error;
  }
};

// Tambah jasa
export const createService = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Gagal menambah jasa:", error);
    throw error;
  }
};

// Update jasa
export const updateService = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Gagal mengubah jasa:", error);
    throw error;
  }
};

// Hapus jasa
export const deleteService = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Gagal menghapus jasa:", error);
    throw error;
  }
};
