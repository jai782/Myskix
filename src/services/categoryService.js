import axios from "axios";

const API_URL = "http://localhost:3000/api/categories";

// Ambil semua kategori
export const getCategories = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data kategori:", error);
    throw error;
  }
};

// Tambah kategori
export const createCategory = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Gagal menambah kategori:", error);
    throw error;
  }
};

// Update kategori
export const updateCategory = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Gagal mengubah kategori:", error);
    throw error;
  }
};

// Hapus kategori
export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Gagal menghapus kategori:", error);
    throw error;
  }
};
