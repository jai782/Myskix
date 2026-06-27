import React, { useState } from "react";

export default function CategoryForm({ onSave }) {
  const [form, setForm] = useState({
    nama: "",
    deskripsi: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nama.trim()) {
      alert("Nama kategori wajib diisi!");
      return;
    }

    if (onSave) {
      onSave(form);
    }

    setForm({
      nama: "",
      deskripsi: "",
    });
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">
        Tambah Kategori
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Nama Kategori
          </label>

          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Masukkan nama kategori"
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Deskripsi
          </label>

          <textarea
            rows="4"
            name="deskripsi"
            value={form.deskripsi}
            onChange={handleChange}
            placeholder="Masukkan deskripsi kategori"
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Simpan Kategori
        </button>

      </form>
    </div>
  );
}
