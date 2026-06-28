import React from "react";
import CategoryForm from "../../components/CategoryForm";
import CategoryTable from "../../components/CategoryTable";

export default function Categories() {
  const handleSave = (data) => {
    console.log("Kategori baru:", data);
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Master Kategori
        </h1>

        <p className="text-gray-500">
          Kelola kategori barang yang digunakan pada sistem inventori.
        </p>
      </div>

      <CategoryForm onSave={handleSave} />

      <CategoryTable />
    </div>
  );
}
