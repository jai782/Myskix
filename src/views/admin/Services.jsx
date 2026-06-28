import React from "react";
import ServiceForm from "../../components/ServiceForm";
import ServiceTable from "../../components/ServiceTable";

export default function Services() {
  const handleSave = (data) => {
    console.log("Jasa baru:", data);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Master Jasa
        </h1>

        <p className="text-gray-500">
          Kelola seluruh layanan jasa yang tersedia pada sistem.
        </p>
      </div>

      {/* Form Tambah Jasa */}
      <ServiceForm onSave={handleSave} />

      {/* Tabel Jasa */}
      <ServiceTable />
    </div>
  );
}
